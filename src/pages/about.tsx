import Link from "next/link";
import { TbFileTypeHtml, TbFileTypeCss, TbBrandReact, TbBrandNextjs, TbBrandTypescript, TbBrandFigma, TbBrandTailwind, TbBrandNpm } from 'react-icons/tb';

const About = () => {

    return (
        <div className="bg-white">
        <div className="bg-black h-100 w-50 block">hola</div>
        About me:
        Hi! I&apos;m a DevOps Engineer transitioning to Frontend Development with a strong sense on visual design. My background in automation, cloud technologies, and infrastructure management combined with my fresh expertise in React and modern Javascript frameworks will help me build seamless and efficient user experiences. Always committed to learning and adapting.
        <div className="flex">
            <p>Tech Stack:</p>
            <TbFileTypeHtml />
            <TbFileTypeCss />
            <TbBrandReact />
            <TbBrandNextjs />
            <TbBrandTypescript />
            <TbBrandFigma />
            <TbBrandTailwind />
            <TbBrandNpm />

        </div>
        </div>
    )
}

export default About;