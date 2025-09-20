// import Image from "next/image";



import { Manrope, Vollkorn } from 'next/font/google';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/pages/about'
import Projects from './projects';

const manrope = Manrope({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
})
const vollkorn = Vollkorn({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})


export default function Home() {
  
  return (
    <div className={`${manrope.className} grid grid-cols-12 justify-between`}>

      <Header vollkorn={vollkorn}/>
      
      <div className="col-start-2 col-end-12">
        <Hero></Hero>
  </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
