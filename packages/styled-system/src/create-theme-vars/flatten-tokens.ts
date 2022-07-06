import { Union } from "../utils";

export type SemanticValue<Conditions extends string, Token extends string = string> =
  | Union<Token>
  | Partial<Record<"default" | Conditions, Union<Token>>>;
