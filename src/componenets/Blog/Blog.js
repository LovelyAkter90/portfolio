"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Blogitemdata from "@/Data/Blogitemdata";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2Week } from "react-icons/bs";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 1500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Blog() {
  return (
    <div>
      <div className="blog-part">
        <Container>
          <div className="row">
            <div className="blog-main">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className={DmSans.className}>Latest Blog</h2>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item-part">
            <div className="blog-item">
              <Slider {...settings}>
                {Blogitemdata.map((item, i) => (
                  <div className="img" key={i}>
                    <div className="content">
                      <Image src={item.image} alt={item.image} />
                      <div className="text">
                        <span className={DmSans.className}>
                          <BsCalendar2Week /> {item.span}
                        </span>
                        <h4 className={DmSans.className}>{item.title}</h4>
                        <Link href={item.url} className={DmSans.className}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
