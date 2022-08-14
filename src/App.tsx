import React from "react";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App: React.FC = () => {
  return (
    <Container sx={{ border: "1px solid red" }}>
      <Header />
      <Main />
    </Container>
  );
};

export default App;
