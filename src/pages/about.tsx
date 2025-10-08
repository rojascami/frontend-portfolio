import Link from "next/link";
import { TbFileTypeHtml, TbFileTypeCss, TbBrandReact, TbBrandNextjs, TbBrandTypescript, TbBrandFigma, TbBrandTailwind, TbBrandNpm } from 'react-icons/tb';

const About = () => {

    return (
        <div className="bg-white flex flex-col justify-center">
            <div className="bg-black h-0.5 w-7 block m-2" />
            <p className="m-4">
                
               I&apos;m a DevOps Engineer transitioning to Frontend Development with a strong sense on visual design. My background in automation, cloud technologies, and infrastructure management combined with my fresh expertise in React and modern Javascript frameworks will help me build seamless and efficient user experiences.
            </p>
            <div className="flex flex-row justify-end gap-3 mr-5 ">



                <TbFileTypeHtml />                            
                <TbFileTypeCss />
                <TbBrandReact />
                <TbBrandNextjs />
                <TbBrandTypescript />
                <TbBrandFigma />
                <TbBrandTailwind />
                <TbBrandNpm />

            </div>

             <div className="relative w-44 flex justify-evenly items-center self-center mt-10">


                <Link className="p-2 self-center text-gray-500 text-sm inset-0 relative flex items-center justify-center font-semibold u" href="/projects">

                    <div className="bg-violet-400  absolute  w-40 h-20 rounded-full blur-xl opacity-35 transition-colors duration-300 hover:bg-violet-700" />Check my projects </Link>
            </div>
        </div>
    )
}

export default About;