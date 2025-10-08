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
                    <div className="flex m-2 justify-evenly ">
                        <h3>{item.title}</h3>
                        <div className="flex gap-2 border border-black rounded-md text-xl pr-4 pl-4 pt-1 pb-1 ">
                        <Link href={item.url}><TbBrandGithub className="hover:scale-110 hover:text-violet-700"/></Link>
                        <Link href={item.live}><TbWorldShare className="hover:scale-110 hover:text-violet-700" /></Link>
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}

export default Projects;