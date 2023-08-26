"use client";
import Logo from "@/svg/Logo";
import React from "react";
import Container from "react-bootstrap/Container";
import { DM_Sans, Open_Sans } from "next/font/google";
import { ResourcesData, ServiceData } from "./FooterData";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import Facebook from "@/svg/Facebook";
import Instragram from "@/svg/Instragram";
import Twitter from "@/svg/Twitter";
import Pinterest from "@/svg/Pinterest";
import { motion } from "framer-motion";
import Copyright from "./Copyright";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "500",
});

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

function Footer() {
  return (
    <div>
      <div className="footer">
        <Container>
          <div className="row">
            <div className="col-6 col-lg-3 footer-left-1">
              <Logo />
              <p className={openSans.className + " "}>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
            <div className="col-6 col-lg-3 footer-left-2">
              <h4 className={DmSans.className + " "}>Services</h4>
              {ServiceData.map((data, i) => (
                <Link href={data.url}>{data.titel}</Link>
              ))}
            </div>
            <div className="col-6 col-lg-3 footer-right-1">
              <h4 className={DmSans.className + " "}>Resources</h4>
              {ResourcesData.map((data, i) => (
                <Link href={data.url}>{data.titel}</Link>
              ))}
            </div>
            <div className="col-6 col-lg-3 footer-right-2">
              <h4 className={DmSans.className + " "}>Newsletter</h4>
              <p className={DmSans.className + " "}>
                Subscribe for our upcoming latest address and resources
              </p>
              <div className="newsletter-form d-flex justify-content-between align-items-center">
                <input type="email" className={DmSans.className} />
                <button type="submit">
                  <LiaTelegramPlane />
                </button>
              </div>
              <div className="social-icons d-flex">
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  className="footer-icons"
                >
                  <Facebook />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  className="footer-icons"
                >
                  <Instragram />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  className="footer-icons"
                >
                  <Twitter />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  className="footer-icons"
                >
                  <Pinterest />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
