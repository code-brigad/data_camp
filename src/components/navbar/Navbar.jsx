import React, { useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { TfiMenu } from 'react-icons/tfi'
import { BsThreeDots } from "react-icons/bs";
import Mobile from './Mobile'
import ModalButton from './ModalButton';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false)
    const [appOpen, setAppOpen] = useState(false);
    const [lang, setLang] = useState(true)
    const { t, i18n } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(lang ? "uz" : "ru")
    }, [lang])
    return (
        <>
            <nav className="w-full custom-container p-[40px] text-black flex flex-row items-center justify-between py-6 relative">
                <h1 className='text-[#313273] font-bold text-xl'>Data Camp</h1>
                <div className='flex gap-[30px] justify-end items-center'>
                    <ul className="xl:flex hidden flex-row gap-8 font-tahomaRegular">
                        <li className="text-[14px] text-[#230F0F]">
                            {t("navbar.link.main")}
                        </li>
                        <li className="text-[14px] text-[#230F0F]">
                            {t("navbar.link.course")}
                        </li>
                        <li className="text-[14px] text-[#230F0F]">
                            {t("navbar.link.connection")}
                        </li>
                    </ul>
                    <div className="flex flex-row items-center justify-end">
                        <ul className="md:flex hidden flex-row items-center gap-6">
                            <button
                                className="button-hover border-[#dc4298] text-[#dc4298] w-[80px] h-[50px] rounded-xl border border-sky-500 flex flex-row items-center justify-center"
                                onClick={() => {
                                    setAppOpen(!appOpen)
                                    setLang(!lang)
                                }}

                            >
                                {lang ? "Uz" : 'Ru'}
                            </button>
                        </ul>
                        <BsThreeDots
                            className="md:hidden flex text-3xl text-yellow cursor-pointer"
                            onClick={() => setModal(!modal)}
                        />
                        <ModalButton open={modal} app={appOpen} setApp={setAppOpen} lang={lang} btnLang={setLang} />
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
                <Mobile open={open} />
            </nav>
        </>
    )
}

export default Navbar