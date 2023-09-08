import React from 'react'

const Footer = () => {
    return (
        <div className='p-[60px] flex flex-col justiy-center w-full bg-[#0a0a0a] text-white'>
            <div>
                <ul className='flex lg:flex-row flex-col gap-[50px]'>
                    <li>Data Camp - Learning Center</li>
                    <li>datacamp@gmail.com</li>
                    <li>+998 (99) 999 99 99</li>
                </ul>
            </div>
            <div className='w-full mt-[30px] mx-auto h-[1px] border border-[#DCDCE5]'></div>
            <div className='flex w-full mt-[30px] justify-center'>
                <h1>Copyright © 2023 Code Brigade.</h1>
            </div>
        </div>
    )
}

export default Footer