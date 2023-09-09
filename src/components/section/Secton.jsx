import React from "react";
import sectionImg from "../../assets/Reading list.gif";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Section = () => {
  const { t } = useTranslation();
  return (
    <section id="main" className="container-custom" data-aos="fade-up">
      <div className="w-full flex lg:flex-row flex-col-reverse items-center">
        <div className="lg:w-[50%] w-full flex flex-col gap-6">
          <h1 className="md:text-[3rem] text-[2.5rem] font-black">
            {t("hero.title")}
          </h1>
          <p className="leading-4 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae a minus ducimus. Vero ut officia dignissimos modi culpa.
            Dicta soluta officia quia autem consequuntur iusto quidem voluptate,
            esse illum iure.
          </p>
          <Link
            className="block cursor-pointer w-fit py-2 px-6 bg-[#DC4298] hover:bg-pinkwish transition text-[#FFF] rounded-[2.696px]"
            to={"contact"}
            spy={true}
            offset={-50}
            smooth={true}
          >
            {t("hero.btn")}
          </Link>
        </div>
        <div className="lg:w-[50%] w-full">
          <img src={sectionImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;
