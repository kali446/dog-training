"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Backdrop from "./Backdrop";
import { TfiClose } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GlobalContext } from "@/context/global";
import { useMediaQuery } from "react-responsive";

const NavSiteDrawer = () => {
  const [show, setShow] = useState(false);
  const { globalData } = useContext(GlobalContext);

  const isMobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="NavSiteDrawer">
      <Image
        className="cursor-pointer mobile414:w-[2rem] mobile414:h-auto"
        onClick={() => {
          setShow(!show);
        }}
        height={35}
        width={35}
        src={"/icons/menu.svg"}
        alt="Menu"
      />

      <Backdrop show={show} close={() => setShow(false)} />

      <div
        className={`z-[1000] duration-500 transition-all translate-x-[100%] fixed right-0 top-0 w-[28rem] bg-white h-screen max-h-screen overflow-y-auto px-[2.5rem] ${
          show && "!translate-x-0"
        }`}
      >
        <div
          onClick={() => setShow(false)}
          className="mobile414:w-[2rem] mobile414:h-[2rem] cursor-pointer absolute top-5 right-5 h-[2.25rem] w-[2.25rem] rounded-full bg-primary flex items-center justify-center"
        >
          <TfiClose color="white" size={17} />
        </div>

        <div className="mobile414:px-5 flex flex-col items-center gap-[2rem] pt-[2.5rem]">
          <div className="relative NavSiteDrawer__logo">
            <Image
              className="mobile414:h-[5rem] h-[7rem] w-auto"
              height={200}
              width={200}
              src={globalData?.global?.logo?.original}
              alt={globalData?.global?.website_name}
            />
          </div>

          <p className="mobile414:text-[.9rem] text-[1.075rem] text-left font-[400] text-text-dark font-readex_pro leading-[1.65]">
            {globalData?.global?.description}
          </p>

          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4 text-black">
              <Image
                className="mobile414:w-[1.25rem] mobile414:h-auto"
                width={25}
                height={25}
                src={"/icons/location.svg"}
                alt="Location Icon"
              />
              <p className="mobile414:text-[.9rem] text-[1.075rem] text-left font-[400] text-text-dark font-readex_pro leading-[1.5]">
                {globalData?.global?.address}
              </p>
            </li>

            <li className="flex items-center gap-4 text-black">
              <Image
                className="mobile414:w-[1.25rem] mobile414:h-auto"
                width={25}
                height={25}
                src={"/icons/phone.svg"}
                alt="Phone Icon"
              />
              <p className="mobile414:text-[.9rem] transition-all hover:text-primary cursor-pointer text-[1.075rem] text-left font-[400] text-text-dark font-readex_pro leading-[1.5]">
                {globalData?.global?.phones?.[0]?.name}
              </p>
            </li>

            <li className="flex items-center gap-4 text-black">
              <Image
                className="mobile414:w-[1.25rem] mobile414:h-auto"
                width={25}
                height={25}
                src={"/icons/email.svg"}
                alt="Email Icon"
              />
              <p className="mobile414:text-[.9rem] transition-all hover:text-primary cursor-pointer text-[1.075rem] text-left font-[400] text-text-dark font-readex_pro leading-[1.5]">
                {globalData?.global?.email}
              </p>
            </li>
          </ul>

          <ul className="cursor-auto flex items-center justify-start w-full mt-5 gap-6">
            {globalData?.global?.socials?.map((item, i) => {
              if (item.name.toLowerCase() === "facebook") {
                return (
                  <li key={i}>
                    <FaFacebook
                      size={isMobile480 ? 15 : 22}
                      className="MemberCard__icon"
                    />
                  </li>
                );
              }
              if (item.name.toLowerCase() === "twitter") {
                return (
                  <li key={i}>
                    <FaXTwitter
                      size={isMobile480 ? 15 : 22}
                      className="MemberCard__icon"
                    />
                  </li>
                );
              }
              if (item.name.toLowerCase() === "instagram") {
                return (
                  <li key={i}>
                    <FaInstagram
                      size={isMobile480 ? 18 : 25}
                      className="MemberCard__icon"
                    />
                  </li>
                );
              }

              if (item.name.toLowerCase() === "youtube") {
                return (
                  <li key={i}>
                    <FaYoutube
                      size={isMobile480 ? 18 : 25}
                      className="MemberCard__icon"
                    />
                  </li>
                );
              }
            })}
          </ul>

          <div className="flex flex-col items-start w-full">
            <h2 className="mobile414:text-[1.75rem] text-[2.25rem] drop-shadow self-start tracking-wide capitalize text-text-dark font-semibold">
              newsletter
            </h2>

            <div className="flex gap-2 w-full items-center">
              <input
                className="mobile414:py-[.75rem] mobile414:text-[.9rem] mobile414:placeholder:text-[.9rem] w-full bg-transparent px-[1rem] placeholder:capitalize placeholder:text-black/60 placeholder:text-[1.1rem] focus:border-b-black font-readex_pro py-[1rem] border-b font-[400] outline-none border-black"
                type="text"
                placeholder="your e-mail here"
              />

              <button type="submit">
                <Image
                  className="mobile414:w-[2.5rem] mobile414:h-auto"
                  height={70}
                  width={70}
                  src={"/icons/send.svg"}
                  alt="Subscribe"
                />
              </button>
            </div>
            <p className="mobile414:text-[.9rem] pt-3 leading-[1.35] text-black/90 text-[1.05rem]">
              Join our list and get 15% off your first purchase!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSiteDrawer;
