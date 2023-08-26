import Aboutdata from "@/Data/Aboutdata";
import { DM_Sans } from "next/font/google";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Awarddata from "@/Data/Awarddata";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function Aboutbottom() {
  const [active, setActive] = useState(0);
  const [activeClass, setActiveClass] = useState(0);

  const handleActive = (i) => {
    setActive(i);
    setActiveClass(i);
  };

  return (
    <div>
      <Container>
        <div className="about-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                {Aboutdata.map((item, i) => (
                  <div className="col-6 col-lg-6" key={i}>
                    {activeClass == i ? (
                      <motion.div
                        className="item-part-about"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: "200",
                        }}
                      >
                        <h5 className={DmSans.className}>{item.heading}</h5>
                        <p className={DmSans.className}>{item.paragraph}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="about-data"
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: "200",
                        }}
                        onClick={() => handleActive(i)}
                      >
                        <h5 className={DmSans.className}>{item.heading}</h5>
                        <p className={DmSans.className}>{item.paragraph}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              {active === 0 && (
                <Awarddata
                  title="Get So Many Awards In 5 years"
                  paragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
                  btn="Visit Now"
                />
              )}
              {active === 1 && (
                <Awarddata
                  title="Get So Many Awards In 4 years"
                  paragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
                  btn="Visit Now"
                />
              )}
              {active === 2 && (
                <Awarddata
                  title="Get So Many Awards In 3 years"
                  paragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
                  btn="Visit Now"
                />
              )}
              {active === 3 && (
                <Awarddata
                  title="Get So Many Awards In 2 years"
                  paragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
                  btn="Visit Now"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
