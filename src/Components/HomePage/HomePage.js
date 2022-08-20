import { Header } from "../Header";
import { ApplicantInfo } from "../ApplicantInfo";
import { ApplicantDetails } from "../ApplicantDetails";
import { Wrapper } from "./styled-components";

export const HomePage = () => (
  <Wrapper>
    <Header />
    <ApplicantInfo />
    <ApplicantDetails />
  </Wrapper>
);
