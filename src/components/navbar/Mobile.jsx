import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as Scroll from "react-scroll";

const Mobile = ({ open, setOpen, lang, btnLang }) => {
  const { t } = useTranslation();
  return (
    <>
      {open ? (
        <div className="container-custom z-[200] xl:hidden block absolute w-full top-[90px] left-0 mx-auto">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <ul
              className={`max-w-[800px] mx-auto bg-[#f2f2f2] justify-center flex flex-col`}
            >
              <li
                className="cursor-pointer border-0 border-b w-full hover:bg-[#e3e1e1]"
                onClick={() => setOpen(!open)}
              >
                <Scroll.Link
                  className="w-full block p-4"
                  to={"main"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                >
                  {t("navbar.link.main")}
                </Scroll.Link>
              </li>
              <li
                className="cursor-pointer border-0 border-b w-full hover:bg-[#e3e1e1]"
                onClick={() => setOpen(!open)}
              >
                <Scroll.Link
                  to={"courses"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  className="w-full block p-4"
                >
                  {t("navbar.link.course")}
                </Scroll.Link>
              </li>
              <li
                className="cursor-pointer border-0 w-full hover:bg-[#e3e1e1]"
                onClick={() => setOpen(!open)}
              >
                <Scroll.Link
                  to={"contact"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  className="w-full block p-4"
                >
                  {t("navbar.link.connection")}
                </Scroll.Link>
              </li>
              <li className="w-full p-4">
                <button
                  className="button-hover w-full border-pink font-bold text-[#dc4298] px-7 py-2 rounded-[6px] border hover:bg-pink/[0.2] transition flex flex-row items-center justify-center"
                  onClick={() => btnLang(!lang)}
                >
                  {lang ? "Uz" : "Ru"}
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Mobile;
