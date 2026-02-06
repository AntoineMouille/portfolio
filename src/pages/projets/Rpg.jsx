import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faJs , faCss3Alt, faReact, faGithub} from '@fortawesome/free-brands-svg-icons';
import {  SiTailwindcss, SiVite } from "react-icons/si";
import IconLogo from '../../components/IconLogo';
import { Link } from 'react-router-dom';









function Rpg(){
    const icons = [
    { name: "JavaScript", link: faJs },    
    { name: "CSS" , link: faCss3Alt},
    { name: "React", link: faReact},
    { name: "Github", link: faGithub},
    
    ];
    return (
        <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24 pb-12">
    
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="absolute top-28 left-12 z-50">
        <Link to="/projects" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group">
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-medium">Retour</span>
        </Link>
      </div>
        <div className="p-8 max-w-3xl w-full text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            BÉTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">RPG</span> 
          </h1>
          
        </div>
        <div className="w-full max-w-4xl bg-gray-800/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-8 text-gray-300 uppercase tracking-widest">Langages & Outils utilisés</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10">
            {icons.map((icon, index) => (
                <IconLogo key={index} name={icon.name} link={icon.link} />
            ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-blue-400/30 transition-all">
                    <div className="flex items-center justify-center gap-2">
                    <SiTailwindcss className="text-white text-xl" />
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tailwind</span>
                    </div>
                </div>

                <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-purple-400/30 transition-all">
                    <div className="flex items-center justify-center gap-2">
                    <SiVite className="text-white text-xl" />
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Vite</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-4xl bg-gray-800/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col items-center mt-3">
            <h2 className="text-xl font-semibold mb-8 text-gray-300 uppercase tracking-widest">Aperçu et page github</h2>
            <span>Pas besoin d'aperçu il est deja sur votre écran ;)</span>
            
            <button className='cursor-pointer mt-6'><a href='https://github.com/AntoineMouille/portfolio'><IconLogo name="Github" link={faGithub}/></a></button>

        </div>
        
          
        <div>
            
        </div>
 
      </div>     
    </div>
    )
}

export default Rpg;