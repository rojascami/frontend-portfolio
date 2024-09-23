'use client'

import * as motion from "framer-motion/client"
import Link from "next/link";
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import data from '@/lib/sections.json'


interface HeaderProps {
    vollkorn: { className: string; }
}

const Header: React.FC<HeaderProps> = ({ vollkorn }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <motion.div className={`${!isOpen && 'opacity-0'} absolute w-full h-full col-span-full bg-black text-white transition ease-in-out delay-50 flex items-center pl-7`}>
                <div className="flex flex-col justify-center text-4xl gap-8">
                    {data.map((section, index) => (
                        <Link key={index} href={section.url}>{section.section}</Link>
                    ))}

                </div>
            </motion.div>
            <header className="col-span-full  border-b border-black flex justify-between items-center content-center ">

                <Link href='#' className={`${vollkorn.className} font-semibold m-4 text-2xl`}>C.</Link>
                <div className="flex  gap-3 m-4 justify-between content-center items-center">
                    <Link href='#' className="text-xs font-semibold">Download CV</Link>
                    <Link href='#' className="hidden md:block">GitHub</Link>
                    <div className="flex justify-center content-center items-center">
                        <Link href='#'>Menu</Link>
                        <div className={`${!isOpen ? 'text-black' : 'text-white hover:animate-bounce'}`}><Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} size={16} />{isOpen && 'close'}</div>
                    </div>
                </div>
                <div className="absolute w-48 h-56 -z-50 rounded-full bg-violet-700 blur-3xl right-4 top-2 opacity-35" />
            </header>
        </>
    )
}

export default Header;