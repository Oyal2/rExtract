import React, { ReactNode } from "react";
import { AlignItems, FontSize, JustifyContent, TextAlign } from "./styling";

interface Titleprops {
  color?: string;
  fontSize?: FontSize;
  alignItems?: AlignItems;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  padding?: string;
  justifyContent?: JustifyContent;
  text: string;
  textAlign?: TextAlign;
}

export const Title = React.memo((props: Titleprops) => {
  const {
    alignItems,
    margin,
    padding,
    width,
    height,
    maxWidth,
    color,
    fontSize,
    text,
    justifyContent,
    textAlign,
  } = props;
  return (
    <>
      <h1
        style={{
          color: color,
          fontSize: fontSize,
          alignItems: alignItems,
          margin: margin || "0",
          padding: padding || "0",
          width: width || "auto",
          height: height || "auto",
          maxWidth: maxWidth || "none",
          justifyContent: justifyContent,
          textAlign,
        }}
      >
        {text}
      </h1>
    </>
  );
});
