"use client";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Link from "next/link";
import Logo from "@/svg/Logo";
import Menudata from "@/Data/Menudata";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

function Menubar() {
  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setshowNav(true);
      } else if (window.scrollY < 100) {
        setshowNav(false);
      } else {
        setshowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={showNav ? "navbar stickynav" : "navbar"}>
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {Menudata?.map((menu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-4"}
                  href={menu.url}
                >
                  {menu.titel}
                </Link>
              ))}
            </Nav>
            <motion.button
              className={DmSans.className + " "}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: "200",
              }}
            >
              Contact Now
            </motion.button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menubar;
