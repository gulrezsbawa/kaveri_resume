import { styled } from "baseui";

export const Wrapper = styled("div", ({ $theme: { mediaQuery } }) => ({}));

export const CompanyDetails = styled("div", ({ $theme: { sizing } }) => ({
  marginBottom: sizing.scale300,
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

export const CompanyName = styled(
  "div",
  ({ $theme: { sizing, mediaQuery } }) => ({
    fontSize: sizing.scale500,
    fontWeight: 700,
    fontFamily: "Roboto",
    [mediaQuery.medium]: {
      fontSize: sizing.scale600,
    },
  })
);
export const Role = styled("div", ({ $theme: { sizing, mediaQuery } }) => ({
  fontSize: sizing.scale500,
  fontFamily: "Arial",
  [mediaQuery.medium]: {
    fontSize: sizing.scale600,
  },
}));

export const YearOfService = styled(
  "div",
  ({ $theme: { sizing, mediaQuery } }) => ({
    fontSize: sizing.scale500,
    fontFamily: "Roboto",
    fontStyle: "italic",
    color: "#f29e3b",
    [mediaQuery.medium]: {
      fontSize: sizing.scale600,
    },
  })
);

export const ListWrapper = styled("ul", {});

export const ListItem = styled("li", ({ $theme: { sizing } }) => ({
  listStyleType: "circle",
  "::marker": {
    color: "#f29e3b",
    fontSize: sizing.scale700,
  },
}));
