import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const CardComponent: React.FC<{}> = () => {
  return (
    <Card component="a">
      <CardActionArea sx={{ boxShadow: "var(--shadow)" }}>
        <CardMedia
          component="img"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          sx={{ width: "100%" }}
        />
        <CardContent sx={{ color: "var(--color-text)" }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button size="small" color="primary" sx={{ mt: "10px" }}>
            Share
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
