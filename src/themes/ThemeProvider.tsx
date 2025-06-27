import { PaletteMode, Theme } from '@mui/material';
import { createTheme, PaletteOptions, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultColorShades } from 'themes/defaults/colors';
import { Palette } from 'themes/interfaces';
import { ThemeColorShades } from 'themes/interfaces/color';
import { createMuiPalette, createThemeColorPalette, generateColorShade, isHexColor } from 'utils';

interface ThemeContextType {
  /** Sets the color mode of the application's theme. **/
  setColorMode: (themeMode: PaletteMode) => void;

  /** Retrieve the appropriate theme based on the provided palette mode. **/
  getTheme: (mode: PaletteMode) => Theme;

  /** Application light theme **/
  lightTheme: Theme;

  /** Application dark theme **/
  darkTheme: Theme;
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

interface Props {
  theme: Theme;
  customColors?: {
    primary?: string | 'default';
    secondary?: string | 'default';
    tertiary?: string | 'default';
    info?: string | 'default';
    success?: string | 'default';
    warning?: string | 'default';
    errors?: string | 'default';
  };
  children?: ReactNode;
}

export const MuiMD3ThemeProvider = ({ theme, customColors, children }: Props) => {
  const { palette, ...restTheme } = theme;

  const [themeColorShades, setThemeColorShades] = useState<ThemeColorShades>();
  const [lightTheme, setLightTheme] = useState<Theme>();
  const [darkTheme, setDarkTheme] = useState<Theme>();
  const [mode, setMode] = useState<PaletteMode>(palette.mode);

  if (palette.mode !== 'light') {
    throw new Error(`The theme mode must in 'light' mode , but got '${palette.mode}'.`);
  }

  const getNewColorShade = useCallback(
    (color: string) => {
      if (customColors && customColors[color]) {
        return isHexColor(customColors[color])
          ? generateColorShade(customColors[color])
          : customColors[color] !== 'default' && palette[color]
            ? generateColorShade(palette[color].main)
            : defaultColorShades[color];
      } else {
        return generateColorShade(palette.primary.main);
      }
    },
    [customColors, palette],
  );

  const createThemeByPalette = useCallback(
    (muiPalette: PaletteOptions, palette: Partial<Palette> = {}): Theme => {
      const themeOptions: ThemeOptions = {
        ...restTheme,
        palette: muiPalette,
        color: palette,
      };
      return createTheme(themeOptions);
    },
    [restTheme],
  );

  useEffect(() => {
    if (!theme) return;

    setThemeColorShades({
      primary: getNewColorShade('primary'),
      secondary: getNewColorShade('secondary'),
      tertiary: getNewColorShade('tertiary'),
      info: getNewColorShade('info'),
      success: getNewColorShade('success'),
      warning: getNewColorShade('warning'),
      error: getNewColorShade('error'),
      neutral: defaultColorShades.neutral,
      neutralVariant: defaultColorShades.neutralVariant,
    });
  }, [theme]);

  useEffect(() => {
    if (!themeColorShades) return;

    const newLightPalette = createThemeColorPalette(themeColorShades, 'light');
    const newDarkPalette = createThemeColorPalette(themeColorShades, 'dark');
    const newMuiLightPalette = createMuiPalette(newLightPalette);
    const newMuiDarkPalette = createMuiPalette(newDarkPalette);
    const newLightTheme = createThemeByPalette(newMuiLightPalette, newLightPalette);
    const newDarkTheme = createThemeByPalette(newMuiDarkPalette, newDarkPalette);

    setLightTheme(newLightTheme);
    setDarkTheme(newDarkTheme);
  }, [themeColorShades]);

  if (!lightTheme || !darkTheme) return;

  /**
   * Sets the color mode of the application's theme.
   *
   * @callback setColorMode
   * @param {PaletteMode} themeMode - The desired theme mode to be applied, e.g., 'light' or 'dark'.
   */
  const setColorMode = useCallback((themeMode: PaletteMode) => {
    setMode(themeMode);
  }, []);

  /**
   * Retrieve the appropriate theme based on the provided palette mode.
   *
   * @function
   * @param {PaletteMode} mode - The color scheme mode, either 'light' or 'dark'.
   * @returns {Object} - The corresponding theme object for the specified mode.
   */
  const getTheme = useCallback(
    (mode: PaletteMode) => {
      return mode === 'light' ? lightTheme : darkTheme;
    },
    [darkTheme, lightTheme],
  );

  const themeContextValue = useMemo(
    () => ({
      setColorMode,
      getTheme,
      lightTheme,
      darkTheme,
    }),
    [setColorMode, getTheme, lightTheme, darkTheme],
  );

  const _theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [darkTheme, lightTheme, mode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MUIThemeProvider theme={_theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useMD3Theme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useMD3Theme must be used within a MuiMD3ThemeProvider');
  }
  return context as ThemeContextType;
};
