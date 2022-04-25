import { Client, Language } from "@googlemaps/google-maps-services-js";
import { Map, Home } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { GetStaticProps } from "next";
import { useState } from "react";

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
  "ChIJA81GB1tXGGARTZ6eSGrlUXI",
  "ChIJFZQ6_g0WGGARrUhnYN0xNjk",
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
  const [prefState, setPrefState] = useState("埼玉県");

  const onChange = (e) => {
    setPrefState(e.target.value);
  };
  return (
    <Container>
      <Box mt={2}>
        <FormControl>
          <FormLabel id="prefecture-group">関東</FormLabel>
          <RadioGroup
            row
            aria-labelledby="prefecture-group"
            defaultValue="埼玉県"
            name="radio-buttons-group"
            vale={prefState}
          >
            <FormControlLabel
              value="埼玉県"
              control={<Radio onChange={onChange} />}
              label="埼玉県"
            />
            <FormControlLabel
              value="神奈川県"
              control={<Radio onChange={onChange} />}
              label="神奈川県"
            />
            <FormControlLabel
              value="東京都"
              control={<Radio onChange={onChange} />}
              label="東京都"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box mt={2}>
        {places
          .filter((place) => place.address.match(prefState))
          .map((place: Place) => {
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
    </Container>
  );
};

export default Cafe;
