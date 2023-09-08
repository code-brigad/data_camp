import React, { useState, useRef } from 'react'
import contactGif from '../../assets/Sent Message (1).gif'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")

    const [errorMsg, setErrorMsg] = useState("")

    const bot_token = '6466570241:AAHN724S83Lhey_koItEZXJLTpBRsuAR7E8'
    const chat_id = -1001928870254;

    const sendData = async (e) => {
        e.preventDefault()

        if (name.length < 3 && phone.length < 11 && msg.length < 4) {
            setErrorMsg("Ma'lumotlar kiritilmagan")
            return
        }

        if (name.length < 3) {
            setErrorMsg("Ism kiritilmagan")
            return
        }

        if (phone.length < 11) {
            setErrorMsg("Raqam kiritilmagan")
            return
        }

        if (msg.length < 4) {
            setErrorMsg("xabar kiritilmagan")
            return
        }

        const message = `👤Yangi foydalanuvchi\n<b>Ismi:</b> <i>${name}</i>  \n<b>Raqam:</b> <code>${phone}</code>\n <b>Xabar matni:</b> <code>${msg}</code>`;
        try {
            await axios.get(
                `https://api.telegram.org/bot${bot_token}/sendMessage`,
                {
                    params: {
                        chat_id: chat_id,
                        text: message,
                        parse_mode: "html"
                    },
                }
            );
        } catch (error) {
            console.log(error)
        }
        console.log(message)
    }

    return (
        <div className='contact w-full p-[40px]'>
            <h1 className='text-[2rem] mx-8'>{t("contact.contactText")}</h1>
            <div className='h-px bg-[#DCDCE5]'></div>
            <h1 className='text-center mt-2 text-[red] text-3xl'>{errorMsg}</h1>
            <div className="box-container grid lg:grid-cols-2 sm:grid-cols-1 p-4">
                <form className="box p-4 flex flex-col gap-4">
                    <label htmlFor="name">{t("contact.name")}</label>
                    <input type="text" id='name' className='focus:outline-none focus:ring focus:ring-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-2 border-[#DCDCE5] rounded-[3.36px]' placeholder={t("contact.namePlaceholder")} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="phone">{t("contact.phone")}</label>
                    <input type="number" id="phone" className='focus:outline-none focus:ring focus:ring-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-2 border-[#DCDCE5] rounded-[3.36px]' placeholder='+998(99)-000-00-00' onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="message">{t("contact.msg")}</label>
                    <textarea id="message" className='focus:outline-none focus:ring focus:ring-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-4 border-[#DCDCE5] rounded-[3.36px]' placeholder={t("contact.msgPlaceholder")} cols="30" rows="7" onChange={(e) => setMsg(e.target.value)}></textarea>
                    <button className='hover:bg-pinkwish w-full my-8 p-3 bg-[#DC4298] text-[#FFF] rounded-[3.696px]' type='submit' onClick={sendData}>{t("contact.contactText")}</button>
                </form>
                <div className="box lex justify-center px-16">
                    <img src={contactGif} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact