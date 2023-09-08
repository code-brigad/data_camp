import React from 'react'
import sectionImg from '../../assets/Reading list.gif'
import { useTranslation } from 'react-i18next'

const Section = () => {
    const { t } = useTranslation()
    return (
        <div id='main' className='section w-full p-[40px]'>
            <div className="box-container grid md:grid-cols-2 sm:grid-cols-1 p-4">
                <div className="box p-4">
                    <h1 className='md:text-[3rem] sm:text-[2.5rem] font-black'>{t("section.heading")}</h1>
                    {/* <img src={vector} alt="" /> */}
                    <p className='leading-4 tracking-wide pt-10'>{t("section.poragraph")}</p>
                    <button className='my-8 py-2 px-6 bg-[#DC4298] hover:bg-pinkwish transition text-[#FFF] rounded-[2.696px]'>{t("contact.contactText")}</button>
                </div>
                <div className="box flex justify-center px-16">
                    <img src={sectionImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section