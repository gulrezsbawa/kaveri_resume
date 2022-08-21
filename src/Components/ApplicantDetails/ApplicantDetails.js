import { Wrapper, LeftContent, RightContent } from "./styled-components";
import { useApplicantData } from "../Provider";
import { Tags } from "./Tags";
import { List } from "./List";

export const ApplicantDetails = () => {
  const {
    skills,
    tools,
    expertise,
    awards,
    professionServices,
    certifications,
    education,
  } = useApplicantData();
  return (
    <Wrapper>
      <LeftContent>
        <List {...professionServices} />
      </LeftContent>
      <RightContent>
        {[skills, tools, expertise].map((item, i) => (
          <Tags key={`Tags${i}`} {...item} />
        ))}
        {[awards, certifications, education].map((item, i) => (
          <List key={`List${i}`} {...item} />
        ))}
      </RightContent>
    </Wrapper>
  );
};
