import { Wrapper, Title, ListWrapper, List } from "./styled-components";

export const Expertise = () => {
  const title = "EXPERTISE";
  const list = ["EDI ( ANSI X12 )", "HIPAA 837"];

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
