import React from 'react'
import { courses } from '../../data/data'

const Courses = () => {
    return (
        <div>
            <h1 className='pl-[30px] font-black text-2xl text-[#090D2C]'>Kurslar</h1>
            <div className='w-[90%] ml-[30px] mt-[20px] h-[2px] border border-[#DCDCE5]'></div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-[30px]'>
                {courses.map((e) => {
                    return (
                        <div className='rounded-xl text-start m-[20px] flex flex-col gap-[20px] border border-[#DCDCE5]'>
                            <img src={e.img} className='w-[100%]' />
                            <h1 className='pl-[30px] font-black text-md'>{e.title} <br /> {e.title2}</h1>
                            <p className='pl-[30px] pb-[30px] text-[#4D4D4D]'>{e.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses