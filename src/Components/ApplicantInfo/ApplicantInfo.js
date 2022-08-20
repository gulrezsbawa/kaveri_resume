import {
  Wrapper,
  InfoWrapper,
  InfoContent,
  InfoIcon,
  InfoText,
} from "./styled-components";
import { HiMail } from "react-icons/hi";
import { ImMobile2 } from "react-icons/im";
import { BsGlobe2, BsLinkedin } from "react-icons/bs";

export const ApplicantInfo = () => {
  const iconSize = "20px";
  const data = [
    {
      type: "mail",
      value: "kaveri0491@gmail.com",
      icon: <HiMail size={iconSize} />,
    },
    {
      type: "mobile",
      value: "+1-317-540-5175",
      icon: <ImMobile2 size={iconSize} />,
    },
    {
      type: "website",
      value: "kaveribawa.com",
      icon: <BsGlobe2 size={iconSize} />,
    },
    {
      type: "linkedIn",
      value: "linkedin.com/in/kaveri-bawa",
      icon: <BsLinkedin size={iconSize} />,
    },
  ];

  const getLinked = ({ type, value }) => {
    switch (type) {
      case "mail":
        return `mailto:${value}`;
      case "mobile":
        return `tel:${value.replace("-", "")}`;
      case "website":
        return `https://www.${value}`;
      case "linkedIn":
        return `https://www.${value}`;
      default:
        return "";
    }
  };
  return (
    <Wrapper>
      <InfoWrapper>
        {data.map(({ type, icon, value }) => (
          <InfoContent key={type}>
            <InfoIcon>{icon}</InfoIcon>
            <InfoText href={getLinked({ type, value })} target="_blank">
              {value}
            </InfoText>
          </InfoContent>
        ))}
      </InfoWrapper>
    </Wrapper>
  );
};
