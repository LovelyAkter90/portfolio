import React from "react";
import { DM_Sans } from "next/font/google";
import { Button } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Behance from "@/svg/Behance";
import Instra from "@/svg/Instra";
import Dribble from "@/svg/Dribble";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function HeroLeft() {
  return (
    <div>
      <div className="hero-left">
        <h1 className={DmSans.className}>
          <span>Creative</span>
          <span>Design and Work</span>
          <span>Solution</span>
        </h1>
        <p className={DmSans.className}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="banner-btn">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: "200",
            }}
          >
            Say Hello
          </motion.button>
          <Link href="/" className={DmSans.className}>
            My Work
            <BsArrowUpRight />
          </Link>
        </div>
        <div className="social-icons-hero d-flex">
          <div className="icons-text">
            <span className={DmSans.className}>Follow me on</span>
          </div>
          <div className="icons-part">
            <Link href="/">
              <Behance />
            </Link>
            <Link href="/">
              <Dribble />
            </Link>
            <Link href="/">
              <Instra />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
