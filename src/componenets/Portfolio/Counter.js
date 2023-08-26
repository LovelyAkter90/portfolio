import { DM_Sans } from "next/font/google";
import React from "react";

import CountUp from "react-countup";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Counter({ number, title }) {
  return (
    <div className="number text-center pt-5">
      <CountUp duration={10} className="counter" end={number} />
      <div className="number-info">
        <span className={DmSans.className}>{title}</span>
      </div>
    </div>
  );
}
