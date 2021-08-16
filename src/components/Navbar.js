import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          React MUI
        </Typography>
        <Button color="inherit" href="#">
          Home
        </Button>
        <Button color="inherit" href="#">
          About
        </Button>
        <Button color="inherit" href="#">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
