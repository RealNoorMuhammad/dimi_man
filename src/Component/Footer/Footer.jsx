import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import { FaDiscord, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from "../Button/ButtonElements";
import Divider from "@mui/material/Divider";
import { Nav } from "react-bootstrap";

import MintseaLogo from "../../assets/MintseaLogo.png";

import { MDBCardImage } from "mdb-react-ui-kit";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <HeroContainer id="social">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ textAlign: "center", color: "#90EE90" }}>
                {" "}
                JOIN THE ADVENTURE
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ textAlign: "center", color: "#fff" }}>
                {" "}
                Be a part of our amazing community and stay in touch
                <h3 style={{ textAlign: "center", color: "#fff" }}>
                  {" "}
                  with all our recent news .
                </h3>
              </h3>
            </div>

            <HeroBtnWrapper
              style={{
                "@media (max-width: 500px)": {
                  display: "none",
                },
              }}
            >
              {" "}
              <Button
                className={"explore-btn"}
                style={{
                  color: "	#000000",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: 2,
                  borderRadius: "40px",
                  textDecoration: "none",
                }}
                to="explore"
                primary="true"
                dark="true"
              >
                JOIN NOW{" "}
              </Button>
            </HeroBtnWrapper>
          </div>

          <div className="row">
            <div className="col-md-12 pt-3">
              <Divider
                variant="middle"
                style={{
                  backgroundColor: "#90EE90",
                  height: "9px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ">
              {" "}
              <MDBCardImage
                src={MintseaLogo}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
            </div>
            <div className="col-md-4 ">
              {" "}
              <h1
                style={{
                  color: "#fff",

                  fontWeight: "bolder",
                }}
                className="pt-5"
              >
                {" "}
                PAGES
              </h1>
              <Nav.Link
                href="#home"
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "bolder",
                }}
              >
                Back To Top
              </Nav.Link>
              <Nav.Link
                href="#wiki"
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "bolder",
                }}
              >
                How To Play
              </Nav.Link>
              <Nav.Link
                href="#feature"
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "bolder",
                }}
              >
                Roadmap
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#roadmap"
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "bolder",
                }}
              >
                Contact
              </Nav.Link>
            </div>
            <div className="col-md-4 ">
              {" "}
              <h1 style={{ color: "#90EE90" }} className="pt-5">
                {" "}
                SOCIALS
              </h1>
              <Nav>
                <Nav.Link href="#home" className="ccolor">
                  <FaDiscord
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      fontWeight: "bolder",
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="#wiki" className="ccolor">
                  <FaInstagramSquare
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      fontWeight: "bolder",
                    }}
                  />
                </Nav.Link>
                <Nav.Link href="#feature" className="ccolor">
                  <AiFillTwitterCircle
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      fontWeight: "bolder",
                    }}
                  />
                </Nav.Link>
                <Nav.Link eventKey={2} href="#roadmap" className="ccolor">
                  <FaFacebook
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      fontWeight: "bolder",
                    }}
                  />
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
};

export default Footer;
