"use client";
import React from "react";
import { Container } from "react-bootstrap";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { motion } from "framer-motion";

export default function Hero() {
  const Animation = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="hero-banner"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Container>
        <div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="hero-left-text">
                <HeroLeft />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-right-image">
                <HeroRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
