import {
  Body,
  ApplicantName,
  Designation,
  BriefSummary,
} from "./styled-components";
import { useApplicantData } from "../../Components/Provider";

export const Header = () => {
  const { applicantName, designation, briefSummary } = useApplicantData();

  return (
    <Body>
      <ApplicantName>{applicantName}</ApplicantName>
      <Designation>{designation}</Designation>
      <BriefSummary>{briefSummary}</BriefSummary>
    </Body>
  );
};
