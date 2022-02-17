import styled from "styled-components";

import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c0c;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  background: #02062cbd;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.div`
  color: #7fffd4;
  text-align: center;
  font-weight: bold;
  font-family: Gilroy-Bold;
  font-size: 150px;
  line-height: 100px;
  letter-spacing: 0em;
  text-align: center;
  font-family: "Poppins", sans-serif;
  width: 700px;
  text-shadow: 0 0 10px #87cefa, 0 0 40px #87cefa, 0 0 80px #87cefa,
    0 0 160px #87cefa, 0 0 240px #87cefa;
  filter: url(#fire);

  @media screen and (max-width: 992px) {
    font-size: 50px;
    width: 500px;
    line-height: 60px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 350px;
    line-height: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    width: 300px;
    line-height: 35px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  width: 650px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 450px;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    width: 300px;
    line-height: 28px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
