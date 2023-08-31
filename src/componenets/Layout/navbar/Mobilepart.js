import Menudata from "@/Data/Menudata";
import Logo from "@/svg/Logo";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function Mobilepart() {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div class="mobile-part d-lg-none py-4">
      <Container>
        <div className="mobile-option d-flex justify-content-between">
          <div>
            <Logo />
          </div>
          <div class="mobile-icon" onClick={() => setSideBar(true)}>
            <HiBars3BottomLeft />
          </div>
        </div>
        {sidebar && (
          <motion.div
            className="sidebar"
            animate={{ x: -80 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.3 },
            }}
          >
            <div className="sidebar-cross" onClick={() => setSideBar(false)}>
              <RxCross2 />
            </div>
            <ul>
              {Menudata?.map((menu, i) => (
                <li key={i}>
                  <Link
                    className={DmSans.className + " " + "mx-4"}
                    href={menu.url}
                  >
                    {menu.titel}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="sidebar-btn">
              <button type="button">Contact Now</button>
            </div>
          </motion.div>
        )}
      </Container>
    </div>
  );
}
