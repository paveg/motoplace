import { Twitter, GitHub } from "@mui/icons-material";
import { Container, Grid, Box, Typography, IconButton } from "@mui/material";

import Link from "./link";

export const Footer: React.VFC = () => {
  return (
    <footer>
      <Box position="absolute" sx={{ width: "100%", height: 100, bottom: 0 }}>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ mb: 1 }}>
                Link
              </Box>
              <IconButton
                component={Link}
                href="https://twitter.com/paveg_"
                target="_blank"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component={Link}
                href="https://github.com/paveg"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ mb: 1 }}>
                Help
              </Box>
              <Box>
                <Typography color="textSecondary">
                  <Link href="mailto:pavegy+work@gmail.com">Contact</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" align="right">
            {"Copyright © "}
            <Link color="inherit" href="https://twitter.com/paveg_">
              Funai
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
