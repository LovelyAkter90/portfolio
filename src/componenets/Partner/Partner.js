"use client";
import Docco from "@/svg/Docco";
import Emad from "@/svg/Emad.js";
import Happy from "@/svg/Happy.js";
import Lori from "@/svg/Lori.js";
import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DM_Sans, Jost, Open_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

const JosT = Jost({
  subsets: ["latin"],
  weight: "700",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Partner() {
  return (
    <div className="partner">
      <Container>
        <div className="partner-part">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="text text-center">
                <h2 className={DmSans.className}>Reputed Partners</h2>
              </div>
            </div>
            <div className="partner-main">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="partner-item mx-auto text-center">
                    <div className="image-part py-3">
                      <Happy />
                    </div>
                    <h4 className={DmSans.className}>Happy Mart</h4>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="partner-item mx-auto text-center">
                    <div className="image-part  py-3">
                      <Lori />
                    </div>
                    <h4 className={DmSans.className}>Lori Cracker</h4>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="partner-item mx-auto text-center">
                    <div className="image-part  py-3">
                      <Emad />
                    </div>
                    <h4 className={DmSans.className}>Emad Fashion</h4>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="partner-item mx-auto text-center">
                    <div className="image-part  py-3">
                      <Docco />
                    </div>
                    <h4 className={DmSans.className}>Docco Semims</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner-bottom">
              <div className="row bottom-part">
                <div className="col-lg-5">
                  <h2 className={DmSans.className}>
                    Subscirbe to Our Newsletter
                  </h2>
                  <p className={openSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="email">
                    <input type="email" placeholder="Email" />
                    <button type="submit">
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
