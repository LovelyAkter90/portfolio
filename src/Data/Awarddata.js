import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const Awarddata = ({ title, paragraph, btn }) => {
  return (
    <motion.div
      initial={{
        x: 100,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        staggerChildren: 0.2,
        duration: 0.4,
        ease: "backInOut",
      }}
    >
      <div className="award-part">
        <h3 className={DmSans.className}>{title}</h3>
        <p className={DmSans.className}>{paragraph}</p>
        <button className={DmSans.className}>{btn}</button>
      </div>
    </motion.div>
  );
};

export default Awarddata;
