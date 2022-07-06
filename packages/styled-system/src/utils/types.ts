import { ThemeTypings } from "../theme.types";

export type ResponsiveArray<T> = Array<T | null>;

export type ResponsiveObject<T> = Partial<Record<ThemeTypings["breakpoints"] | string, T>>;

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

export type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings
  ? ResponsiveValue<Union<CSSType | ThemeTypings[ThemeKey]>>
  : ResponsiveValue<CSSType>;

export type Union<T> = T | (string & {});
