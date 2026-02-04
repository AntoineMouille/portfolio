import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faJs , faCss3Alt, faReact, faGithub} from '@fortawesome/free-brands-svg-icons';
import {  SiTailwindcss, SiVite } from "react-icons/si";
import IconLogo from '../../components/IconLogo';
import { Link } from 'react-router-dom';









function Portfolio(){
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
        <div>
          <Link to="/projects" >
            <FontAwesomeIcon icon={faArrowLeft} /> <span>retour</span>
          </Link>
          
        </div>
        <div className="p-8 max-w-3xl w-full text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfolio</span> 
          </h1>
          
        </div>
        {icons.map((icon, index)=> (
          
          <IconLogo key={index} name={icon.name} link={icon.link}/>
           
        )) }
        <div classname="">
          <SiTailwindcss className="text-[#ffffff]" />
          <span>Tailwind</span>
          <SiVite className='text-[#ffffff]'/>
          <span>Vite</span>
        </div>
        
          
        <div>
            
        </div>
 
      </div>     
    </div>
    )
}

export default Portfolio;