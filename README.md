[![Coverage](https://img.shields.io/codecov/c/github/markdalgleish/react-themeable/master.svg?style=flat-square)](https://codecov.io/github/markdalgleish/mui-md3-theme) [![npm](https://img.shields.io/npm/v/react-themed.svg?style=flat-square)](https://www.npmjs.com/package/mui-md3-theme)

# mui-md3-theme
Custom MUI Themes using custom color palette and typography inspired by Material Design 3. Ideal for developers looking to apply modern, dynamic color theming in their React applications using MUI v6+. Includes support for light and dark modes, tonal palettes, and extended theme customization.

***

## Installation
Install the stable version:
```bash
$ npm i --save mui-md3-theme
```
```bash
$ yarn add mui-md3-theme
```

***

## Usage
```javascript
import { MuiMD3ThemeProvider } from 'mui-md3-theme'

const App = props => (
  <MuiMD3ThemeProvider theme={props.theme} customColors={{ primary: '#006491', secondary: '#50606E', tertiary: '#6A4FA3'}} />
    {props.children}
  </MuiMD3ThemeProvider>
)
```

