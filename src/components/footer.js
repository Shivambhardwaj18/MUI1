import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",

    height: "10vh",
    fontSize: 14,

    flexDirection: "column",
    backgroundImage: "linear-gradient(to bottom right, #8c9d9b, #bdcdbf);",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2021 Shivam
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Footer;
