import React from 'react';
import Button from './Button';

const Booking = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-8 py-10'>
        <div className='text-white w-full lg:w-[50%] text-center'>
            <h2 className='text-[32px] md:text-[41.6px] text-[#60a6e7] font-semibold leading-tight'>Ready to Scale?</h2>
            <h2 className='text-[32px] md:text-[41.6px] font-semibold leading-tight'>Join successful brands that chose us as their <span className='text-[#60a6e7]'>growth accelerator</span></h2>
        </div>

        <div>
            <Button text='Book a Call' href='/' />
        </div>
    </div>
  );
}

export default Booking;