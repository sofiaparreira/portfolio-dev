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
      contractType: "Freelancer",
      duration: "Jan 2025 - Jun 2026 (1 ano e 6 meses)",
      description:
        "Desenvolvimento de sistema web para imobiliária utilizando Next.js, TypeScript e Tailwind CSS, com integração a APIs REST e versionamento via Git. Implementação de funcionalidades CRUD para empreendimentos e imóveis, com sessões diferenciadas para clientes, incorporadoras e administradores. Desenvolvimento de filtros avançados para pesquisa de imóveis com ranking, solicitação e fluxo completo de análise de crédito e financiamento imobiliário. Construção de dashboards interativos com estatísticas de imóveis, empreendimentos e leads de usuários, gerenciamento de planos e pagamentos, gerenciamento de usuários, responsividade do site completo, entre outros. Responsável também por parte do web design do sistema.",
    },
    {
      company: "WorkGeo",
      role: "Desenvolvedora Full Stack",
      contractType: "Estágio",
      duration: "Jun 2024 - Mar 2025 (10 meses)",
      description:
        "Desenvolvimento do site institucional da empresa, criação de soluções de software para otimização de processos internos da empresa, desenvolvimento de uma agenda web para gestão de atividades e eventos da empresa.",
    },
    {
      company: "Info Brasil Express",
      role: "Técnica de TI",
      contractType: "Estágio",
      duration: "Jan 2024 - Jun 2024 (6 meses)",
      description:
        "Técnica de suporte em TI, responsável pela manutenção de computadores, instalação e configuração de softwares, atendimento ao cliente, suporte remoto e vendas.",
    },
  ];

  const exp = experiences[selectedExperience];

  return (
    <section
      id="experiencias"
      className="max-w-7xl mx-auto md:py-16 py-8 px-4"
    >
        <Title title="Experiências Profissionais" />

      <div className="flex max-md:flex-col md:gap-12 gap-8">

        {/* LATERAL */}
        <div className="lg:min-w-56 flex flex-col relative">
          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />

          {experiences.map((item, index) => {
            const isActive = selectedExperience === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className={`
                  relative text-left px-5 py-3 transition-all duration-200 cursor-pointer rounded-r-lg group
                  ${isActive
                    ? "text-yellow-500 bg-yellow-600/[0.06]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-[2px] bg-yellow-500 rounded-r-full" />
                )}
                <span className="block text-sm font-medium">{item.company}</span>
                <span className={`block text-xs mt-0.5 transition-colors duration-200 ${isActive ? "text-yellow-600/60" : "text-white/30 group-hover:text-white/40"}`}>
                  {item.contractType}
                </span>
              </button>
            );
          })}
        </div>

        {/* CONTEÚDO */}
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
            <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-600/15 border border-yellow-600/20 text-yellow-500 font-medium">
              {exp.contractType}
            </span>
          </div>

          <span className="text-sm text-white/60 block mb-5">
            {exp.duration}
          </span>

          <div className="h-px w-full bg-white/[0.06] mb-5" />

          <p className="text-white/80 leading-relaxed">
            {exp.description}
          </p>
        </div>

      </div>
    </section>
  );
};