import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, disc, demo, } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>Description</h1>
        <p>
          {disc.length>100?disc.slice(0,100)+'...':disc}
          <a href={demo}>demo</a>
        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: conatin;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -15rem;
    text-align: left;
    padding-bottom: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 0.7rem;
      margin-left: 1.4rem;
    }

    p {
      width: 80%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: var(--primaryColor);
      }
    }
  }

  :hover > img {
    transform: scale(1.1);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
