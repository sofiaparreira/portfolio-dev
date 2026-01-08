import React from 'react';

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
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-yellow-600/30 transition-all duration-300 group w-full">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-56 object-cover object-top"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-white/80 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="  text-yellow-500 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {(linkRepository || linkDeploy) && (
          <div className="flex gap-3 mt-4">
            {linkRepository && (
              <a
                href={linkRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-600/10 border border-yellow-600/30 text-yellow-500 rounded-full px-4 py-2 text-xs font-medium hover:bg-yellow-600/20 transition-colors text-center"
              >
                Repositório
              </a>
            )}
            {linkDeploy && (
              <a
                href={linkDeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-600 text-white rounded-full px-4 py-2 text-xs font-medium hover:bg-yellow-700 transition-colors text-center"
              >
                Ver Site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};





export default CardProject;
