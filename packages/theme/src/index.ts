import { ThemeConfig, ThemeDirection } from "./theme.types";
import styles from "./styles";
import { semanticTokens } from "./sematic-tokens";

const direction: ThemeDirection = "ltr";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = {
  semanticTokens,
  direction,
  styles,
  config,
};

export type Theme = typeof theme;

export * from "./theme.types";

export default theme;
