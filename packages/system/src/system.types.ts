import { ThemeTypings, ResponsiveValue } from "@namanavasthi/styled-system";
import { Dict } from "@namanavasthi/utils";

export interface ThemingProps<ThemeComponent extends string = any> {
  variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"]
      ? ThemeTypings["components"][ThemeComponent]["variants"]
      : string
  >;
  size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"]
      ? ThemeTypings["components"][ThemeComponent]["sizes"]
      : string
  >;
  colorScheme?: ThemeTypings["colorSchemes"];
  orientation?: "vertical" | "horizontal";
  styleConfig?: Dict;
}
