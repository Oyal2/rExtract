import React, { ReactNode } from "react";
import {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  TextAlign,
} from "./styling";

interface FlexProps {
  backgroundColor?: string;
  display?: boolean;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexGrow?: string;
  flexBasis?: string;
  flexShrink?: string;
  flexWrap?: FlexWrap;
  flex?: string;
  alignItems?: AlignItems;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  padding?: string;
  children?: ReactNode;
  alignSelf?: string;
  textAlign?: TextAlign;
  marginRight?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
}

export const Flex = React.memo((props: FlexProps) => {
  const {
    display,
    justifyContent,
    flexDirection,
    flexGrow,
    flexBasis,
    flexShrink,
    flexWrap,
    flex,
    alignItems,
    margin,
    padding,
    width,
    height,
    maxWidth,
    children,
    backgroundColor,
    alignSelf,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
    textAlign,
  } = props;

  const cssProps: React.CSSProperties = {
    backgroundColor: backgroundColor || "transparent",
    display: display ? "flex" : "block",
    justifyContent: justifyContent,
    flexDirection: flexDirection || "row",
    flexGrow: flexGrow || 0,
    flexBasis: flexBasis || "auto",
    flexShrink: flexShrink || 1,
    flexWrap: flexWrap || "nowrap",
    flex: flex || "0 1 auto",
    alignItems: alignItems || "stretch",
    margin,
    padding,
    width: width || "auto",
    height: height || "auto",
    maxWidth,
    alignSelf,
    textAlign,
  };

  if (marginLeft) cssProps.marginLeft = marginLeft;
  if (marginRight) cssProps.marginRight = marginRight;
  if (marginTop) cssProps.marginTop = marginTop;
  if (marginBottom) cssProps.marginBottom = marginBottom;

  return <div style={cssProps}>{children}</div>;
});
