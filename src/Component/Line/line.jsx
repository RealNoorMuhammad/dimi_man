import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import Grid from "@mui/material/Grid";
import { MDBCardImage } from "mdb-react-ui-kit";
import road from "../../assets/road.png";
import wave from "../../assets/wave.png";

import line from "../../assets/line.png";
const Roadmap = () => {
  return (
    <HeroContainer>
      <Grid container>
        <Grid item md={12} className=" ">
          <MDBCardImage
            src={line}
            alt="..."
            position="top"
            style={{
              width: "100%",
            }}
            className=" pt-5"
          />
        </Grid>
        <Grid>
          <h1 style={{ color: "#fff", marginLeft: "100%" }}>ROADMAP</h1>
        </Grid>
        <Grid item md={12} className=" ">
          <MDBCardImage
            src={road}
            alt="..."
            position="top"
            style={{
              width: "100%",
            }}
            className=" pt-5"
          />
        </Grid>
        <Grid item md={12} className=" ">
          <MDBCardImage
            src={wave}
            alt="..."
            position="top"
            style={{
              width: "100%",
            }}
            className=" pt-5"
          />
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default Roadmap;
