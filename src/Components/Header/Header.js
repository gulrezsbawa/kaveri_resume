import {
  Body,
  ApplicantName,
  Designation,
  BriefSummary,
} from "./styled-components";

export const Header = () => {
  const applicantName = "Kaveri";
  const designation = "Senior Business Associate";
  const briefSummary =
    "Experienced and impactful Business Analyst with more than 6 years of experience working with a wide variety of platforms and clients.";
  return (
    <Body>
      <ApplicantName>{applicantName}</ApplicantName>
      <Designation>{designation}</Designation>
      <BriefSummary>{briefSummary}</BriefSummary>
    </Body>
  );
};
