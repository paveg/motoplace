import { Map, Home } from "@mui/icons-material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Place } from "../types/place";

import Link from "./link";

type Props = {
  place: Place;
};

export const PlacePaper: React.VFC<Props> = ({ place }) => {
  return (
    <Paper variant="outlined" key={place.name} sx={{ mb: 2 }}>
      <CardContent key={place.name}>
        <Typography variant="h5" component="div">
          {place.name}
        </Typography>
        <Typography variant="body2">電話番号：{place.phoneNumber}</Typography>
        <Typography variant="body2">住所：{place.address}</Typography>
      </CardContent>
      <CardActions>
        {place && place?.website && (
          <IconButton
            color="inherit"
            href={place.website}
            component={Link}
            target="_blank"
          >
            <Home />
          </IconButton>
        )}
        {place && place?.url && (
          <IconButton
            color="inherit"
            href={place.url}
            component={Link}
            target="_blank"
          >
            <Map />
          </IconButton>
        )}
      </CardActions>
    </Paper>
  );
};
