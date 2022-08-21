import { Wrapper, Title, ListWrapper, List } from "./styled-components";

export const Tools = () => {
  const title = "TOOLS";
  const list = [
    "JIRA",
    "MS Word",
    "Excel",
    "Powerpoint",
    "Visio",
    "Sharepoint",
    "Provider Portal",
    "Edifecs",
    "SQL",
    "Health Insurance Exchange (HIX)",
    "MapBuilder",
    "Freshdesk",
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
