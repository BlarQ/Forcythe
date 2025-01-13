import React from 'react';

const client = [
    { id: 1, number: 50, title: 'Clients' },
    { id: 2, number: 120, title: 'Projects' },
    { id: 3, number: 10, title: 'Team Leads' },
    { id: 4, number: 10, title: 'Glorious Years' },
];

const ClientBar = () => {
    return (
        <div className='custom-reverse-gradient min-h-[60vh] py-10'>
            <div className='max-w-[52rem] mx-auto bg-[url("/arc.svg")] lg:bg-[url("/arc-L.svg")] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat h-[60vh]'>
                <div className='w-full h-full flex items-center justify-center flex-col gap-16 lg:pt-28'>
                    <h2 className='text-white text-[24px] md:text-[30px] font-semibold text-center w-full lg:w-[60%]'>
                        We build solutions that help <span className='text-[#60a6e7]'>businesses</span> of all sizes to <span className='text-[#60a6e7]'>scale</span>
                    </h2>

                    <div className='grid grid-cols-4 gap-2 lg:gap-8 text-white'>
                        {
                            client.map((cl) => {
                                return (
                                    <div key={cl.id} className=''>
                                        <p className='text-[27px] md:text-[48px] font-bold text-[#60a6e7]'>{cl.number}+</p>
                                        <p className='text-[12px] md:text-[18px] font-semibold'>{cl.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientBar;