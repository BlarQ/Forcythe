import React from 'react'
import Button from './Button'
import { BiSolidRightArrow } from 'react-icons/bi'
import Image from 'next/image'

const Images = [
    { id: 1, title: 'Will AI take over Art?', img: '/imageA.jpeg' },
    { id: 2, title: 'Cryptocurrency vs Tokens', img: '/imageB.jpeg' },
    { id: 3, title: 'Cryptocurrency and Crypto asset', img: '/imageC.jpeg' },
]

const Article = () => {
    return (
        <div className='px-4 lg:px-[112px] py-14 space-y-8'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-[80%_20%]'>
                <h2 className='text-[32px] w-[90%] lg:w-full lg:text-[41.6px] text-white font-semibold'>Read our articles, news and product blog</h2>

                <div className='flex lg:items-end lg:justify-end pr-4'>

                    <Button href='/' text='Visit Blog' icon={<BiSolidRightArrow />} />
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        Images.map(image => (
                            <div key={image.id} className='grid grid-cols-1 gap-8 text-white hover:border-y group rounded-t-3xl rounded-b-3xl'>
                                <div className='h-[35vh] group-hover:scale-105 duration-300'>

                                    <Image className=' rounded-3xl h-full w-full' width={1500} height={1500} src={image.img} alt={image.title} />
                                </div>

                                <div className='border-l pl-4 group-hover:translate-x-4 duration-300'>
                                    <h1 className='text-lg font-bold'>Blog</h1>
                                    <p className='text-[#aea9b1] text-base font-normal'>The Reformist • May 29th, 2024</p>

                                    <p className='text-2xl font-bold py-5'>{image.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Article