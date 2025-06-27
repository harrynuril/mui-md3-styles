export interface ColorShades {
  0: string;
  4: string;
  5: string;
  6: string;
  10: string;
  12: string;
  17: string;
  20: string;
  22: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  87: string;
  90: string;
  92: string;
  94: string;
  95: string;
  96: string;
  98: string;
  100: string;
}

export interface ThemeColorShades {
  primary: Partial<ColorShades>;
  secondary: Partial<ColorShades>;
  tertiary: Partial<ColorShades>;
  error: Partial<ColorShades>;
  success: Partial<ColorShades>;
  warning: Partial<ColorShades>;
  info: Partial<ColorShades>;
  neutral: Partial<ColorShades>;
  neutralVariant: Partial<ColorShades>;
}
