import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "/assets/project/oac.png",
    disc: `Online Truck Booking App with online payment and multi language translation`,
    demo: "https://oacexpress.com/",
  },
  {
    img: "/assets/project/picswagger.png",
    disc: `typically printed and shipped images cards, where upload images fron canva ,facebook, instagram and edit your
 images. With stripe payment and trace shipped status.
    `,
    demo: "https://picswagger.com/",
  },
  {
    img: "/assets/project/szld.png",
    disc: "Sizzld is built by gamblers for gamblers. With our unique community and a huge selection of games like Crash, HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!",
    demo: "https://szld.herokuapp.com/",
  },
  {
    img: "/assets/project/repairspots.png",
    disc: "Repair Spots is a repair shop manager app and point of sale, which is available for download on AppStore. The website is mainly used to advertise Repair Spots features.",
    demo: "https://repairspots.com/",
  },
  {
    img: "/assets/project/gurikeen.png",
    disc: `Effortlessly connect with real estate agents, schedule viewings, and ask questions through our in-app messaging system, ensuring seamless communication throughout your home search journey.`,
    demo: "https://gurikeen.com/home",
  },
  {
    img: "/assets/project/flexlabs.png",
    disc: `Flexlabs for Flexologist Elevate your career by offering personalized stretch sessions and managing your profile wth ease and for Customer
    Unlock a world of wellness, book
    tailored stretch sessions, track your
    progress, and enjoy a seamless 
    experience..`,
    demo: "https://flexlabs.fr/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project  ref={arrowRef} item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: var(--primaryColor);
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
