import { styled } from "baseui";
import { THEME_COLOR } from "../constant";

export const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  minHeight: "20px",
  backgroundColor: THEME_COLOR,
  padding: "12px 12px",
  color: "#fff",
  fontSize: "18px",
  flexWrap: "wrap",
});

export const InfoWrapper = styled(
  "div",
  ({ $theme: { mediaQuery, colors } }) => ({
    display: "flex",
    minWidth: "120px",
    flexWrap: "wrap",
    color: colors.white,
    maxWidth: "374px",
    [mediaQuery.medium]: {
      maxWidth: "992px",
    },
  })
);

export const InfoContent = styled("div", {
  display: "flex",
  margin: "4px 18px",
});

export const InfoIcon = styled("div", {
  marginRight: "8px",
});

export const InfoText = styled("a", {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
});
