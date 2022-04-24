// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client, Language } from "@googlemaps/google-maps-services-js";

import { Place } from "../../types/place";

import type { NextApiRequest, NextApiResponse } from "next";

const placeIDs: string[] = [
  "ChIJU8KczsXZGGARn4_GIca7M58",
  "ChIJaR61hOaRGGARgenacDRPO6E",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Place[]>
) {
  const client = new Client({});

  const fetchPlaces = () => {
    const promises = placeIDs.map(async (placeID: string) => {
      const response = await client.placeDetails({
        params: {
          place_id: placeID,
          key: process.env.PLACES_API_KEY,
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

    return Promise.all(promises);
  };
  const n = await fetchPlaces();

  res.status(200).json(n);
}
