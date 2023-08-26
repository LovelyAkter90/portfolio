"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Aboutbottom from "./Aboutbottom";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <motion.div
      className="About-part"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left">
              <h2 className={DmSans.className}>
                Failure is The Power that Gives <span>Success</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <div className="about-btn">
                <motion.button
                  className={DmSans.className}
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: "200",
                  }}
                >
                  Download Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <Aboutbottom />
      </Container>
    </motion.div>
  );
}
