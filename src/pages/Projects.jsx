import { Link } from "react-router-dom";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// HashRouter n'est pas utilisé ici, je l'ai retiré pour nettoyer, 
// mais tu peux le remettre si tu l'utilises ailleurs.

function Projects() {
  const myProjects = [
    {
      title: "Portfolio",
      desc: "Création de ce portfolio moderne utilisant React, Tailwind CSS et des animations fluides.",
      tech: ["React", "Tailwind", "Vite"],
      status: "En cours",
      link: "/projects/portfolio"
    },
    {
      title: "Pacman",
      desc: "Création d'un pacman avec Java est JavaFX.",
      tech: ["Java","JavaFx"],
      status: "En cours",
      link: "/projects/pacman"
    }
  ];

  return (
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24">
      
      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 pb-12">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projets</span> 🚀
          </h1>
          <p className="text-gray-400">Découvrez mes réalisations académiques et personnelles.</p>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((proj, index) => (
            <div key={index} className="group relative flex flex-col bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
              
              {/* Statut (badge) */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${proj.status === "Terminé" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>
                  {proj.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {proj.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {proj.desc}
              </p>

              {/* Tags Techno + Bouton Details */}
              {/* Ajout de 'items-center' pour l'alignement vertical */}
              <div className="flex flex-wrap items-center gap-2 mt-auto w-full">
                
                {proj.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-gray-700/50 border border-white/5 rounded-lg text-gray-300">
                    {t}
                  </span>
                ))}
                
                {/* MODIFICATION ICI : ml-auto pousse l'élément à droite */}
                <div className="group ml-auto px-4 py-1 text-sm bg-blue-800/40 backdrop-blur-md border border-white/10 rounded-xl  shadow-xl hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer hover:bg-blue-700/50">
                  <Link to={proj.link} className="flex items-center gap-2">
                    <span>details</span>
                    <span className="transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </Link>
                </div>
              
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;