import CardProject from "../ui/CardProject";
import Title from "../ui/Title";

export const Projects = () => {
  const projects = [
    {
      title: "Meu Apê Certo",
      description:
        "Sistema de imobiliária na qual fui responsável pelo front-end e parte do web design, com dashboards e funcionalidades para administradores, incorporadoras e clientes.",
      imageSrc: "/projects/meuape.png",
      technologies: ["Next JS", "TypeScript", "Tailwind", 'Figma'],
      linkDeploy: "https://app.meuapecerto.com.br",
    },
    {
      title: 'Sonoro Despertar',
      description: 'Desenvolvimento do website do projeto social Sonoro Despertar, voltado ao ensino de flauta para crianças em situação de vulnerabilidade social. Fui responsável pela criação da identidade visual e design da interface no Figma, além do desenvolvimento do front-end utilizando Next.js e TypeScript',
      imageSrc: 'projects/sonoro.png',
      technologies: ['Next JS', 'TypeScript', 'Tailwind', 'Figma'],
      linkDeploy: 'https://sonorodespertar.org.br',
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
      title: "Axyun Capital",
      description:
        "Site institucional para empresa de investimentos Axyun Capital. Projeto desenvolvido por mim utilizando HTML, CSS, JavaScript e Bootstrap.",
      imageSrc: "/projects/axyun.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      linkDeploy: "https://axyuncapital.com.br",
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
      title: "Fokus",
      description:
        "Aplicativo desenvolvido em um curso da Alura. O Fokus é um aplicativo de foco e produtividade com método pomodoro.",
      imageSrc: "/projects/fokus.png",
      technologies: ["React Native", "StyleSheet", "JavaScript", "Expo"],
      linkRepository: "https://github.com/sofiaparreira/app-fokus",
    },
  ];

  return (
    <section id="projetos" className="max-w-7xl mx-auto py-16">
      <Title title="Projetos" />

      <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
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
  );
};
