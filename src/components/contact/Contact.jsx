import React, { useState, useRef } from 'react'
import contactGif from '../../assets/Sent Message (1).gif'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { IMaskInput } from "react-imask";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+{998} (00) 000 00 00"
            definitions={{
                _: /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

const Contact = () => {
    const { t } = useTranslation()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")

    const [nameE, setNameE] = useState(false)
    const [phoneE, setPhoneE] = useState(false)
    const [msgE, setMsgE] = useState(false)

    const [errorMsg, setErrorMsg] = useState(false)

    const bot_token = '6466570241:AAHN724S83Lhey_koItEZXJLTpBRsuAR7E8'
    const chat_id = -1001928870254;

    const sendData = async (e) => {
        e.preventDefault()

        if (name.length < 3 && phone.length < 11 && msg.length < 4) {
            setErrorMsg(true)
            return
        }

        if (name.length < 3) {
            setNameE(true)
            return
        }

        if (phone.length < 11) {
            setPhoneE(true)
            return
        }

        if (msg.length < 4) {
            setMsgE(true)
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
            setNameE(false)
            setErrorMsg(false)
            setPhoneE(false)
            setMsgE(false)
        } catch (error) {
            console.log(error)
        }
        console.log(message)
    }

    return (
        <div className='contact container-custom w-full'>
            <h1 className='text-2xl font-black'>{t("contact.contactText")}</h1>
            <div className='w-[100%] ml-[30px] mt-[20px] h-[2px] border border-[#DCDCE5]'></div>
            {errorMsg ? <h1 className='text-center mt-2 text-[red] text-3xl'>{t("contact.error.general")}</h1> : ""}
            <div className="box-container grid lg:grid-cols-2 sm:grid-cols-1">
                <form className="box flex flex-col gap-4">
                    <div className="box grid gap-6">
                        <label htmlFor="name" className='font-semibold'>{t("contact.name")}</label>
                        <input type="text" id='name' className='focus:outline-none focus:border focus:border-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-2 border-[#DCDCE5] rounded-[3.36px]' placeholder={t("contact.namePlaceholder")} onChange={(e) => setName(e.target.value)} />
                        {nameE ? <h1 className='text-[red]'>{t("contact.error.name")}</h1> : ""}
                    </div>
                    <div className="box grid gap-6">
                        <label htmlFor="phone" className='font-semibold'>{t("contact.phone")}</label>
                        <TextMaskCustom type="tel" id="phone" className='focus:outline-none focus:border focus:border-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-2 border-[#DCDCE5] rounded-[3.36px]' placeholder='+998(99)-000-00-00' onChange={(e) => setPhone(e.target.value)} />
                        {phoneE ? <h1 className='text-[red]'>{t("contact.error.phone")}</h1> : ""}
                    </div>
                    <div className="box grid gap-6">
                        <label htmlFor="message" className='font-semibold'>{t("contact.msg")}</label>
                        <textarea id="message" className='focus:outline-none focus:border focus:border-[#DC4298] outline-none w-full block border border-[0.45px] px-8 py-4 border-[#DCDCE5] rounded-[3.36px] mb-[10px]' placeholder={t("contact.msgPlaceholder")} cols="30" rows="7" onChange={(e) => setMsg(e.target.value)}></textarea>
                        {msgE ? <h1 className='text-[red]'>{t("contact.error.msg")}</h1> : ""}
                    </div>
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