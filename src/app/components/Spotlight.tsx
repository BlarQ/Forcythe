'use client'
import React, { useState } from 'react';
import Button from './Button';
import { BiSolidRightArrow } from 'react-icons/bi';
import Image from 'next/image';

interface NavLink {
    id: number;
    name: string;
    title: string;
    paragraph: string;
    image: string; // Add image property
}

const navLinks: NavLink[] = [
    {
        id: 1,
        name: "Idea",
        title: "Your vision is unique.",
        paragraph: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
        image: '/camera-man.svg' // Add corresponding image path
    },
    {
        id: 2,
        name: "Design",
        title: "Crafting the blueprint for success",
        paragraph: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
        image: '/plan-design.svg' // Add corresponding image path
    },
    {
        id: 3,
        name: "Develop",
        title: "Turning blueprints into reality.",
        paragraph: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
        image: '/plan-develop.svg' // Add corresponding image path
    },
    {
        id: 4,
        name: "Launch",
        title: "Your launchpad to the market.",
        paragraph: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
        image: '/plan-launch.svg' // Add corresponding image path
    },
];

const Spotlight: React.FC = () => {
    const [selectedLink, setSelectedLink] = useState<NavLink>(navLinks[0]); // Default to the first link

    const handleButtonClick = (link: NavLink) => {
        setSelectedLink(link);
    };

    return (
        <div className="text-white py-10 px-4 md:px-28">
            <h2 className="text-3xl md:text-5xl font-semibold w-full md:w-[80%]">
                From <span className="text-[#60a6e7]">Spark</span> to{" "}
                <span className="text-[#60a6e7]">Spotlight:</span> we take you every
                step of the way to success.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className='py-[50px] space-y-10'>
                    <nav className="flex items-center justify-center border-2 p-2 md:p-4 gap-1 rounded-full">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                className={`block rounded-full text-base sm:text-lg md:text-xl px-3 py-2 sm:px-4 md:px-8 md:py-4 font-semibold 
                                ${selectedLink.id === link.id ? 'bg-[#b3d0f2] text-[#030516]' : 'text-white'}`}
                                onClick={() => handleButtonClick(link)}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Display selected link content */}
                    <div className="mt-6 space-y-10">
                        <h3 className="text-[24px] md:text-[32px] font-bold">{selectedLink.title}</h3>
                        <p className="text-base md:text-lg text-[#aea9b1] font-semibold w-full md:w-[90%]">{selectedLink.paragraph}</p>
                    </div>

                    <div>
                        <Button href='/' text='Book a Call' className='!text-[black]' icon={<BiSolidRightArrow />} />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={selectedLink.image} width={500} height={500} alt={selectedLink.name} className="object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Spotlight;