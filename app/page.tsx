
"use client";
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { RiTableFill } from 'react-icons/ri';
import { HiOutlineDownload } from 'react-icons/hi';
import { AiFillCode } from 'react-icons/ai';
import { SlMouse } from 'react-icons/sl';
import Title from './components/Title';
import CardSkills from './components/CardSkills';
import { useState } from 'react';
import CardProject from './components/CardProject';
interface Trail {
  x: string;
  y: string;
  opacity: number;
  timestamp: number;
}

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let trails: Trail[] = [];
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);

      // Adiciona novo rastro
      trails.push({
        x: `${x}%`,
        y: `${y}%`,
        opacity: 0.03,
        timestamp: Date.now()
      });

      // Limita o número de rastros
      if (trails.length > 20) {
        trails.shift();
      }
    };

    const updateTrails = () => {
      const now = Date.now();

      // Atualiza opacidade dos rastros
      trails = trails.filter(trail => {
        const age = now - trail.timestamp;
        if (age > 800) return false; // Remove após 800ms

        trail.opacity = 0.03 * (1 - age / 800);
        return true;
      });

      // Aplica os rastros como gradientes múltiplos
      if (trails.length > 0) {
        const gradients = trails.map(trail =>
          `radial-gradient(10px circle at ${trail.x} ${trail.y}, rgba(250, 204, 21, ${trail.opacity}), transparent 30%)`
        ).join(', ');

        section.style.setProperty('--trail-gradients', gradients);
      }

      animationFrameId = requestAnimationFrame(updateTrails);
    };

    section.addEventListener('mousemove', handleMouseMove);
    updateTrails();

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);



  const skillsFront = [
    { image: '/skills/next.svg', skillName: 'Next JS' },
    { image: '/skills/react.svg', skillName: 'React JS' },
    { image: '/skills/vite.svg', skillName: 'Vite' },
    { image: '/skills/angular.svg', skillName: 'Angular' },


    { image: '/skills/typescript.svg', skillName: 'TypeScript' },
    { image: '/skills/javascript.svg', skillName: 'JavaScript' },
    { image: '/skills/html.svg', skillName: 'HTML5' },
    { image: '/skills/css.svg', skillName: 'CSS3' },
    { image: '/skills/tailwind.svg', skillName: 'Tailwind CSS' },

  ]

  const skillsBack = [
    { image: '/skills/typescript.svg', skillName: 'TypeScript' },
    { image: '/skills/javascript.svg', skillName: 'JavaScript' },
    { image: '/skills/node.svg', skillName: 'Node JS' },
  ]

  const skillsOthers = [
    { image: '/skills/oracle.svg', skillName: 'Oracle' },
    { image: '/skills/next.svg', skillName: 'Next JS' },

  ]

  const [selectedExperience, setSelectedExperience] = useState(0);
const experiences = [
  {
    company: 'Meu Apê Certo',
    role: 'Desenvolvedora Front-End',
    contractType: 'Contrato de Projeto',
    duration: 'Jan 2025 - o momento',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt numquam?',
  },
  {
    company: 'Simetria Brasil (Aquarium Tech)',
    role: 'Desenvolvedora Front-End',
    contractType: 'CLT',
    duration: 'Novembro 2025 - Janeiro 2026',
    description:
      'Reiciendis laboriosam suscipit, facilis accusantium maiores sed unde illo.',
  },
  {
    company: 'WorkGeo',
    role: 'Desenvolvedora Front-End',
    contractType: 'Estágio',
    duration: 'Jun 2024 - Mar 2025',
    description:
      'Reiciendis laboriosam suscipit, facilis accusantium maiores sed unde illo.',
  },
  {
    company: 'Info Brasil Express',
    role: 'Técnica de TI',
    contractType: 'Estágio',
    duration: 'Jan 2024 - Jun 2024',
    description:
      'Reiciendis laboriosam suscipit, facilis accusantium maiores sed unde illo.',
  },
];


  const projects = [
    {
      title: "Sistema para Imobiliária",
      description: "Fui responsável pelo front-end e parte do web design de um sistema para imobiliária, com dashboards e funcionalidades para administradores, incorporadoras e clientes.",
      imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      technologies: ["Next JS", "TypeScript", "Tailwind"],
      linkRepository: "https://github.com/example/imobiliaria",
      linkDeploy: "https://imobiliaria-demo.vercel.app"
    },
    {
      title: "Logística de Drones",
      description: "Sistema de gerenciamento de entregas utilizando drones, com rastreamento em tempo real, otimização de rotas, simulação de bateria, entre outras funcionalidades. Fui responsável pelo front-end, back-end, design e banco de dados.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      technologies: ["React", "Tailwind", "TypeScript", "Node JS"],
      linkRepository: "https://github.com/example/drones"
    },
    {
      title: "Kanban",
      description: "Fiz um sistema de gerenciamento de tarefas no estilo Kanban.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      linkDeploy: "https://kanban-demo.netlify.app"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with forecasts and alerts.",
      imageSrc: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
      technologies: ["TypeScript", "React", "Chart.js", "API"]
    }
  ];
  return (
    <main className="">
      <Navbar />

      <section
        ref={sectionRef}
        className="relative overflow-hidden h-screen flex flex-col items-center justify-center"
      >

        {/* Brilho principal */}
        <div
          style={{
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(750px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250, 204, 21, 0.2), transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 1,
            filter: 'blur(40px)'
          }}
        />

        <div className="container mx-auto md:grid grid-cols-2 items-center justify-center gap-16 px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <h1 className="text-4xl font-bold">Sofia Parreira Passos</h1>
            <h2 className="uppercase text-sm font-medium">Desenvolvedora Full Stack</h2>

            <p className="text-sm mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque atque sed repellendus?
              Provident ab facilis ut similique quos, enim adipisci eligendi dolor culpa? Impedit nulla fuga
              adipisci doloribus ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt
              numquam? Reiciendis laboriosam suscipit, facilis accusantium maiores sed unde illo assumenda
              labore totam ad quo provident quidem, quos minima numquam.
            </p>

            <div className="flex mt-8 gap-3">
              <button className="bg-yellow-600 text-white rounded-full px-8 py-2.5 text-sm font-medium
                hover:bg-yellow-700 transition-colors
                shadow-[0_0_40px_rgba(250,204,21,0.25)] cursor-pointer flex items-center gap-2">
                Currículo
                <HiOutlineDownload className='text-xl' />

              </button>
              <button className='border border-yellow-600/20 text-[#eebe39] bg-yellow-600/10 rounded-full px-8 py-2.5 text-sm font-medium flex gap-2 items-center'>Ver Projetos <AiFillCode className='text-xl' />
              </button>

            </div>
          </div>

          <Image src="/banner.svg" alt="Foto de Sofia Parreira Passos" width={400} height={400} className="rounded-lg mx-auto max-md:hidden" />
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-1 text-white/70">
          <SlMouse className="text-2xl" />
          <span className="w-1 h-2 rounded-full bg-white/60 animate-scroll-dot" />
        </div>

      </section>

      {/* --- HABILIDADES --- */}
      <section className="relative container mx-auto py-16 px-4">


        <div className="relative z-10">
          <Title title="Habilidades" />

          <div className="grid grid-cols-2 gap-8">

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



                <div className="grid grid-cols-5 gap-4">
                  {skillsFront.length > 0 && skillsFront.map((sk) => (
                    <CardSkills key={sk.skillName} image={sk.image} skillName={sk.skillName} />
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



                <div className="grid grid-cols-3 gap-4">
                  {skillsBack.length > 0 && skillsBack.map((sk) => (
                    <CardSkills key={sk.skillName} image={sk.image} skillName={sk.skillName} />
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

                <div className="grid grid-cols-3 gap-4">
                  {skillsOthers.length > 0 && skillsOthers.map((sk) => (
                    <CardSkills key={sk.skillName} image={sk.image} skillName={sk.skillName} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ----- EXPERIENCIAS PROFISSIONAIS ----- */}

<section className="container mx-auto py-16">
  <Title title="Experiências Profissionais" />

  <div className="flex gap-8 mt-10">
    {/* LATERAL */}
<div className="min-w-64 flex flex-col gap-2 border-l border-white/20 relative">
  {experiences.map((exp, index) => (
    <button
      key={index}
      onClick={() => setSelectedExperience(index)}
      className={`
        relative text-left px-4 py-2 text-sm transition cursor-pointer
        ${
          selectedExperience === index
            ? 'text-yellow-600'
            : 'text-white/80'
        }
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
    <div className="w-full rounded-lg p-6">
  <div className="flex items-center gap-3">
    <h4 className="text-xl font-semibold">
      {experiences[selectedExperience].role}
    </h4>

    <span className="text-xs px-2 py-1 rounded-full bg-yellow-600/20 text-yellow-500">
      {experiences[selectedExperience].contractType}
    </span>
  </div>

  <span className="text-sm text-white/60 block mt-1">
    {experiences[selectedExperience].company} •{' '}
    {experiences[selectedExperience].duration}
  </span>

  <p className="text-sm mt-4 text-white/80 leading-relaxed">
    {experiences[selectedExperience].description}
  </p>
</div>

  </div>
</section>

      <section className='container mx-auto py-16'>
        <Title title='Projetos' />
      </section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
    </main>
  );
}