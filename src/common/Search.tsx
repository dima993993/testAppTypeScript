import { TextField } from "@mui/material";
import styled from "styled-components";

const WrapperSearch = styled.div``;
const Input = styled(TextField).attrs({
  placeholder: "Search",
  type: "text",
})`
  outline: none;
  border: none;
  padding: 10px 20px;
  background-color: var(--color-ui);
  color: var(--color-text);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Search: React.FC<{}> = () => {
  return (
    <WrapperSearch>
      <Input></Input>
    </WrapperSearch>
  );
};
