import React from 'react';
import TopMarquee from './BothMarquee';

const SuccessPage = () => {
    return (
        <div className='text-white flex flex-col items-center justify-center pt-5 px-4 md:px-0'>
            <h2 className='text-[32px] md:text-[41.6px] font-semibold text-center py-4 sm:py-0'>
                Success in <span className='text-[#60a6e7]'>Motion</span> – Our clients’ journey
            </h2>

            <TopMarquee />
        </div>
    );
}

export default SuccessPage;