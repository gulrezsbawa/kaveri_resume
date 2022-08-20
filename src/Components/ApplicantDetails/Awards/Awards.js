import {
  Wrapper,
  Title,
  ListWrapper,
  AwardDetails,
  Name,
  Year,
  ListItem,
} from "./styled-components";

export const Awards = () => {
  const title = "HONORS & AWARDS";
  const awards = [
    {
      name: "Spot Puraskaar Award 2 Time by Director",
      year: "2018",
      details: [
        "For outstanding performance and consistently resolving client’s issues within defined SLA",
        "For successful release of HIX 8.6 and HIX 8.9, a next version of Health Insurance App, (for Hix Insurance Center) with extensive analysis & testing.",
      ],
    },
  ];

  return (
    <Wrapper>
      <Title>{title}</Title>
      {awards.map(({ name, year, details }) => (
        <AwardDetails key={name}>
          <Name>{name}</Name>
          <Year>{year}</Year>
          <ListWrapper>
            {details.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ListWrapper>
        </AwardDetails>
      ))}
    </Wrapper>
  );
};
