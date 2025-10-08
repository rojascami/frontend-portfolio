import { TbBrandGithub, TbWorldShare } from "react-icons/tb";
import Image from 'next/image'
import Link from "next/link";
import projects from "@/lib/projects.json"

const Projects = () => {

    return (
        <div className="bg-white mt-16 flex flex-col">
            {projects.map((item, i) =>
                <div className="m-4 " key={i}>
                    <Image src={item.src} width={500}
                        height={500}
                        alt={item.title}
                        className="rounded-lg hover:scale-110 duration-300 border border-black rounded-md" />
                    <div className="flex m-2 justify-between ">
                        <h3 className="text-md text-bold">{item.title}</h3>
                        <div className="flex gap-2 text-sm  ">
                        {/* <Link href={item.url}><TbBrandGithub className="hover:scale-110 hover:text-violet-700"/></Link> */}
                        <Link href={item.url} className="hover:scale-110 hover:text-violet-700 border border-black hover:border-violet-500 rounded pr-5 pl-5 pt-1 pb-1">GitHub </Link>
                        <Link href={item.live} className="hover:scale-110 hover:text-violet-700 border border-black hover:border-violet-500 rounded pr-5 pl-5 pt-1 pb-1">Live Site</Link>
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}

export default Projects;