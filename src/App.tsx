import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { placeholderApi } from "./api/api";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    placeholderApi.getPhotos().then((data) => setState(data));
  }, [state]);
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main state={state} />}></Route>
          <Route path="/card/:id" element={<Main state={state} />}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
