import { Palette } from 'themes/interfaces';

declare module '@mui/material/styles' {
  interface Theme {
    color: Palette;
  }

  interface ThemeOptions {
    color: Partial<Palette>;
  }
}
