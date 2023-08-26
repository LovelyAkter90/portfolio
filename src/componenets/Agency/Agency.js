"use client";
import Computer from "@/svg/Computer";
import { DM_Sans } from "next/font/google";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Laptop from "@/svg/Laptop";
import Device from "@/svg/Device";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Agency() {
  return (
    <div>
      <Container>
        <div className="agency-part">
          <div className="row">
            <div className="col-lg-6">
              <div className="agency-info">
                <h2 className={DmSans.className}>
                  I <span className={DmSans.className}>Run</span> Agency{" "}
                  <span className={DmSans.className}>Smartly</span> With My
                  <span className={DmSans.className}>Team</span> Member.
                </h2>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form by injected humour or randomised words which dont look.
                </p>
                <div className="agency-btn">
                  <motion.button
                    className={DmSans.className}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: "200",
                    }}
                  >
                    Say Hello
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="agency-item"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "tween",
                  stiffness: "200",
                }}
              >
                <div className="agency-icon">
                  <Computer />
                </div>
                <div className="agency-text">
                  <h4 className={DmSans.className}>Web Development</h4>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="agency-item"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "tween",
                  stiffness: "200",
                }}
              >
                <div className="agency-icon">
                  <Laptop />
                </div>
                <div className="agency-text">
                  <h4 className={DmSans.className}>
                    Product Design & Development
                  </h4>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="agency-item"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "tween",
                  stiffness: "200",
                }}
              >
                <div className="agency-icon">
                  <Device />
                </div>
                <div className="agency-text">
                  <h4 className={DmSans.className}>Graphic Design</h4>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
