import Link from "next/link";
import Image from 'next/image';
import { IconContext } from "react-icons";
import { TbHeartCode } from "react-icons/tb";

const Hero = () => {

    return (
        <div className="flex flex-col p-6 m-4 md:m-7 place-content-center text-center md:text-start gap-2 bg-white/30 ">
            <div className="flex gap-5 flex-col-reverse md:place-content-start md:flex-row mt-5 ">

                <h1 className="text-5xl lg:text-8xl font-extrabold md:text-start gradient-text">Frontend Developer</h1>
                <p>Hi, I&apos;m Camo!  </p>
                <div className=" rounded-full self-center" >
                    <IconContext.Provider
                        value={{ size: '50px' }}
                    >
                        <div>
                            <TbHeartCode />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="relative w-44 flex content-end justify-evenly items-center self-center mt-10">

                
                <Link className="p-2  self-center text-xs " href="/projects"><div className="bg-transparent w-40 h-20 -z-0 rounded-full hover:bg-violet-700 blur-xl  opacity-35 absolute top-0" />Check my projects </Link>


            </div>
        </div>
    )
}

export default Hero;