import Container from "@mui/material/Container";
import Image from "next/image";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ opacity: 0.8 }}>
      <Image
        src="/temporary.jpg"
        alt="background image"
        width={3840}
        height={2880}
        objectFit="cover"
      />
    </Container>
  );
};

export default Home;
