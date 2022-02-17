import React from "react";
import { HeroContainer } from "./herosectionElements";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Cards = () => {
  return (
    <HeroContainer>
      <MDBRow className="container row-cols-1 row-cols-md-4 g-4">
        <MDBCol>
          <MDBCard
            style={{
              background: "none",
              border: "4px solid #fff",
              borderRadius: "52px",
            }}
          >
            <MDBCardBody>
              <a href="#!" className="activator waves-effect waves-light mr-4">
                <MDBIcon icon="share-alt" className="black-text" />
              </a>
              <MDBCardTitle
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                CREATE
              </MDBCardTitle>
              <MDBCardText
                style={{
                  color: "#fff",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content. Some quick example text to
                build on the card Some quick example text
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  <MDBCardImage
                    src={icon1}
                    alt="..."
                    position="top"
                    style={{ maxWidth: "100px" }}
                  />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{
              background: "none",
              border: "4px solid #fff",
              borderRadius: "52px",
            }}
          >
            <MDBCardBody>
              <a href="#!" className="activator waves-effect waves-light mr-4">
                <MDBIcon icon="share-alt" className="black-text" />
              </a>
              <MDBCardTitle
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                EXPLORE
              </MDBCardTitle>
              <MDBCardText
                style={{
                  color: "#fff",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content. Some quick example text to
                build on the card Some quick example text
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  <MDBCardImage
                    src={icon2}
                    alt="..."
                    position="top"
                    style={{ maxWidth: "100px" }}
                  />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{
              background: "none",
              border: "4px solid #fff",
              borderRadius: "52px",
            }}
          >
            <MDBCardBody>
              <a href="#!" className="activator waves-effect waves-light mr-4">
                <MDBIcon icon="share-alt" className="black-text" />
              </a>
              <MDBCardTitle
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                INTERACT
              </MDBCardTitle>

              <MDBCardText
                style={{
                  color: "#fff",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content. Some quick example text to
                build on the card Some quick example text
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  <MDBCardImage
                    src={icon3}
                    alt="..."
                    position="top"
                    style={{ maxWidth: "100px" }}
                  />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{
              background: "none",
              border: "4px solid #fff",
              borderRadius: "52px",
            }}
          >
            <MDBCardBody>
              <a href="#!" className="activator waves-effect waves-light mr-4">
                <MDBIcon icon="share-alt" className="black-text" />
              </a>
              <MDBCardTitle
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                EARN
              </MDBCardTitle>

              <MDBCardText
                style={{
                  color: "#fff",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content. Some quick example text to
                build on the card Some quick example text
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  <MDBCardImage
                    src={icon4}
                    alt="..."
                    position="top"
                    style={{ maxWidth: "100px" }}
                  />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </HeroContainer>
  );
};

export default Cards;
