"use client";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { RiTableFill } from "react-icons/ri";
import Title from "./components/Title";
import CardSkills from "./components/ui/CardSkills";
import { useState } from "react";
import CardProject from "./components/ui/CardProject";
import Initial from "./components/sections/Initial";



export default function Home() {
 

  const skillsFront = [
    { image: "/skills/next.svg", skillName: "Next JS" },
    { image: "/skills/react.svg", skillName: "React JS" },
    { image: "/skills/react.svg", skillName: "React Native" },

    { image: "/skills/vite.svg", skillName: "Vite" },
    { image: "/skills/angular.svg", skillName: "Angular" },

    { image: "/skills/typescript.svg", skillName: "TypeScript" },
    { image: "/skills/javascript.svg", skillName: "JavaScript" },
    { image: "/skills/html.svg", skillName: "HTML5" },
    { image: "/skills/css.svg", skillName: "CSS3" },
    { image: "/skills/tailwind.svg", skillName: "Tailwind CSS" },
  ];

  const skillsBack = [
    { image: "/skills/typescript.svg", skillName: "TypeScript" },
    { image: "/skills/javascript.svg", skillName: "JavaScript" },
    { image: "/skills/node.svg", skillName: "Node JS" },
  ];

  const skillsOthers = [
    { image: "/skills/oracle.svg", skillName: "Oracle" },
    { image: "/skills/figma.png", skillName: "Figma" },
  ];

  const [selectedExperience, setSelectedExperience] = useState(0);
  const experiences = [
    {
      company: "Denakop",
      role: "Desenvolvedora Web",
      contractType: "PJ",
      duration: "Março 2026 - o momento",
      description:
        "Atuo no desenvolvimento e manutenção do dashboard interno da empresa utilizando React, TypeScript e Laravel, participando da criação de novas funcionalidades, correção de bugs e evolução contínua da plataforma. Também sou responsável pela implementação de melhorias na tag proprietária de publicidade em JavaScript, com foco em performance, SEO e otimização da monetização de anúncios. Além disso, realizo o gerenciamento e a implementação de formatos publicitários em sites de publishers por meio do script da empresa. Paralelamente, desenvolvo ferramentas e aplicações internas voltadas para automação de processos e otimização de tarefas operacionais, contribuindo para o aumento da produtividade e redução de atividades manuais.",
    },
    {
      company: "Meu Apê Certo",
      role: "Desenvolvedora Front-End",
      contractType: "Projeto Freelancer",
      duration: "Jan 2025 - o momento",
      description:
        " Desenvolvimento de sistema web para imobiliária utilizando Next.js, TypeScript e Tailwind CSS, com integração a APIs REST e versionamento via Git. Implementação de funcionalidades CRUD para empreendimentos e imóveis, com sessões diferenciadas para clientes, incorporadoras e administradores. Desenvolvimento de filtros avançados para pesquisa de imóveis com ranking, solicitação e fluxo completo de análise de crédito e financiamento imobiliário. Construção de dashboards interativos com estatísticas de imóveis, empreendimentos e leads de usuários, gerenciamento de planos e pagamentos, gerenciamento de usuários, responsividade do site completo, entre outros. Responsável também por parte do web design do sistema.",
    },
    {
      company: "WorkGeo",
      role: "Desenvolvedora Full Stack",
      contractType: "Estágio",
      duration: "Jun 2024 - Mar 2025",
      description:
        "Desenvolvimento do site institucional da empresa, criação de soluções de software para otimização de processosinternos da empresa, desenvolvimento de uma agenda web para gestão de atividades e eventos da empresa.",
    },
    {
      company: "Info Brasil Express",
      role: "Técnica de TI",
      contractType: "Estágio",
      duration: "Jan 2024 - Jun 2024",
      description:
        "Técnica de suporte em TI, responsável pela manutenção de computadores, instalação e configuração de softwares, atendimento ao cliente, suporte remoto e vendas.",
    },
  ];

  const projects = [
    {
      title: "Meu Apê Certo",
      description:
        "Sistema de imobiliária na qual fui responsável pelo front-end e parte do web design, com dashboards e funcionalidades para administradores, incorporadoras e clientes.",
      imageSrc: "/projects/meuape.png",
      technologies: ["Next JS", "TypeScript", "Tailwind"],
      linkDeploy: "https://app.meuapecerto.com.br",
    },

    {
      title: "Kanban",
      description:
        "Fiz um sistema de gerenciamento de tarefas no estilo Kanban.",
      imageSrc: "/projects/kanban.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      linkDeploy: "https://kanban-chi-nine.vercel.app",
      linkRepository: "https://github.com/sofiaparreira/Kanban",
    },
    {
      title: "Logística de Transporte por drones",
      description:
        "Projeto desenvolvido para um processo seletivo, no qual criei uma solução de logística de transporte utilizando drones. O sistema tem voo em tempo real, entrega de pacotes, gestão de drones, otimização de rotas e simuação de bateria. Fui responsável pelo Back-End e Front-End.",
      imageSrc: "/projects/drone.png",
      technologies: ["React", "CSS", "JavaScript", "Tailwind"],
      linkRepository: "https://github.com/sofiaparreira/api-encomendas-drone",
    },
    {
      title: "Fokus",
      description:
        "Aplicativo desenvolvido em um curso da Alura. O Fokus é um aplicativo de foco e produtividade com método pomodoro.",
      imageSrc: "/projects/fokus.png",
      technologies: ["React Native", "StyleSheet", "JavaScript", "Expo"],
      linkRepository: "https://github.com/sofiaparreira/app-fokus",
    },
    {
      title: "Animação Shell Sort",
      description:
        "Animação desenvolvida para um trabalho acadêmico, com o objetivo de demonstrar visualmente o funcionamento do método de ordenação Shell Sort, facilitando o entendimento do algoritmo e suas etapas.",
      imageSrc: "/projects/shellsort.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      linkRepository: "https://github.com/sofiaparreira/visualizador-shellsort",
      linkDeploy: "https://visualizador-shellsort.vercel.app",
    },
    {
      title: "Axyun Capital",
      description:
        "Site institucional para empresa de investimentos Axyun Capital. Projeto desenvolvido por mim utilizando HTML, CSS, JavaScript e Bootstrap.",
      imageSrc: "/projects/axyun.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      linkDeploy: "https://axyuncapital.com.br",
    },
  ];
  return (
    <main className="">
      <Navbar />

    <Initial/>

      {/* --- HABILIDADES --- */}
      <section
        id="habilidades"
        className="relative max-w-7xl mx-auto md:py-16 py-8 px-4"
      >
        <div className="relative z-10">
          <Title title="Habilidades" />

          <div className="md:grid grid-cols-2 max-md:flex max-md:flex-col gap-8">
            <div className="col-span-2 relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
              <div className="relative z-10">
                <div className="flex gap-4 items-center mb-5">
                  <div className="relative">
                    <span className="relative w-10 h-10 flex justify-center items-center border border-yellow-600/30 rounded-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm transition-transform duration-300">
                      <RiTableFill className="text-yellow-600 text-lg" />
                    </span>
                  </div>

                  <h4 className="font-medium text-white">Front-End</h4>
                </div>

                <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
                  {skillsFront.length > 0 &&
                    skillsFront.map((sk) => (
                      <CardSkills
                        key={sk.skillName}
                        image={sk.image}
                        skillName={sk.skillName}
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
              <div className="relative z-10">
                <div className="flex gap-4 items-center mb-5">
                  <div className="relative">
                    <span className="relative w-10 h-10 flex justify-center items-center border border-yellow-600/30 rounded-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm transition-transform duration-300">
                      <RiTableFill className="text-yellow-600 text-lg" />
                    </span>
                  </div>

                  <h4 className="font-medium text-white">Back-End</h4>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                  {skillsBack.length > 0 &&
                    skillsBack.map((sk) => (
                      <CardSkills
                        key={sk.skillName}
                        image={sk.image}
                        skillName={sk.skillName}
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
              <div className="relative z-10">
                <div className="flex gap-4 items-center mb-5">
                  <div className="relative">
                    <span className="relative w-10 h-10 flex justify-center items-center border border-yellow-600/30 rounded-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm transition-transform duration-300">
                      <RiTableFill className="text-yellow-600 text-lg" />
                    </span>
                  </div>

                  <h4 className="font-medium text-white">Outros</h4>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                  {skillsOthers.length > 0 &&
                    skillsOthers.map((sk) => (
                      <CardSkills
                        key={sk.skillName}
                        image={sk.image}
                        skillName={sk.skillName}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- EXPERIENCIAS PROFISSIONAIS ----- */}

      <section
        id="experiencias"
        className="max-w-7xl mx-auto md:py-16 py-8 px-4"
      >
        <Title title="Experiências Profissionais" />

        <div className="flex max-md:flex-col md:gap-16 gap-8 mt-10">
          {/* LATERAL */}
          <div className="lg:min-w-64 flex flex-col gap-2 border-l border-white/20 relative">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className={`
                  relative text-left px-4 py-2 transition cursor-pointer
                  ${selectedExperience === index ? "text-yellow-600" : "text-white/80"}
                `}
              >
                {selectedExperience === index && (
                  <span className="absolute left-0 top-0 h-full w-[2px] bg-yellow-600" />
                )}

                {exp.company}
              </button>
            ))}
          </div>

          {/* CONTEÚDO */}
          <div className="w-full rounded-lg ">
            <div className="flex items-center gap-3">
              <h4 className="text-2xl font-semibold">
                {experiences[selectedExperience].role}
              </h4>

              <span className="text-sm px-2 py-1 rounded-full bg-yellow-600/20 text-yellow-500">
                {experiences[selectedExperience].contractType}
              </span>
            </div>

            <span className="text- text-white/60 block mt-1">
              {experiences[selectedExperience].company} •{" "}
              {experiences[selectedExperience].duration}
            </span>

            <p className="mt-4 text-white/85 leading-relaxed">
              {experiences[selectedExperience].description}
            </p>
          </div>
        </div>
      </section>

      <section id="projetos" className="max-w-7xl mx-auto py-16">
        <Title title="Projetos" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              linkRepository={project.linkRepository}
              linkDeploy={project.linkDeploy}
            />
          ))}
        </div>
      </section>

      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
        <a
          href="https://www.linkedin.com/in/sofia-passos-51265b259/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-white/10 text-yellow-600 hover:border-yellow-600/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a
          href="https://github.com/sofiaparreira"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-white/10 text-yellow-600 hover:border-yellow-600/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
