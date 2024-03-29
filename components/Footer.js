"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Line } from "@/components/svg-components/Line";
import { Tab } from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/material";
import Link from "next/link";
import { useData } from "@/context/context";
import Aos from "aos";
import {
  BiLogoWhatsapp,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const currentYear = new Date().getFullYear();
  const { cartState, cartDispatch } = useData();
  const [tabData, setTabData] = useState([]);
  const [testTabData, setTestTabData] = useState([]);
  const [packageTabData, setPackageTabData] = useState([]);

  const fetchTabData = async (category) => {
    try {
      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=${category}&limit=30`
      );
      const data = await response.json();
      return data.test_data;
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchTestTabData = async () => {
      const testData = await fetchTabData("test");
      setTestTabData(testData);
    };

    const fetchPackageTabData = async () => {
      const packageData = await fetchTabData("package");
      setPackageTabData(packageData);
    };

    fetchTestTabData();
    fetchPackageTabData();
  }, []);
  const menuItems = [
    {
      title: "About Us",
      aosDelay: 200,
      href: "/about-us",
      // links: [{ href: "/about-us", label: "ABOUT US" }],
    },
    {
      title: "Our Doctors",
      href: "/doctor-profile",
      aosDelay: 300,
      links: [
        {
          href: "/doctor-profile/details/dr-sanjay-wadhwa",
          label: "DR SANJAY WADHWA",
        },
        {
          href: "/doctor-profile/details/dr-lovely-razdan",
          label: "DR LOVELY RAZDAN",
        },
        {
          href: "/doctor-profile/details/dr-gurpal-kaur",
          label: "DR GURPAL KAUR",
        },
      ],
    },
    {
      title: "Services",
      aosDelay: 400,
      links: [{ label: "FOR INDIVIDUALS" }, { label: "FOR HOSPITALS" }],
    },
    {
      title: "Health Packages",
      href: "/packages",
      aosDelay: 500,
      // links: [{ href: "/packages", label: "HEALTH PACKAGES" }],
    },
    {
      title: "My Account",
      aosDelay: 600,
      links: [
        {
          label: "MY CART",
          onClick: () => {
            console.log("Clicking on MY CART");
            cartDispatch({ type: "TOGGLE_CART" });
          },
        },
        { label: "BLOG" },
        {
          href: "https://patient-in.creliohealth.com/patient/login",
          label: "LOGIN",
          external: true,
        },
        // { href: "/terms-conditions", label: "TERMS & CONDITIONS" },
        // { href: "/privacy-policy", label: "PRIVACY POLICY" },
        // { href: "/refund-cancellation", label: "REFUND & CANCELLATION" },
      ],
    },
  ];

  return (
    <>
      <footer className="col-12 float-start position-relative">
        {/* <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container "></div>
          </div>
        </div> */}
        <div className="footergray pb-0 col-12 float-start">
          <div className="container">
            <div className="">
              <div className="row mb-3 pb-3">
                <div
                  className="_acc flex-center  flex-column "
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                  data-aos-delay={150}
                >
                  <div className="popular_packages">
                    <div
                      className="popular_packaes_title"
                      data-aos="fade-up"
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-easing="ease-in"
                      data-aos-delay={150}
                    >
                      <strong>Popular Test</strong>
                    </div>
                    <div className="popular_packages_cnt">
                      <ul
                        className="flex-center "
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-once="true"
                        data-aos-easing="ease-in"
                        data-aos-delay={150}
                      >
                        {testTabData.slice(0, 32).map((test, index) => (
                          <li>
                            <Link
                              key={test.id}
                              href={`/test-detail/${test.Slug}`}
                            >
                              {test.Test_Name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="popular_packages mt-3 pt-4 bt">
                    <div
                      className="popular_packaes_title"
                      data-aos="fade-up"
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-easing="ease-in"
                      data-aos-delay={150}
                    >
                      <strong>Popular Packages</strong>
                    </div>
                    <div className="popular_packages_cnt">
                      <ul
                        className="flex-center "
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-once="true"
                        data-aos-easing="ease-in"
                        data-aos-delay={150}
                      >
                        {packageTabData.slice(0, 32).map((test, index) => (
                          <li>
                            <Link key={test.id} href={`/packages/${test.Slug}`}>
                              {test.Test_Name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>
        <div className="footergray _chnage_color mt-0 pb-0  col-12 float-start">
          <div className="container ">
            <div className="row footer_bottom pb-4">
              <div className="col-xl-7 col-md-8 float-end flex-center align-items-start footerrow">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="footercolumn">
                    <div
                      className="fheading"
                      data-aos="fade"
                      data-aos-delay={150}
                      data-aos-duration={300 + index * 50}
                      data-aos-once="true"
                      data-aos-easing="ease-in"
                    >
                      <article className="text-uppercase">
                        {menuItem.href ? (
                          <Link href={menuItem.href}>{menuItem.title}</Link>
                        ) : (
                          <span>{menuItem.title}</span>
                        )}
                      </article>
                    </div>
                    {menuItem.links && (
                      <div className="fmenu">
                        <ul className="p-0 m-0">
                          {menuItem.links.map((link, linkIndex) => (
                            <li
                              key={linkIndex}
                              data-aos="fade-up"
                              data-aos-delay={200}
                              data-aos-duration={400 + index * 50}
                              data-aos-once="true"
                              data-aos-easing="ease-in"
                            >
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black"
                                >
                                  {link.label}
                                </a>
                              ) : link.href ? (
                                <Link href={link.href}>{link.label}</Link>
                              ) : (
                                <span>{link.label}</span> // Add this line to handle undefined href
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 contact_detail">
                <div className="contact">
                  <a href="tel:0181-4667555">
                    <span
                      className="flex-center align-items-start gap-2 sm-gap-4"
                      data-aos="fade-right"
                      data-aos-delay={100}
                      data-aos-duration={500}
                      data-aos-once="true"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <strong>T</strong>
                      0181-4667555
                    </span>
                  </a>
                </div>
                <div className="">
                  <div className="contact">
                    <a href="mailto:assurepathlabs@gmail.com">
                      <span
                        className="flex-center align-items-start gap-2 sm-gap-4"
                        data-aos="fade-up"
                        data-aos-delay={150}
                        data-aos-duration={500}
                        data-aos-once="true"
                      >
                        <strong>E</strong>
                        assurepathlabs@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className=" ">
                  <div className="contact">
                    <span
                      className="flex-center align-items-start gap-2 gap-sm-0"
                      data-aos="fade-right"
                      data-aos-delay={150}
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      <strong>A </strong>
                      &nbsp; 3, Waryam Nagar, <br />
                      Vasant Vihar Road, <br />
                      Jalandhar
                    </span>
                  </div>
                </div>
                <div
                  className="socail_icon"
                  data-aos="fade-right"
                  data-aos-delay={150}
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <div className="">
                    <Link href="#">
                      <BiLogoFacebook />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoLinkedin />
                    </Link>
                  </div>

                  <div className="whatsapp">
                    <Link href="#">
                      <RiWhatsappFill />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoYoutube />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoInstagram />
                    </Link>
                  </div>
                </div>
                <div className="col-12  mx-auto  flex-center ">
                  <a
                    className="button button--aylen button--round-l footer_btn button--text-thick text-uppercase gradient justify-content-start"
                    data-aos="fade-right"
                    data-aos-delay={150}
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    BOOK HOME COLLECTION
                  </a>
                </div>
              </div>
            </div>

            <div className="row p-sm-3 p-2">
              <div
                className=" footer_site"
                data-aos="fade-right"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <p className="m-0">
                  &copy; {currentYear} All Rights Reserved.{" "}
                </p>
                <p className="m-0">
                  <Link href="/terms-conditions">Terms & conditions</Link>
                </p>
                <p className="m-0">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
                <p className="m-0">
                  <Link href="/refund-cancellation">
                    Refund and Cancellation
                  </Link>
                </p>
              </div>
              <div
                className=" _cerdit text-end"
                data-aos="fade-right"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <p className="m-0">
                  <a href="https://triverseadvertising.com/" target="_blank">
                    site : triverse
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>
      </footer>
    </>
  );
};
