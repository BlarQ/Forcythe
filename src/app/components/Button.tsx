import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps {
  href: string
  text: string
  icon?: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonLinkProps> = ({ href, text, icon, className }) => {
  return (
    <div className={`w-fit border border-dashed rounded-full group hover:border-[#064386] duration-300 ${className}`}>
      <div className='rounded-full relative bottom-1.5 left-1.5'>
        <Link className='z-10 group-hover:bg-[#064386] duration-300 bg-white py-3 px-5 rounded-full text-base font-bold group-hover:text-white flex items-center gap-1' href={href}>
          {text}
          {icon && <span className=''>{icon}</span>}
        </Link>
      </div>
    </div>
  )
}

export default Button