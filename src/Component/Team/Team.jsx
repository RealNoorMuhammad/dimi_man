import React from "react";
import { HeroContainer, HeroBtnWrapper } from "./herosectionElements";
import Mat from "../../assets/1.PNG";
import Dimi from "../../assets/2.PNG";
import Mad from "../../assets/3.PNG";
import Nas from "../../assets/4.PNG";
import Jul from "../../assets/5.PNG";
import Lor from "../../assets/6.PNG";
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

const Team = () => {
  return (
    <HeroContainer id="social">
      <div className="container">
        <h1
          style={{ textAlign: "center", color: "#000", fontSize: "60px " }}
          className="pb-5 hover-shadow"
        >
          {" "}
          THE TEAM
        </h1>
        <MDBRow className="container row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Mat}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody style={{ background: "none", border: "none" }}>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  MAT MSW
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Founder &<p>Development</p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Dimi}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  DIMI MSW
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Founder &<p>Project Manager</p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Mad}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  MADEXX
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Founder &<p>Marketing</p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Nas}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  NASKAA
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Marketing
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Jul}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  JULIEN
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Community<p>Management</p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ background: "none", border: "none" }}>
              <MDBCardImage
                src={Lor}
                alt="..."
                position="top"
                style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  LORA
                </MDBCardTitle>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  Community<p>Management</p>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </HeroContainer>
  );
};

export default Team;
