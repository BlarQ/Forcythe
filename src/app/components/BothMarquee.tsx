import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const jobImages = [
    { id: 1, img: "/marquee/activity.svg" },
    { id: 2, img: "/marquee/africaFund.svg" },
    { id: 3, img: "/marquee/exec-pro.svg" },
    { id: 4, img: "/marquee/phone.svg" },
    { id: 5, img: "/marquee/stac.svg" },
    { id: 6, img: "/marquee/starks.svg" },
];

const BothMarquee = () => {
    return (
        <div className='w-full space-y-4'>
            <Marquee direction="left">
                {
                    jobImages.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-center">
                                <Image
                                    className='px-3 md:w-24 md:h-24 w-16 h-16' 
                                    src={item.img}
                                    alt={`Image for ${item.img}`} 
                                    width={100}
                                    height={100}
                                    layout="responsive"
                                />
                            </div>
                        );
                    })
                }
            </Marquee>
            <Marquee direction="right">
                {
                    jobImages.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-center">
                                <Image
                                    className='px-3 md:w-24 md:h-24 w-16 h-16' 
                                    src={item.img}
                                    alt={`Image for ${item.img}`} 
                                    width={100}
                                    height={100}
                                    layout="responsive" 
                                />
                            </div>
                        );
                    })
                }
            </Marquee>
        </div>
    );
}

export default BothMarquee;