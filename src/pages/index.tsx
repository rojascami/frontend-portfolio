// import Image from "next/image";



import { Manrope, Vollkorn } from 'next/font/google';

import Header from '@/components/Header';

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
    <div className={`${manrope.className} grid grid-cols-6 justify-between`}>

      <Header vollkorn={vollkorn}/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
