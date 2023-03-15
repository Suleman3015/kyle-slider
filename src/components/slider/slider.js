import styles from "./slider.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slide1 from "../../content/png/slide1.png";
import Slide2 from "../../content/png/slide2.png";
import Slide3 from "../../content/png/slide3.png";
import Slide4 from "../../content/png/slide4.jpg";
import Amazon from "../../content/png/amazon.png";
import Maersk from "../../content/png/maersk.png";
import Twillio from "../../content/png/twillio.png";
import Domino from "../../content/png/domino.png";
import Menu from "../../content/png/menu.png";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import AmazonColor from "../../content/brands/amazon.svg";
import MaerskColor from "../../content/brands/maersk.svg";
import TwilioColor from "../../content/brands/twilio.svg";
import DominosColor from "../../content/brands/dominos.svg";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowRight from "../../content/png/arrowRight.png";
import {slides,theme} from "./static.js"


const SLIDE_DURATION = 5000; 
const PROGRESS_BAR_INTERVAL = 50;

function Slider() {
  const [progress, setProgress] = useState(0);
  const [catchLength, setCatchLengths] = useState([]);

 


  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
      setCatchLengths([...catchLength, currentSlide]);
      setProgress(0); 
    }, SLIDE_DURATION);

    const progressBarTimer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100
          ? 0
          : prevProgress + (PROGRESS_BAR_INTERVAL / SLIDE_DURATION) * 100
      );
    }, PROGRESS_BAR_INTERVAL);

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressBarTimer);
    };
  }, [currentSlide]);
  const variants = {
    enter: {
      x: `${currentSlide < catchLength.slice(-2)[0] ? "-100%" : "100%"}`,
      opacity: 0,
    },
    center: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  const handleLogoClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    setCatchLengths([...catchLength, index]);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div
              style={{
                background: `${slides[currentSlide].backgroundLayer}`,
              }}
              className={styles.gradientOverlay}
            ></div>
            <Image
              className={styles.image}
              alt="slider"
              src={slides[currentSlide].image}
            />
            <motion.div
              className={styles.imageContentContainer}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.6 }}
              key={currentSlide}
            >
              <div className={styles.topContent}>
                <Image
                  alt="slider"
                  style={{
                    height: "30px",
                    width: `${slides[currentSlide].width}`,
                    marginTop: "25px",
                  }}
                  src={slides[currentSlide].logo}
                />
                <Image
                  alt="slider"
                  style={{
                    cursor: "pointer",
                  }}
                  height={20}
                  src={Menu}
                />
              </div>
              <div>
                <p className={styles.lowerText}>
                  {slides[currentSlide].content}
                </p>
                <p className={styles.story}>
                  Read Story <Image alt="slider" height={10} src={ArrowRight} />
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className={styles.brandGrid}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.branding}>
              <div style={{ width: "100%" }}>
                {index === currentSlide ? (
                  <LinearProgress
                    style={{
                      height: "1px",
                    }}
                    color={slide.progressBarColor}
                    variant="determinate"
                    value={progress}
                  />
                ) : null}
              </div>

              <Image
                alt="slider"
                height={50}
                style={{
                  cursor: "pointer",
                  filter: `${index !== currentSlide ? "grayscale(1)" : "none"}`,
                }}
                src={slide.logoColor}
                onClick={() => handleLogoClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Slider;
