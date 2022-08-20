import {
  Wrapper,
  Title,
  ListWrapper,
  AwardDetails,
  Name,
  Year,
  ListItem,
} from "./styled-components";

export const Education = () => {
  const title = "EDUCATION";
  const education = [
    {
      name: "Master of Computer Application (MCA)",
      year: "2016",
      details: [],
    },
    {
      name: "Bachelor of Science in Information Technology (B.Sc. IT)",
      year: "2013",
      details: [],
    },
  ];

  return (
    <Wrapper>
      <Title>{title}</Title>
      {education.map(({ name, year, details }) => (
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
