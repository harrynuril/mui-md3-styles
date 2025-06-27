import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    /** additional custom color to match MD3 color role */
    tertiary: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}
