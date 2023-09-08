import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Mobile = ({ open, lang, btnLang }) => {
  const { t } = useTranslation()
  return (
    <>
      {open ? (
        <div className="z-[200] xl:hidden block absolute w-full top-[120px] left-0 mx-auto overflow-hidden">
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
              className={`w-[90%] overflow-hidden max-w-[800px] mx-auto bg-white duration-300 box-shadow justify-center flex flex-col items-center gap-[10px]`}
            >
              <li
                className="text-black text-center cursor-pointer border hover:bg-[#f2f2f2] border-t-0 border-l-0 border-r-0 last:border-b-0"
              >
                {t("navbar.link.main")}
              </li>
              <li
                className="text-black text-center cursor-pointer border hover:bg-[#f2f2f2] border-t-0 border-l-0 border-r-0 last:border-b-0"
              >
                {t("navbar.link.course")}
              </li>
              <li
                className="text-black text-center cursor-pointer border hover:bg-[#f2f2f2] border-t-0 border-l-0 border-r-0 last:border-b-0"
              >
                {t("navbar.link.connection")}
              </li>
              <li>
                <button
                  className="button-hover border-[#dc4298] text-[#dc4298] w-[80px] h-[60px] rounded-xl border border-sky-500 flex flex-row items-center justify-center"
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
