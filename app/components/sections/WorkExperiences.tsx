"use client";
import { useState } from "react";
import Title from "../ui/Title";

export const WorkExperiences = () => {
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

  return (
    <section id="experiencias" className="max-w-7xl mx-auto md:py-16 py-8 px-4">
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
  );
};
