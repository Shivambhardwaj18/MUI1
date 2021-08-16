import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    alignContent: "center",
    flexDirection: "column",
    padding: "80px 20px 0px 20px",
    "& .MuiCardContent-root": {
      backgroundImage: "linear-gradient(to bottom right, #00d4ff, #00ff1d);",
    },
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  contentItem: {
    flex: "calc(50% - 4px)",
    "@media (max-width: 1000px)": {
      flex: "100%",
    },
  },
  textContent: {
    fontSize: 18,
    textAlign: "center",
    border: "1px solid black",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Navbar />

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className={`${classes.contentItem} ${classes.textContent}`}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </Container>
  );
}

export default App;
