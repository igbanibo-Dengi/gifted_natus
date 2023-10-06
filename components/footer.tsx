import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className=" md:px-20 pt-20 pb-5 border-t">
      <div className="relative container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col justify-between lg:col-span-2 ">
          <div className="max-w-[500px]">
            <Link
              href="/"
              className="text-base md:text-4xl font-extrabold text-wrap"
            >
              <p className="flex flex-wrap">
                Gifted<span className="text-primary">Natus</span>Foundation
              </p>
            </Link>
            <p className="text-[12px] md:text-[14px] leading-relaxed mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur est, nobis et eos pariatur temporibus asperiores illo
              facere soluta similique eum molestias harum. Totam, quam. Unde,
              veniam? Temporibus, pariatur molestiae!
            </p>
          </div>
        </div>

        <div className="flex flex-col text-[12px] gap-2 md:pl-8 ">
          <p className="text-[14px] text-primary font-bold">Useful Links</p>
          <Link className="hover:text-primary w-fit pr-2 py-2" href="/">
            Home
          </Link>
          <Link className="hover:text-primary w-fit pr-2 py-2" href="/">
            About Us
          </Link>
          <Link className="hover:text-primary w-fit pr-2 py-2" href="/">
            Blog
          </Link>
          <Link className="hover:text-primary w-fit pr-2 py-2" href="/">
            Contact
          </Link>
          <div className="flex text-[24px] gap-4 items-center">
            <p className="text-primary text-[12px]">Follow us</p>
            <Link className="hover:text-primary" href="/">
              <FaInstagram />
            </Link>
            <Link className="hover:text-primary" href="/">
              <RiTwitterXLine />
            </Link>
            <Link className="hover:text-primary" href="/">
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-[12px] gap-5">
          <p className="text-[14px] text-primary font-bold">Contact Us</p>
          <div className="flex gap-5 items-center">
            <div className="text-[24px]">
              <BiSolidPhoneCall />
            </div>
            <p className="text-[12px] md:text-[14px] leading-relaxed">
              +234 6707653444
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-[24px]">
              <TiLocation />
            </div>
            <p className="text-[12px] md:text-[14px] leading-relaxed">
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <p className="text-[12px] mx-auto text-center mt-16">
        All rights reserved. © giftednatusfoundation.
      </p>
    </footer>
  );
};

export default Footer;
