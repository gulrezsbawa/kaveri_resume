import { styled } from "baseui";

export const Body = styled("div", ({ $theme: { mediaQuery } }) => ({
  borderBottom: "1px solid #CDCDCD",
  "-webkit-box-shadow": "0 4px 5px rgba(57, 63, 72, 0.3)",
  "-moz-box-shadow": "0 4px 5px rgba(57, 63, 72, 0.3)",
  boxShadow: "0 4px 5px rgba(57, 63, 72, 0.3)",
  width: "calc(100vw - 40px)",
  height: "184px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 20px",
  [mediaQuery.medium]: {
    width: "calc(100vw - 168px)",
    padding: "0 84px",
  },
}));

export const ApplicantName = styled("div", ({ $theme: { mediaQuery } }) => ({
  fontSize: "32px",
  [mediaQuery.medium]: {
    fontSize: "48px",
  },
}));

export const Designation = styled(
  "div",
  ({ $theme: { mediaQuery, sizing } }) => ({
    fontSize: sizing.scale600,
    color: "#f29e3b",
    marginBottom: "12px",
    [mediaQuery.medium]: {
      fontSize: sizing.scale800,
    },
  })
);

export const BriefSummary = styled("div", ({ $theme: { mediaQuery } }) => ({
  fontSize: "14px",
  color: "#1A1110",
  display: "-webkit-box",
  "-webkit-line-clamp": 4,
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  [mediaQuery.medium]: {
    fontSize: "18px",
  },
}));
