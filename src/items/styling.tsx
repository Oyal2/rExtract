export type FontSize = "24px" | "36px" | "48px";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type AlignItems =
  | "normal"
  | "stretch"
  | "center" /* Pack items around the center */
  | "start" /* Pack items from the start */
  | "end" /* Pack items from the end */
  | "flex-start" /* Pack flex items from the start */
  | "flex-end" /* Pack flex items from the end */
  /* Baseline alignment */
  | "baseline"
  | "first baseline"
  | "last baseline" /* Overflow alignment (for positional alignment only) */
  | "safe center"
  | "unsafe center"
  /* Global values */
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export type JustifyContent =
  | "center" /* Pack items around the center */
  | "start" /* Pack items from the start */
  | "end" /* Pack items from the end */
  | "flex-start" /* Pack flex items from the start */
  | "flex-end" /* Pack flex items from the end */
  | "left" /* Pack items from the left */
  | "right" /* Pack items from the right */
  /* Baseline alignment */
  /* justify-content does not take baseline values */
  /* Normal alignment */
  | "normal"
  /* Distributed alignment */
  | "space-between" /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
  | "space-around" /* Distribute items evenly
                                   Items have a half-size space
                                   on either end */
  | "space-evenly" /* Distribute items evenly
                                   Items have equal space around them */
  | "stretch" /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */
  /* Overflow alignment */
  | "safe center"
  | "unsafe center"
  /* Global values */
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export enum Pallete {
  black = "#000000ff",
  lighter_black = "#111111ff",
  lightest_black = "#333333ff",
  white = "#ffffffff",
  default_text = "#d1342fff",
  dutch_white = "#eee3c1ff",
}
