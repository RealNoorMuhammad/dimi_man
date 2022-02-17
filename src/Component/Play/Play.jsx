import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import box from "../../assets/boxicon.png";
import xbox from "../../assets/xboxicon.png";
import gold from "../../assets/goldicon.png";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Play = () => {
  return (
    <HeroContainer>
      <div className="container">
        <MDBRow className="container row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={box}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody style={{ background: "none", border: "none" }}>
                <MDBCardTitle
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "70px",
                  }}
                >
                  2500
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                    color: "#fff",
                  }}
                >
                  Territories waiting
                  <p>
                    to be discoverd and <p>taken care of</p>
                  </p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={xbox}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "40px",
                  }}
                >
                  Play{" "}
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "30px",
                    }}
                  >
                    To Earn
                  </h1>
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                    color: "#fff",
                  }}
                >
                  A unique royalties
                  <p>
                    system just entered <p> the blockchain</p>
                  </p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={gold}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "50px",
                  }}
                >
                  + $1,000,000
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "40px",
                    }}
                  >
                    TREASURE
                  </h1>
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                    color: "#fff",
                  }}
                >
                  Rewarded to the
                  <p>
                    most advanced player <p>in the first week</p>
                  </p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </HeroContainer>
  );
};

export default Play;
