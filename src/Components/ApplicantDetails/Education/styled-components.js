import { styled } from "baseui";

export const Wrapper = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale800,
}));

export const List = styled("div", ({ $theme: { sizing, colors } }) => ({
  marginBottom: sizing.scale300,
  backgroundColor: "#f29e3b",
  marginRight: sizing.scale300,
  padding: `${sizing.scale100} ${sizing.scale500}`,
  color: colors.white,
  borderRadius: sizing.scale200,
}));

export const Title = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale600,
  fontFamily: "Roboto",
  color: "#f29e3b",
  fontWeight: 700,
  marginBottom: sizing.scale300,
  [mediaQuery.medium]: {
    fontSize: sizing.scale700,
  },
}));

export const AwardDetails = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale300,
}));

export const Name = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontFamily: "Arial",
  marginBottom: sizing.scale300,
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));

export const Year = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontFamily: "Roboto",
  fontStyle: "italic",
  color: "#f29e3b",
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));

export const ListWrapper = styled("ul", {});

export const ListItem = styled("li", ({ $theme: { sizing } }) => ({
  listStyleType: "circle",
  "::marker": {
    color: "#f29e3b",
    fontSize: sizing.scale700,
  },
}));
