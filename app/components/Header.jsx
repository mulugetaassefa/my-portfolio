import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-6 mb-6 w-12/11 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4 mt-4 '>
      
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo  '>Hi I'm Mulugeta Assefa <Image src={assets.hand_icon} alt='' className='rounded-full w-6' /> </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
          FullStack Developer & Cloud Engineer.
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
      I am a Full-Stack Software Engineer with over 2 years of professional experience building web applications, mobile application and scalable systems. I also have hands-on experience in cloud computing, DevOps, and AI-powered solutions.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className='px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2'>contact me  <Image src={assets.right_arrow_white} alt='' className=' w-4' /> </a>
        <a href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex
        items-center gap-2'>my resume  <Image src={assets.download_icon} alt='' className=' w-4' /> </a>
      </div>
    </div>
  )
}

export default Header
