import React, { useEffect } from "react";
import { courses } from "../../data/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t } = useTranslation();
  return (
    <div id="courses" className="container-custom" data-aos="fade-up">
      <h1 className="font-black text-2xl text-[#090D2C]">Kurslar</h1>
      <div className="my-[20px] h-px border-0 border-t border-[#DCDCE5]"></div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-[30px]">
        {courses.map((e) => {
          return (
            <div key={e.id} className="rounded-xl overflow-hidden text-start flex flex-col gap-[8px] border border-[#DCDCE5] h-[500px] course-card transition">
              <div className="overflow-hidden h-[200px]">
                <img src={e.img} className="transition" />
              </div>
              <div className="p-6 flex flex-col overflow-hidden gap-3 h-[250px]">
                <h1 className="font-black text-md">
                  {t(e.title)} <br />
                  {t(e?.title2)}
                </h1>
                <p className="text-[#4D4D4D]">{t(e.text)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Courses;
