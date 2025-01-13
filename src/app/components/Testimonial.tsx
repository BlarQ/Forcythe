'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define the type for each item in the testNav array
interface TestNavItem {
  id: number;
  name: string;
  img: string;
  info: string;
  picture: string;
  company: string;
  staff: string;
}

// Define the testNav array with the specified type
const testNav: TestNavItem[] = [
  { id: 1, name: 'Starks', img: '/testimonialNav/st.svg', info: 'Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.', picture: '/john.svg', company: 'Starks', staff: 'John, Management' },
  { id: 2, name: '', img: '/testimonialNav/ExecutivePros Logo.svg', info: 'The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!', picture: '/executive-pro-ceo.svg', company: 'ExecutivePros', staff: 'Testimony, Co-founder' },
  { id: 3, name: '', img: '/testimonialNav/stacai.svg', info: 'Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.', picture: '/edwin.svg', company: 'Stac AI', staff: 'Edwin, Former CTO' },
  { id: 4, name: '', img: '/testimonialNav/iwaria.svg', info: 'The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.', picture: '/iwaria-founder.svg', company: 'Iwaria', staff: 'Iwaria, Founder' },
  { id: 5, name: '', img: '/testimonialNav/Beaupreneur.svg', info: 'I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.', picture: '/christina.svg', company: 'Christiana, Founder', staff: 'Beaupreneur' },
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testNav.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNavClick = (index: number) => { // Specify the type for index
    setActiveIndex(index);
  };

  return (
    <div className='text-white flex items-center justify-center flex-col py-8'>
      <div className='flex items-center justify-center w-full'>
        <h2 className='text-[32px] md:text-[41.6px] font-semibold text-center w-[80%] lg:w-[60%] py-10'>
          Discover the <span className='text-[#60a6e7]'>transformative stories</span> of startups that scaled new heights with us
        </h2>
      </div>

      <div className='flex items-center justify-between border border-[#0c2645] rounded-full w-[90%] lg:w-[80%] overflow-hidden'>
        <div className='flex w-[200%]'>
          {
            testNav.map((item, index) => (
              <button
                key={item.id}
                className={`flex items-center justify-center gap-2 px-4 py-2 w-[50%] ${activeIndex === index ? 'bg-[#0c2645]' : ''} ${item.name === 'Starks' ? 'rounded-l-full' : ''} ${item.img === '/testimonialNav/Beaupreneur.svg' ? 'rounded-r-full h-14' : ''}`}
                onClick={() => handleNavClick(index)}
              >
                <Image className={`${item.name === 'Starks' ? 'h-[27px] w-[21px]' : ''}`} src={item.img} alt={item.name} width={100} height={100} />
                <p className='text-sm'>{item.name}</p>
              </button>
            ))
          }
        </div>
      </div>

      {/* Display selected item information */}
      <div className={`mt-5 w-[90%] md:w-[40%] grid grid-cols-1 lg:grid-cols-2 gap-4 bg-[#0c2645] rounded-2xl p-5 md:p-10 ${activeIndex === 0 ? 'md:-ml-[34rem]' : activeIndex === 1 ? 'md:-ml-[10rem]' : activeIndex === 2 ? 'md:ml-30' : activeIndex === 3 ? 'md:ml-40' : 'md:ml-[34rem]'}`}>
        <div className='grid grid-cols-1 gap-4'>
          <h3 className='text-base font-bold'>{testNav[activeIndex].company}</h3>
          <p className='text-base font-semibold'>{testNav[activeIndex].info}</p>
          <p className='text-base font-bold'>{testNav[activeIndex].staff}</p>
        </div>
        <div className='h-full'>
          <Image className='h-full w-full rounded-lg object-cover' width={1000} height={1000} src={testNav[activeIndex].picture} alt={testNav[activeIndex].company} />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;