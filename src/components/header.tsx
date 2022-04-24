import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "./link";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const Header: React.VFC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ color: "#fff", flexGrow: 1, ml: 2 }}
          >
            MotoPlace
          </Typography>
          <Button color="inherit" component={Link} href="/cafe">
            Cafe
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
