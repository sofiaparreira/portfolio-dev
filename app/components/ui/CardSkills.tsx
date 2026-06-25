import Image from "next/image";
import React from "react";

interface CardSkillsProps {
  image: string;
  skillName: string;
}

const CardSkills:React.FC<CardSkillsProps> = ({ image, skillName }) => {
  return (
 <div className="group relative px-4 py-2 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-yellow-600/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={`${skillName} logo`}
          className="w-8 h-8 object-contain rounded-lg"
        />
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skillName}</span>
      </div>
      
      {/* Efeito de brilho ao hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/5 to-transparent"></div>
      </div>
    </div>
  );
};


export default CardSkills;
