[![Coverage](https://img.shields.io/codecov/c/github/harrynuril/mui-md3-styles/master.svg?style=flat-square)](https://codecov.io/github/harrynuril/mui-md3-styles) [![npm](https://img.shields.io/npm/v/react-themed.svg?style=flat-square)](https://www.npmjs.com/package/mui-md3-styles) 

# mui-md3-styles
Custom MUI Themes objects with custom color palette and typography inspired by Material Design 3. To apply dynamic color theming in their React applications using MUI v6+. Includes support for light and dark modes.

***

## Installation
Install the stable version:
```bash
$ npm i --save mui-md3-styles
```
```bash
$ yarn add mui-md3-styles 
```

***

## Usage
```javascript
import { MuiMD3ThemeProvider } from 'mui-md3-styles'

const App = props => (
  <MuiMD3ThemeProvider theme={props.theme} customColors={{ primary: '#006491', secondary: '#50606E', tertiary: '#6A4FA3'}} />
    {props.children}
  </MuiMD3ThemeProvider> 
)
```

