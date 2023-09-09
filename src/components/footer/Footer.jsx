import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#0a0a0a] py-8'>
        <div className='container-custom flex flex-col justiy-center gap-6 w-full text-white'>
            <div>
                <ul className='flex lg:flex-row flex-col lg:gap-[50px] gap-4'>
                    <li>Data Camp - Learning Center</li>
                    <li>datacamp@gmail.com</li>
                    <li><a href="tel: +998999999999">+998 (99) 999 99 99</a></li>
                </ul>
            </div>
            <div className='w-full mx-auto h-px border-0 border-t border-[#DCDCE5]/[0.4]'></div>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold'>Copyright © 2023 Code Brigade.</h1>
            </div>
        </div>
        </div>
    )
}

export default Footer