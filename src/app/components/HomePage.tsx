import React from 'react';
import Button from './Button';
import { BiSolidRightArrow } from "react-icons/bi";

const HomePage = () => {
  return (
    <div className='text-white flex items-center justify-center min-h-[88vh] pt-[120px] sm:pt-[75px] px-4 md:px-28'>
        <div className='w-full grid grid-cols-1 gap-5 p-10 bg-white bg-opacity-10 rounded-[48px]'>
            <h1 className='text-[40px] md:text-[80px] font-semibold leading-none w-full md:w-[80%]'>
                We build <span className='text-[#60a6e7]'>products</span> that shape a better future
            </h1>
            <p className='w-full md:w-[70%] text-[#aea9b1] text-lg font-semibold'>
                We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.
            </p>

            <Button href='/' text='Book a Call' className='!text-black my-4' icon={<BiSolidRightArrow />}/>
        </div>
    </div>
  )
}

export default HomePage;