'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';

const navLinks = [
    { label: 'About', href: '/' },
    { label: 'Services', href: '/' },
    { label: 'Portfolio', href: '/' },
    { label: 'Studio', href: '/' },
    { label: 'Foundation', href: '/' },
];

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    return (
        <div className='flex items-center justify-between px-4 md:px-10 py-[1-8rem] lg:px-28 fixed inset-x-0 z-10 bg-opacity-50 backdrop-blur-md'>
            <div className='flex items-center justify-center gap-20'>
                <div>
                    <Image className='size-28' src={'/forcythe-logo.svg'} alt='Logo.svg' width={140} height={31} />
                </div>

                <div className='hidden lg:flex items-center gap-4'>
                    {
                        navLinks.map((link, index) => (
                            <Link className='text-[#ffffff] text-base font-semibold' href={link.href} key={index}>
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className='hidden lg:flex'>
                <Button href='/' text='Book a Call' />
            </div>

            <div className='flex lg:hidden p-[12px] bg-white rounded-lg opacity-10'>
                <button title='menu' onClick={toggleMobileMenu}>
                    <Image
                        className='fill-white'
                        src={'/menu.svg'}
                        width={20}
                        height={20}
                        alt='menu'
                        style={{ filter: 'invert(1)' }}
                    />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden bg-[#030516] shadow py-5 shadow-white w-[50%] text-white p-4 rounded-3xl absolute top-[150px] right-4'>
                    {navLinks.map((link, index) => (
                        <Link className='block text-base font-semibold py-2' href={link.href} key={index} onClick={toggleMobileMenu}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Header;