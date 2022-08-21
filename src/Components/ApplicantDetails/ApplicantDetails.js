import { ProfessionServices } from "./ProfessionServices";
import { Skills } from "./Skills";
import { Tools } from "./Tools";
import { Expertise } from "./Expertise";
import { Awards } from "./Awards";
import { Certifications } from "./Certifications";
import { Education } from "./Education";
import { Wrapper, LeftContent, RightContent } from "./styled-components";

export const ApplicantDetails = () => (
  <Wrapper>
    <LeftContent>
      <ProfessionServices />
    </LeftContent>
    <RightContent>
      <Skills />
      <Tools />
      <Expertise />
      <Awards />
      <Certifications />
      <Education />
    </RightContent>
  </Wrapper>
);
