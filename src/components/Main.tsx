import { Grid } from "@mui/material";
import React from "react";
import { CardComponent } from "../common/Card";

let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Main: React.FC<{}> = () => {
  return (
    <Grid container spacing={4} sx={{ mt: "20px", mb: "20px" }}>
      {arr.map((el) => (
        <Grid item xs={12} sm={6} lg={4}>
          <CardComponent key={el} />
        </Grid>
      ))}
    </Grid>
  );
};
