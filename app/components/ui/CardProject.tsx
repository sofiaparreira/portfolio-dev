import React from 'react';
import { BtnSecondary } from './BtnSecondary';
import { BtnPrimary } from './BtnPrimary';

interface CardProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  linkRepository?: string;
  linkDeploy?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  linkRepository,
  linkDeploy
}) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-white/[0.14] transition-all duration-300 group w-full flex flex-col">
      
      {/* IMAGEM */}
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
      </div>

      {/* CONTEÚDO */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* TECNOLOGIAS */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-yellow-600/70 text-xs font-medium bg-yellow-600/[0.07] border border-yellow-600/15 rounded-full px-2.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        {(linkRepository || linkDeploy) && (
          <div className="flex gap-2 pt-4 border-t border-white/[0.06]">
            {linkRepository && (
              <BtnSecondary href={linkRepository} text='Repositório' className='w-full'/>
            )}
            {linkDeploy && (
              <BtnPrimary href={linkDeploy} text='Ver Site' className='w-full'/>
            )}
           
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProject;