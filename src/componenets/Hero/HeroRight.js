import Image from "next/image";
import React from "react";
import hero from "./../../images/hero.webp";

export default function HeroRight() {
  return (
    <div>
      <div className="hero-right-part">
        <Image src={hero} loading="lazy" alt="hero" />
      </div>
    </div>
  );
}
