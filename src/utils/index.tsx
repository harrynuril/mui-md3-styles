import { darken, lighten, PaletteMode } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles';
import { defaultColorShades } from 'themes/defaults/colors';
import { ColorShades, Palette } from 'themes/interfaces';
import { ThemeColorShades } from 'themes/interfaces/color';

const DEFAULT_FACTOR = 40;

const darkerShade = (color: string, shadeNumber: number) => {
  const coefficient = 1 - shadeNumber / DEFAULT_FACTOR;
  return darken(color, coefficient);
};

const lighterShade = (color: string, shadeNumber: number) => {
  const coefficient = (shadeNumber - DEFAULT_FACTOR) / (100 - DEFAULT_FACTOR);
  return lighten(color, coefficient);
};

export const generateColorShade = (color: string) => {
  const arrayOfKeys: string[] = Object.keys(defaultColorShades.neutral);
  const numbers = arrayOfKeys.map(key => parseInt(key));

  return numbers.reduce((acc, key) => {
    acc[key as keyof ColorShades] = key === 40 ? color : key > 40 ? lighterShade(color, key) : darkerShade(color, key);
    return acc;
  }, {} as ColorShades);
};

export const isHexColor = (str: string) => {
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(str);
};

export const createThemeColorPalette = (themeShades: ThemeColorShades, mode: PaletteMode) => {
  const { primary, secondary, tertiary, error, success, warning, info, neutral, neutralVariant } = themeShades;
  const palette: Partial<Palette> = {
    mode: mode,
    primary: mode === 'light' ? primary[40] : primary[80],
    onPrimary: mode === 'light' ? primary[100] : primary[20],
    primaryContainer: mode === 'light' ? primary[90] : primary[30],
    onPrimaryContainer: mode === 'light' ? primary[10] : primary[90],
    primaryFixed: mode === 'light' ? primary[90] : primary[90],
    onPrimaryFixed: mode === 'light' ? primary[10] : primary[10],
    onPrimaryFixedVariant: mode === 'light' ? primary[30] : primary[30],
    primaryFixedDim: mode === 'light' ? primary[80] : primary[80],
    secondary: mode === 'light' ? secondary[40] : secondary[80],
    onSecondary: mode === 'light' ? secondary[100] : secondary[20],
    secondaryContainer: mode === 'light' ? secondary[90] : secondary[30],
    onSecondaryContainer: mode === 'light' ? secondary[10] : secondary[90],
    tertiary: mode === 'light' ? tertiary[40] : tertiary[80],
    onTertiary: mode === 'light' ? tertiary[100] : tertiary[20],
    tertiaryContainer: mode === 'light' ? tertiary[90] : tertiary[30],
    onTertiaryContainer: mode === 'light' ? tertiary[10] : tertiary[90],
    error: mode === 'light' ? error[40] : error[80],
    onError: mode === 'light' ? error[100] : error[20],
    errorContainer: mode === 'light' ? error[90] : error[30],
    onErrorContainer: mode === 'light' ? error[10] : error[90],
    success: mode === 'light' ? success[40] : success[80],
    onSuccess: mode === 'light' ? success[100] : success[20],
    successContainer: mode === 'light' ? success[90] : success[30],
    onSuccessContainer: mode === 'light' ? success[10] : success[90],
    warning: mode === 'light' ? warning[40] : warning[80],
    onWarning: mode === 'light' ? warning[100] : warning[20],
    warningContainer: mode === 'light' ? warning[90] : warning[30],
    onWarningContainer: mode === 'light' ? warning[10] : warning[90],
    info: mode === 'light' ? info[40] : info[80],
    onInfo: mode === 'light' ? info[100] : info[20],
    infoContainer: mode === 'light' ? info[90] : info[30],
    onInfoContainer: mode === 'light' ? info[10] : info[90],
    surface: mode === 'light' ? neutral[98] : neutral[6],
    onSurface: mode === 'light' ? neutral[10] : neutral[90],
    surfaceBright: mode === 'light' ? neutral[98] : neutral[24],
    surfaceDim: mode === 'light' ? neutral[87] : neutral[6],
    surfaceContainer: mode === 'light' ? neutral[94] : neutral[12],
    surfaceContainerHigh: mode === 'light' ? neutral[92] : neutral[17],
    surfaceContainerHighest: mode === 'light' ? neutral[90] : neutral[22],
    surfaceContainerLow: mode === 'light' ? neutral[96] : neutral[10],
    surfaceContainerLowest: mode === 'light' ? neutral[100] : neutral[4],
    surfaceVariant: mode === 'light' ? neutralVariant[90] : neutralVariant[30],
    onSurfaceVariant: mode === 'light' ? neutralVariant[30] : neutralVariant[80],
    inverseSurface: mode === 'light' ? neutral[20] : neutral[90],
    inverseOnSurface: mode === 'light' ? neutral[95] : neutral[20],
    inversePrimary: mode === 'light' ? primary[80] : primary[40],
    outline: mode === 'light' ? neutralVariant[50] : neutralVariant[60],
    outlineVariant: mode === 'light' ? neutralVariant[80] : neutralVariant[30],
    shadow: mode === 'light' ? neutral[0] : neutral[0],
  };
  return palette;
};

export const createMuiPalette = (md3Palette: Partial<Palette>) => {
  const palette: PaletteOptions = {
    mode: md3Palette.mode,
    background: {
      paper: md3Palette.surface,
      default: md3Palette.surface,
    },
    primary: {
      main: md3Palette.primary!,
    },
    secondary: {
      main: md3Palette.secondary!,
    },
    tertiary: {
      main: md3Palette.tertiary!,
      contrastText: md3Palette.onTertiary,
    },
    success: {
      main: md3Palette.success!,
    },
    error: {
      main: md3Palette.error!,
    },
    warning: {
      main: md3Palette.warning!,
    },
    info: {
      main: md3Palette.info!,
    },
  };
  return palette;
};
