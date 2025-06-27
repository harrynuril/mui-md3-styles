import { PaletteMode } from '@mui/material';

/**
 * For MD3 and NGC custom color palette
 */
export interface Palette { 
  /** Palette mode */
  mode: PaletteMode;
  /** High-emphasis fills, texts, and icons against surface */
  primary: string;
  /** Text and icons against primary */
  onPrimary: string;
  /** Standout fill color against surface, for key components like FAB */
  primaryContainer: string;
  /** Text and icons against primary container */
  onPrimaryContainer: string;
  /** fill colors used against surface */
  primaryFixed: string;
  /** used for text and icons which sit on top of the corresponding Fixed color */
  onPrimaryFixed: string;
  /** used for text and icons needing lower emphasis against the corresponding fixed color */
  onPrimaryFixedVariant: string;
  /** provide a stronger, more emphasized tone relative to the equivalent fixed color */
  primaryFixedDim: string;

  /** Less prominent fills, text, and icons against surface */
  secondary: string;
  /** Text and icons against secondary */
  onSecondary: string;
  /** Less prominent fill color against surface, for recessive components like tonal buttons */
  secondaryContainer: string;
  /** Text and icons against secondary container */
  onSecondaryContainer: string;

  /** Complementary fills, text, and icons against surface */
  tertiary: string;
  /** Text and icons against tertiary */
  onTertiary: string;
  /** Complementary container color against surface, for components like input fields */
  tertiaryContainer: string;
  /** Text and icons against tertiary container */
  onTertiaryContainer: string;

  /** Attention-grabbing color against surface for fills, icons, and text, indicating urgency */
  error: string;
  /** Text and icons against error */
  onError: string;
  /** Attention-grabbing fill color against surface */
  errorContainer: string;
  /** Text and icons against error container */
  onErrorContainer: string;

  /** Attention-grabbing color against surface for fills, icons, and text, indicating successful action */
  success: string;
  /** Text and icons against success */
  onSuccess: string;
  /** Attention-grabbing fill color against surface */
  successContainer: string;
  /** Text and icons against success container */
  onSuccessContainer: string;

  /** Attention-grabbing color against surface for fills, icons, and text, indicating potential dangerous or important */
  warning: string;
  /** Text and icons against warning */
  onWarning: string;
  /** Attention-grabbing fill color against surface */
  warningContainer: string;
  /** Text and icons against warning container */
  onWarningContainer: string;

  /** Attention-grabbing color against surface for fills, icons, and text, indicating neutral information */
  info: string;
  /** Text and icons against info */
  onInfo: string;
  /** Attention-grabbing fill color against surface */
  infoContainer: string;
  /** Text and icons against info container */
  onInfoContainer: string;

  /** Default colour for backgrounds */
  surface: string;
  /** Text and icons against any surface colour */
  onSurface: string;
  /** Brightest surface colour */
  surfaceBright: string;
  /** Dimmest surface colour */
  surfaceDim: string;
  /** Default container colour */
  surfaceContainer: string;
  /** High-emphasis container colour */
  surfaceContainerHigh: string;
  /** Highest-emphasis container colour */
  surfaceContainerHighest: string;
  /** Low-emphasis container colour */
  surfaceContainerLow: string;
  /** Lowest-emphasis container colour */
  surfaceContainerLowest: string;
  /** Slightly dimmed surface colour */
  surfaceVariant: string;
  /** Lower-emphasis colour for text and icons against any surface colour */
  onSurfaceVariant: string;

  /** Background fills for elements which contrast against surface */
  inverseSurface: string;
  /** Text and icons against inverse surface */
  inverseOnSurface: string;
  /** Actionable elements, such as text buttons, against inverse surface */
  inversePrimary: string;

  /** Important boundaries, such as a text field outline */
  outline: string;
  /** Decorative elements, such as dividers */
  outlineVariant: string;

  /** to create additional protection against a background or to encourage interaction  */
  shadow: string; 
}