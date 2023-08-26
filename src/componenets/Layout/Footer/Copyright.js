import Copyrightdata from "@/Data/Copyrightdata";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function Copyright() {
  return (
    <div>
      <div className="copyright-part">
        <Container>
          <div className="row">
            <div className="col-8 col-lg-6 mx-auto">
              <div className="copyright-list">
                <ul className="d-flex jutify-content-center">
                  <li>
                    {Copyrightdata?.map((data, i) => (
                      <Link
                        href={data.url}
                        className={openSans.className + ""}
                        key={i}
                      >
                        {data.title}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
