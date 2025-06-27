import { Components, Theme } from '@mui/material/styles';

export const typographyComponent: Components<Omit<Theme, 'components'>> = {
  MuiTypography: {
    defaultProps: {
      fontFamily: '"Open Sans Variable", "Helvetica", "Arial", "sans-serif"',
      variantMapping: {
        headlineSmall: 'h1',
        titleLarge: 'h2',
        titleMedium: 'h3',
        titleSmall: 'h4',
        bodyLarge: 'div',
        bodyMedium: 'div',
        bodySmall: 'div',
        labelLarge: 'span',
        labelMedium: 'span',
        labelSmall: 'span',
      },
    },
  },
};
