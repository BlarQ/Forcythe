'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const socials = [
    { name: 'Facebook', url: '/socials/facebook.svg' },
    { name: 'Instagram', url: '/socials/instagram.svg' },
    { name: 'X', url: '/socials/x.svg' },
    { name: 'LinkedIn', url: '/socials/linkedin.svg' },
    { name: 'Youtube', url: '/socials/youtube.svg' },
    { name: 'Icon', url: '/socials/icon.svg' },
];

const links = [
    { name: 'About', url: '/' },
    { name: 'Services', url: '/' },
    { name: 'Portfolio', url: '/' },
    { name: 'Studio', url: '/' },
    { name: 'Foundation', url: '/' },
    { name: 'Careers', url: '/' },
    { name: 'Blog', url: '/' },
];

const Footer = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='pt-14 sm:px-[112px] px-4'>
            <div className='flex flex-col sm:flex-row py-10 space-y-8 sm:space-y-0 sm:space-x-8'>

                <div className='flex flex-col gap-4 sm:w-[35%]'>
                    <form className='border rounded-full flex items-center h-fit justify-between border-white pl-4'>
                        <input className='bg-transparent w-full outline-none py-2 text-sm text-white placeholder:text-[#79767D] placeholder:font-medium placeholder:px-2' placeholder='Your Email Address' type="text" title='subscribe' name="" id="" />
                        <button className='bg-white rounded-r-full rounded-l-[30rem] py-2 font-medium px-4'>Subscribe</button>
                    </form>

                    <div className=''>
                        <label className="flex items-center gap-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span
                                className={`sm:w-6 w-6 h-5 sm:h-5 border-2 rounded-full transition-all duration-200 
                                ${isChecked ? 'border-white' : 'border-white'} 
                                bg-transparent flex items-center justify-center`}
                            >
                                {isChecked && (
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                )}
                            </span>
                            <p className='text-white font-medium'>I agree to receive other notifications from Forcythe</p>
                        </label>
                    </div>
                </div>

                <div className='sm:w-[60%] flex flex-col gap-8 sm:px-24'>
                    <Image className='size-28 h-fit' src={'/forcythe-logo.svg'} alt='Logo.svg' width={140} height={31} />

                    <p className='text-[#aea9b1] font-medium'>We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>

                    <div className='hidden sm:flex items-center gap-2'>
                        {
                            socials.map((social) => (
                                <div key={social.name} className='border border-[#60a6e7] w-fit rounded-full p-2'>
                                    <Link href={'/'} target='_blank' rel='noopener noreferrer'>
                                        <Image className='h-5 w-5' width={10} height={10} src={social.url} alt={social.name} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='sm:w-[20%] text-white'>
                    <h2 className='text-2xl font-bold mb-8'>Company</h2>

                    {
                        links.map (link => (
                            <Link href={link.url} key={link.name} rel='noopener noreferrer'>
                                <p className='py-1 font-semibold text-[#b3d0f2]'>{link.name}</p>
                            </Link>
                        ))
                    }

                    <div className='sm:hidden flex items-center justify-center gap-2 pt-5'>
                        {
                            socials.map((social) => (
                                <div key={social.name} className='border border-[#60a6e7] w-fit rounded-full p-2'>
                                    <Link href={'/'} target='_blank' rel='noopener noreferrer'>
                                        <Image className='h-5 w-5' width={10} height={10} src={social.url} alt={social.name} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <hr className='border-[#b3d0f2]' />

            <p className='text-[#aea9b1] text-center sm:text-left text-sm font-semibold py-4'>Copyright © {new Date().getFullYear()} Forcythe. All rights reserved.</p>
        </div>
    );
}

export default Footer;