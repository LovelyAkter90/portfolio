"use client";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import service from "../../images/service.webp";
import Portfoliodata from "@/Data/Portfoliodata";
import { DM_Sans, Grechen_Fuemen } from "next/font/google";
import Counter from "./Counter";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const GrechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default function Portfolio() {
  return (
    <div>
      <Container>
        <div className="service">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-left">
                <div className="service-img">
                  <Image
                    src={service}
                    width={500}
                    height={400}
                    loading="lazy"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <div className="service-text">
                    <h4 className={DmSans.className}>5+ Year</h4>
                    <h6 className={DmSans.className}>Experience</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-right">
                <div className="service-right-info ">
                  <h2 className={DmSans.className}>
                    We <span className={DmSans.className}>Run</span> Agency
                    <span className={DmSans.className}>Smartly</span> With Our
                    <span className={DmSans.className}>Team</span> Member.
                  </h2>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </p>
                </div>
                {Portfoliodata.map((item, i) => (
                  <div className="portfolio-info" key={i}>
                    <icon>{item.icon}</icon>
                    <p className={DmSans.className}>{item.heading}</p>
                  </div>
                ))}
                <div className="portfolio-btn">
                  <button className={DmSans.className}>Explore More</button>
                </div>
                <div className="portfolio-counter">
                  <div className="numbers">
                    <div className="row">
                      <div className="col-4 col-lg-4">
                        <Counter
                          number={30}
                          title="Team Members"
                          className={GrechenFuemen.className}
                        />
                      </div>
                      <div className="col-4 col-lg-4">
                        <Counter
                          number={150}
                          title="Completed Projects"
                          className={GrechenFuemen.className}
                        />
                      </div>
                      <div className="col-4 col-lg-4">
                        <Counter
                          number={50}
                          title="Satisfied Clients"
                          className={GrechenFuemen.className}
                        />
                      </div>
                    </div>
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
