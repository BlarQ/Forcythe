import Image from 'next/image';
import React from 'react';
import '../globals.css';

const cards = [
  { id: 1, title: 'Experience', paragraph: 'Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.' },
  { id: 2, title: 'Quick Support', paragraph: 'We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.' },
  { id: 3, title: 'Cost Savings', paragraph: 'Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.' },
]

const Innovation = () => {
  return (
    <div
      className='min-h-[60vh] custom-gradient py-10'
    >
      <h2 className='text-[#b3d0f2] text-[41.6px] font-semibold text-center pt-12'>
        Your best call for B2B/B2C product innovation
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-4 px-4 md:px-10 lg:px-[112px]'>
        {
          cards.map((card) => {
            return (
              <div key={card.id} className='border-[#030516] flex items-start justify-start gap-4 flex-col border w-full bg-[#030516] rounded-2xl p-8 sm:p-10 shadow-lg'>
                <div className='p-2 bg-[#60a6e7] rounded-md'>

                <Image className='' src={'/layers-three.svg'} alt='Icon' width={34} height={34}/>
                </div>
                <h3 className='text-white text-2xl font-medium'>{card.title}</h3>
                <p className='text-[#aea9b1] text-[18px]'>{card.paragraph}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Innovation;