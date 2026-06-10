"use client"
import React from 'react'
import Image from 'next/image'
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    <div className='mt-20'>
       <div className='tex-center'>
        <Image src={assets.logo}  alt=''
        className='w-36 mx-auto
        mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            mulugetaassefa077@gmail.com
        
        </div>
        
       </div>
       <div className='text-center sm:flex items-center justify-between
       border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@2025 Mulugeta Assefa. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center
        mt-4 sm:mt-0'>
          <a href="https://github.com/mulugetaassefa" target='_blank' rel='noreferrer'>GitHub</a>
          <a href="https://www.linkedin.com/in/assefayheys" target='_blank' rel='noreferrer'>LinkedIn</a>
          <a href="https://t.me/Addis1227" target='_blank' rel='noreferrer'>Telegram @Addis1227</a>
          <a href="tel:+251924970213">Phone +251924970213</a>
        </ul>
       </div>
    </div>
  )
}

export default Footer
