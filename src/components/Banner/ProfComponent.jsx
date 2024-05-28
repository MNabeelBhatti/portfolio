/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import {  AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import content from "../../content.json";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hi There!  
            <span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
            <span className="green">I'am</span>
          </h4>
          <h1 className="green">{content.name}</h1>
          <h3>{content.title}</h3>
          <p>
          {content.description}
          </p>
          <button>
            <a href={content.socialLinks.whatsapp}> Let's talk</a>
          </button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href={content.socialLinks.github}>
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href={content.socialLinks.linkdin}>
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <div>
            <img
              style={{
                width: "290px",
                filter: "(0px 0px 20px 0px)",
                zIndex: "1",
              }}
              src={"/assets/profile/pic.png"}
            />
          </div>
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 2;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  min-width:290px;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-bottom: -1rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: var(--primaryColor);
    border: none;
    color: #fff;
    font-weight: 500;
    filter: var(--dropColor);
    :hover {
      filter: var(--dropColorHover);
    }
    a {
      text-decoration: none;
      color: var(--textColor);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: var(--primaryColor);
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  div {
    width: 500px;
    height: 400px;
    background-image: url(assets/profile/vector.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    text-align: center;
    position: realtive;
    filter: var(--dropColorHover);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover div {
    transform: translateY(-10px);
  }
`;
