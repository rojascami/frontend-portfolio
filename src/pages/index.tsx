import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Manrope, Vollkorn } from 'next/font/google';
import Hamburger from 'hamburger-react'


const manrope = Manrope({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
})
const vollkorn = Vollkorn({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})


export default function Home() {
  const [ isOpen, setOpen ] = useState(false)
  return (
    <div
      className={`${manrope.className} grid grid-cols-6 justify-between`}
    >
      <header className="col-span-full  border-b border-black flex justify-between items-center content-center ">
        <Link href='#' className={`${vollkorn.className} font-semibold m-4 text-2xl`}>C.</Link>
        <div className="flex  gap-3 m-4 justify-between content-center items-center">
          <Link href='#' className="text-xs font-semibold">Download CV</Link>
          <Link href='#' className="hidden md:block">GitHub</Link>
          <div className="flex justify-center content-center items-center">
            <Link href='#'>Menu</Link>
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} size={22} />
          </div>
          <div className={`${!isOpen && 'hidden' } col-span-full bg-slate-600`}>menu</div>

        </div>
      <span className="absolute w-48 h-56 -z-50 rounded-full bg-violet-700 blur-3xl right-4 top-2 opacity-35">hola</span>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
