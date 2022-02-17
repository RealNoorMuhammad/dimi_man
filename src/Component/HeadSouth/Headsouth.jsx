import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import Grid from "@mui/material/Grid";
import { MDBCardImage } from "mdb-react-ui-kit";
import hut from "../../assets/hut.png";
import "./HeadSouth.css";
const Headsouth = () => {
  return (
    <HeroContainer>
      <Grid container spacing={7}>
        <Grid item md={6}>
          {" "}
          <MDBCardImage
            src={hut}
            alt="..."
            position="top"
            style={{
              width: "80%",
              textAlign: "center",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
            className=" pt-5"
          />
        </Grid>
        <Grid
          item
          md={6}
          className="main_territory pt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <h1 className="own_h1 pt-5">OWN YOUR</h1>
          <h1 variant="h1" component="h2" className="own_h1">
            TERRITORY
          </h1>
          <p className="own_p pt-3">
            Get your own piece of the MintSea metaverse
            <p className="own_p ">
              and take part with your Governor title to the
              <p className="own_p ">
                game. Gather Villagers and Real players to your
                <p className="own_p ">
                  cause, create your empire and impact the life of
                  <p className="own_p ">thousands through your actions</p>
                </p>
              </p>
            </p>
          </p>
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default Headsouth;
