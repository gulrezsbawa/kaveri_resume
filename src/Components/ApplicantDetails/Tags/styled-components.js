import { styled } from "baseui";
import { THEME_COLOR } from "../../constant";

export const Wrapper = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale600,
}));

export const ListWrapper = styled("div", ({ $theme: { sizing } }) => ({
  padding: sizing.scale300,
  display: "flex",
  flexWrap: "wrap",
}));

export const List = styled("div", ({ $theme: { sizing, colors } }) => ({
  marginBottom: sizing.scale300,
  backgroundColor: THEME_COLOR,
  marginRight: sizing.scale300,
  padding: `${sizing.scale100} ${sizing.scale500}`,
  color: colors.white,
  borderRadius: sizing.scale200,
}));

export const Title = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale600,
  fontFamily: "Roboto",
  color: THEME_COLOR,
  fontWeight: 700,
  marginBottom: sizing.scale300,
  [mediaQuery.medium]: {
    fontSize: sizing.scale700,
  },
}));
