import type { PlatformTheme } from "./theme.types";
import { isObject } from "@namanavasthi/utils";

export const requiredPlatformThemeKeys: (keyof PlatformTheme)[] = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];

export function isPlatformTheme(unit: unknown): unit is PlatformTheme {
  if (!isObject(unit)) {
    return false;
  }

  return requiredPlatformThemeKeys.every((propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName));
}
