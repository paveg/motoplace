import { Twitter, GitHub, Instagram } from "@mui/icons-material";
import { Container, Grid, Box, IconButton } from "@mui/material";

import Link from "./link";

export const Footer: React.VFC = () => {
  return (
    <footer>
      <Box
        position="absolute"
        width="100%"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        color="white"
        bgcolor="text.secondary"
      >
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Follow Me</Box>
              <IconButton
                component={Link}
                href="https://twitter.com/paveg_"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component={Link}
                href="https://github.com/paveg"
                target="_blank"
                color="inherit"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.instagram.com/_pavlog/"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="mailto:pavegy+work@gmail.com" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            {"Copyright © "}
            <Link color="inherit" href="https://twitter.com/paveg_">
              Funai
            </Link>{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
