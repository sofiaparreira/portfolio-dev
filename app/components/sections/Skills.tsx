'use client'
import { RiServerFill, RiTableFill, RiToolsFill } from "react-icons/ri";
import CardSkills from "../ui/CardSkills";
import Title from "../ui/Title";

export const Skills = () => {

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

    const categoryConfig = [
        {
            label: "Front-End",
            icon: <RiTableFill className="text-yellow-600 text-lg" />,
            skills: skillsFront,
            cols: "lg:grid-cols-5 md:grid-cols-4 grid-cols-3",
            span: "col-span-2",
        },
        {
            label: "Back-End",
            icon: <RiServerFill className="text-yellow-600 text-lg" />,
            skills: skillsBack,
            cols: "lg:grid-cols-3 grid-cols-2",
            span: "col-span-1",
        },
        {
            label: "Outros",
            icon: <RiToolsFill className="text-yellow-600 text-lg" />,
            skills: skillsOthers,
            cols: "lg:grid-cols-3 grid-cols-2",
            span: "col-span-1",
        },
    ];

    return (
        <section
            id="habilidades"
            className="relative max-w-7xl mx-auto md:py-16 py-8 px-4"
        >
            <div className="relative z-10">
                    <Title title="Habilidades" />

                <div className="md:grid grid-cols-2 max-md:flex max-md:flex-col gap-8">
                    {categoryConfig.map(({ label, icon, skills, cols, span }) => (
                        <div
                            key={label}
                            className={`${span} relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden transition-colors duration-200 hover:border-white/[0.14]`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(202,138,4,0.04)_0%,transparent_60%)] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex gap-3 items-center">
                                        <span className="w-9 h-9 flex justify-center items-center border border-yellow-600/25 rounded-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm">
                                            {icon}
                                        </span>
                                        <h4 className="font-medium text-white">{label}</h4>
                                    </div>

                                    <span className="text-xs text-yellow-600/60 bg-yellow-600/[0.08] border border-yellow-600/15 rounded-full px-2.5 py-0.5">
                                        {skills.length} tecnologia{skills.length !== 1 ? "s" : ""}
                                    </span>
                                </div>

                                <div className={`grid ${cols} gap-3`}>
                                    {skills.map((sk) => (
                                        <div
                                            key={sk.skillName}
                                            className="transition-all duration-150 hover:-translate-y-px"
                                        >
                                            <CardSkills
                                                image={sk.image}
                                                skillName={sk.skillName}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};