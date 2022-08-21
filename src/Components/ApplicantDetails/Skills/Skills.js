import { Wrapper, Title, ListWrapper, List } from "./styled-components";

export const Skills = () => {
  const title = "SKILLS";
  const list = [
    "Critical Thinking",
    "Problem solving",
    "Interpersonal",
    "Requirement Gathering & Analysis",
    "Gap Analysis",
    "Planning / Prioritizing",
    "Decision Making",
    "Good communication",
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
