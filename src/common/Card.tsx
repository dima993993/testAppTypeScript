import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { IstatePhoto } from "../types/types";

export const CardComponent = ({
  id,
  albumId,
  title,
  url,
  thumbnailUrl,
}: IstatePhoto) => {
  return (
    <NavLink to={`/card/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ backgroundColor: "transparent", height: "100%" }}>
        <CardActionArea sx={{ boxShadow: "var(--shadow)" }}>
          <CardMedia component="img" image={url} sx={{ width: "100%" }} />
          <CardContent sx={{ color: "var(--color-text)" }}>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
            <Typography variant="body2">{title}</Typography>
            <Button size="small" color="primary" sx={{ mt: "10px" }}>
              Details
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};
