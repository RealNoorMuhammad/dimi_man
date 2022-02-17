import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import Own from "../../assets/Ownyour.png";
import "./ownyour.css";
import Grid from "@mui/material/Grid";
import { MDBCardImage } from "mdb-react-ui-kit";
const Ownyour = () => {
  return (
    <HeroContainer>
      <Grid container spacing={7}>
        <Grid
          item
          md={6}
          className=" pt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "0 auto",
            justifyContent: "center",
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
        <Grid item md={6}>
          {" "}
          <MDBCardImage
            src={Own}
            alt="..."
            position="top"
            style={{
              width: "70%",
              textAlign: "center",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
            className=" pt-5"
          />
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default Ownyour;
