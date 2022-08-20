import { styled } from "baseui";

export const Wrapper = styled("div", ({ $theme: { mediaQuery } }) => ({
  padding: "12px 20px",
  display: "block",
  justifyContent: "space-between",
  [mediaQuery.medium]: {
    padding: "20px 84px",
    display: "flex",
  },
}));

export const LeftContent = styled("div", ({ $theme: { mediaQuery } }) => ({
  width: "calc(100vw - 40px)",
  [mediaQuery.medium]: {
    width: "calc((100vw - 184px) / 2)",
  },
}));

export const RightContent = styled("div", ({ $theme: { mediaQuery } }) => ({
  width: "calc(100vw - 40px)",
  [mediaQuery.medium]: {
    width: "calc((100vw - 184px) / 2)",
  },
}));
