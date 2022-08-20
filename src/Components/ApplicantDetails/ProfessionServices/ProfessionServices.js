import {
  Wrapper,
  Title,
  CompanyName,
  YearOfService,
  CompanyDetails,
  Role,
  ListItem,
  ListWrapper,
} from "./styled-components";

export const ProfessionServices = () => {
  const title = "PROFESSIONAL EXPERIENCE";
  const data = [
    {
      companyName: "Infosys Limited",
      yearOfService: "2018 - Present",
      role: "Senior Associate Consultant",
      workDetails: [
        `Owning and Operating the systems which ensures comprehensive
     and high-quality data submissions to the states accordingly to
     stringent data quality standards laid down by each state`,
        `Extracting claims from database as 837 files and submitting them
     to the state, ensuring successful file transmission`,
        `Analyzing and processing the received response files from state
     and resubmitting in case of rejected claims`,
      ],
    },
    {
      companyName: "Edifecs Technologies Private Limited",
      yearOfService: "2016 - 2018",
      role: "Associate Product Support Specialist",
      workDetails: [
        `Through HIX Solutions we helped Exchange (Center of Medicaid
            and Medicare) to maintain its data and helped in reconciliation
            data between Exchange and Payers (FCH/FLB/NC/IBC/VT).`,
        `Successfully collaborating with the Business End-users, various
            stakeholders, technical experts and project management for
            efficient Solutions design, consequent development and process
            improvements.`,
        `Good domain Knowledge of Membership/Enrollment, Benefits,
            Claims, Providers, Payers, Medicare and Medicaid`,
        `Evaluating problems and helping different teams like
            Development, Customer Support, Documentation and ESD with
            their queries.`,
        `Conducted workshops to gather high-level requirements with
            Business executives and estimated the product launch planning
            and document them as high-level stories in the project backlog`,
      ],
    },
  ];
  return (
    <Wrapper>
      <Title>{title}</Title>
      {data.map(({ companyName, yearOfService, role, workDetails }) => (
        <CompanyDetails key={companyName}>
          <CompanyName>{companyName}</CompanyName>
          <Role>{role}</Role>
          <YearOfService>{yearOfService}</YearOfService>
          <ListWrapper>
            {workDetails.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ListWrapper>
        </CompanyDetails>
      ))}
    </Wrapper>
  );
};
