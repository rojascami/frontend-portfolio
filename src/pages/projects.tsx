import { TbBrandGithub } from "react-icons/tb";
import Image from 'next/image'
import Link from "next/link";

const Projects = () => {

    return (
        <div className="bg-white flex flex-col">
            <div>
                <Image src="/photovideo.png" width={500}
                    height={500}
                    alt="Picture of the author"></Image><Link href="https://github.com/rojascami/photography-portfolio"><TbBrandGithub />
                </Link>
            </div>
            <div>
                <Image src="/lumina-workouts-desktop.jpg" width={500}
                    height={500}
                    alt="Picture of the author"></Image><Link href="https://github.com/rojascami/photography-portfolio"><TbBrandGithub />
                </Link>
            </div>
            <div>
                <Image src="/dessert-market-desktop.jpg" width={500}
                    height={500}
                    alt="Picture of the author"></Image><Link href="https://github.com/rojascami/photography-portfolio"><TbBrandGithub />
                </Link>
            </div>
            <div>
                <Image src="/natours-desktop.jpg" width={500}
                    height={500}
                    alt="Picture of the author"></Image><Link href="https://github.com/rojascami/photography-portfolio"><TbBrandGithub />
                </Link>
            </div>

        </div>
    )
}

export default Projects;