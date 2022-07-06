import { ColorMode } from "./color-mode.utils";

type ConfigColorMode = ColorMode | "system" | undefined;

export interface ColorModeOptions {
  initialColorMode?: ConfigColorMode;
  useSystemColorMode?: boolean;
  disableTransitionOnChange?: boolean;
}
