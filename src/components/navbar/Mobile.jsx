import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Mobile = ({ open }) => {
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
              className={`w-[90%] overflow-hidden max-w-[800px] mx-auto bg-white duration-300 box-shadow`}
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
