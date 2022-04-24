import { Client, Language } from "@googlemaps/google-maps-services-js";
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

type Props = {
  places: Place[];
  children?: React.ReactNode;
};

const placeIDs: string[] = [
  "ChIJU8KczsXZGGARn4_GIca7M58",
  "ChIJaR61hOaRGGARgenacDRPO6E",
  "ChIJXcgxhJ23HmARpdiHnSETRJs",
  "ChIJm2TDil_DGGARt2n5dVDjvfI",
  "ChIJOc1STRWxHmARHqlDGt4np54",
  "ChIJFzcdDk3fGGAREsK9jMyU2QU",
  "ChIJ3x1k-yPVGGARTYetKVNAUM4",
  "ChIJ12jTBbjBGGARJLRRDR5hiDk",
];

export const getStaticProps: GetStaticProps = async () => {
  const client = new Client({});

  const promises = placeIDs.map(async (placeID: string) => {
    const response = await client.placeDetails({
      params: {
        place_id: placeID,
        key: process.env.PLACES_API_KEY!,
        language: Language.ja,
      },
    });
    const data = response.data.result;

    return {
      name: data.name,
      address: data.formatted_address,
      website: data.website,
      url: data.url,
      phoneNumber: data.formatted_phone_number,
      rating: data.rating,
      openingWeekdayText: data.opening_hours?.weekday_text,
    };
  });

  const places = await Promise.all(promises);

  return {
    props: { places: places },
  };
};

const Cafe: NextPage<Props> = ({ places }) => {
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
        })}
      </Box>
    </>
  );
};

export default Cafe;
