import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import Mobile from "./Mobile";
import * as Scroll from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [lang, setLang] = useState(true);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang ? "uz" : "ru");
  }, [lang]);
  return (
    <>
      <nav className="w-full container-custom text-black flex flex-row items-center justify-between py-6 relative">
        <h1 className="text-[#313273] font-bold text-xl">Data Camp</h1>
        <div className="flex gap-[30px] justify-end items-center">
          <ul className="xl:flex hidden flex-row gap-8 font-tahomaRegular">
            <li className="cursor-pointer hover:underline hover:text-pink transition text-[14px] text-[#230F0F]">
              <Scroll.Link to={"main"} spy={true} offset={-50} smooth={true}>
                {t("navbar.link.main")}
              </Scroll.Link>
            </li>
            <li className="cursor-pointer hover:underline hover:text-pink transition text-[14px] text-[#230F0F]">
              <Scroll.Link to={"courses"} spy={true} offset={-50} smooth={true}>
                {t("navbar.link.course")}
              </Scroll.Link>
            </li>
            <li className="cursor-pointer hover:underline hover:text-pink transition text-[14px] text-[#230F0F]">
              <Scroll.Link to={"contact"} spy={true} offset={-50} smooth={true}>
                {t("navbar.link.connection")}
              </Scroll.Link>
            </li>
          </ul>
          <div className="flex flex-row items-center justify-end">
            <ul className="md:flex hidden flex-row items-center gap-6">
              <button
                className="button-hover xl:flex hidden border-pink font-bold text-[#dc4298] px-7 py-2 rounded-[6px] border hover:bg-pink/[0.2] transition flex flex-row items-center justify-center"
                onClick={() => {
                  setAppOpen(!appOpen);
                  setLang(!lang);
                }}
              >
                {lang ? "Uz" : "Ru"}
              </button>
            </ul>
            <div className="xl:hidden flex items-center justify-center w-[40px] h-[40px] ml-4">
              {open ? (
                <RiCloseLine
                  className="text-4xl text-yellow cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <TfiMenu
                  className="text-3xl text-yellow cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
          </div>
        </div>
        <Mobile open={open} setOpen={setOpen} lang={lang} btnLang={setLang} />
      </nav>
    </>
  );
};

export default Navbar;
