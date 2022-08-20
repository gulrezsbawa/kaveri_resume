import { Wrapper, Title, ListWrapper, List } from "./styled-components";

export const Skills = () => {
  const title = "SKILLS";
  const list = [
    "SpecBuilder",
    "EDIFECS Application Manager",
    "Transaction Management",
    "MapBuilder",
    "Autosys Tool",
    "JIRA",
    "SQL",
    "Visual Studio",
    "Leadership",
    "Collaboration",
  ];

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ListWrapper>
        {list.map((item) => (
          <List key={item}>{item}</List>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
