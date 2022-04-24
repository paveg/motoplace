import { Map, Home } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { GetStaticProps } from "next";

import Link from "../components/link";
import { Place } from "../types/place";

import type { NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${process.env.APP_URL}/api/place`);
  const places = await result.json();

  return {
    props: {
      places,
    },
  };
};

const Cafe: NextPage = ({ places }) => {
  return (
    <>
      <Box mt={5}>
        {places.map((place: Place) => {
          return (
            <Paper variant="outlined" key={place.name} sx={{ mb: 2 }}>
              <CardContent key={place.name}>
                <Typography variant="h5" component="div">
                  {place.name}
                </Typography>
                <Typography variant="body2">
                  電話番号：{place.phoneNumber}
                </Typography>
                <Typography variant="body2">住所：{place.address}</Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  component={Link}
                  href={place.website}
                  target="_blank"
                  color="inherit"
                >
                  <Home />
                </IconButton>
                <IconButton
                  component={Link}
                  href={place.url}
                  target="_blank"
                  color="inherit"
                >
                  <Map />
                </IconButton>
              </CardActions>
            </Paper>
          );
        })}
      </Box>
    </>
  );
};

export default Cafe;
