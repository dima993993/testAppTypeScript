import React from "react";
import { Grid } from "@mui/material";
import { CardComponent } from "../common/Card";
import { Search } from "../common/Search";
import styled from "styled-components";
import { IstatePhoto } from "./../types/types";

const WrapperMain = styled.div`
  margin-top: 20px;
  & > div:first-child {
    margin-top: 20px;
  }
`;
interface Iprops {
  state: IstatePhoto[];
}

export const Main = ({ state }: Iprops) => {
  return (
    <WrapperMain>
      <div>
        <Search />
      </div>
      <Grid
        container
        spacing={4}
        sx={{ mt: 2, mb: 2, border: "1px solid red" }}
      >
        {state.map((el) => (
          <Grid item xs={12} sm={6} lg={4}>
            <CardComponent key={el.id} {...el} />
          </Grid>
        ))}
      </Grid>
    </WrapperMain>
  );
};
