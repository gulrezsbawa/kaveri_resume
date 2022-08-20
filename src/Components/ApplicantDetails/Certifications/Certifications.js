import {
  Wrapper,
  Title,
  ListWrapper,
  AwardDetails,
  Name,
  Year,
  ListItem,
} from "./styled-components";

export const Certifications = () => {
  const title = "CERTIFICATIONS";
  const certificate = [
    {
      name: "Certified HIPAA (Health Insurance Portability and Accountability Act)",
      year: "2018",
      details: [],
    },
  ];

  return (
    <Wrapper>
      <Title>{title}</Title>
      {certificate.map(({ name, year, details }) => (
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
