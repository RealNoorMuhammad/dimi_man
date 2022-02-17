import React, { useState } from "react";
import back from "../../assets/back.jpg";

import { Button } from "../Button/ButtonElements";
import "./herosection.css";
import { FaDiscord } from "react-icons/fa";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./heroElements";

import MintseaLogo from "../../assets/MintseaLogo.png";

import { MDBCardImage } from "mdb-react-ui-kit";

const Herosection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={back} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <MDBCardImage
          src={MintseaLogo}
          alt="..."
          position="top"
          style={{ width: "20%", textAlign: "center" }}
        />
        <HeroH1 className="text " style={{ textAlign: "center" }}>
          WELCOME
        </HeroH1>
        <HeroP style={{ textAlign: "center" }}>
          A NEW WORLD IS WAITING FOR YOU
        </HeroP>
        <HeroBtnWrapper
          style={{
            display: "-webkit-inline-box",
            alignContent: "space-between",
            columnGap: "35px",
            "@media (max-width: 500px)": {
              display: "none",
            },
          }}
        >
          <Button
            className={"explore-btn"}
            style={{
              color: "	#000000",
              fontSize: 20,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: 2,
              borderRadius: "40px",
            }}
            to="explore"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Join us{" "}
            <FaDiscord
              style={{
                color: "	#000000",
                fontSize: 20,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: 2,
                textAlign: "center",
                borderRadius: "40px",
              }}
            />
          </Button>
          <Button
            className={"explore-btn"}
            style={{
              color: "	#000000",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textDecoration: "none",
              borderRadius: "40px",
            }}
            to="explore"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            White Paper
          </Button>
        </HeroBtnWrapper>

        <svg>
          <filter id="fire">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.1 0.1"
              numOctaves="2"
              seed="3"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.1 0.1;0.12 0.2"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="10"
            ></feDisplacementMap>
          </filter>
        </svg>
      </HeroContent>
    </HeroContainer>
  );
};

export default Herosection;
