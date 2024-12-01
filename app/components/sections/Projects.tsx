import { ExternalLink, GithubIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
    return(
        <div>
        <section className="flex items-baseline gap-2" id="projects">
            <span className="green text-xl">03.</span><h1 className="gray text-xl font-semibold topic flex items-center gap-5"> Meus Projetos <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </section>
        <div className="pt-10 relative">
        <Image alt="Foto do Projeto" src={"/overview.png"} width={700} height={450} className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md absolute"/>
            <section className="flex flex-col items-end gap-3" >
                <h1 className="green">Projeto</h1>
                <h2 className="text-[var(--slate-light)] projects font-semibold text-xl">Overview Dashboard</h2>
                    <section className="project-desc text-sm rounded shadow-lg px-8 py-5 max-w-[300]  text-end ">
                        <p className="">Desenvolvi um site de dashboard focado na visualização de dados, permitindo o acompanhamento de métricas em tempo real através de gráficos dinâmicos. Utilizando tecnologias como React, TypeScript, e shadcn, o sistema oferece uma interface intuitiva e responsiva para exibição de estatísticas detalhadas.  </p>
                    </section>
                <ul className="text-[var(--slate)] flex gap-3">
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>shadcn</li>
                    <li>firebase</li>
                </ul>
                <ul className="gray flex gap-3">
                    <li ><Link href={"https://github.com/Bielzera97/dashboard"} target="blank"><GithubIcon/></Link></li>
                    <li ><Link href={"https://overview-dashboard-ashen.vercel.app/"} target="blank"><ExternalLink/></Link></li>
                </ul>
            </section>
        </div>
        </div>
    )
}


export default Projects