import { Link } from "react-router-dom";

function Home() {
  const cards = [
    { title: "Projets", text: "Découvrez mes projets récents et mes réalisations.", link: "/projects" },
    { title: "A propos", text: "En savoir plus sur mon parcours et mes compétences techniques.", link: "/about" },
    { title: "Contact", text: "Contactez-moi via email ou LinkedIn pour collaborer.", link: "/contact" },
    { title: "Mon CV", text: "Téléchargez mon CV au format PDF.", link: "/CV"},
  ];

  return (
  
    
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- DÉCORATION D'ARRIÈRE-PLAN (LES BLOBS) --- */}
      {/* Cercle bleu flou en haut à gauche */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      {/* Cercle violet flou en bas à droite */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      {/* --- SECTION 1 : HERO (Introduction) --- */}
      <div className="relative container mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Texte d'intro */}
        <div className="p-8 max-w-2xl w-full text-center lg:text-left
                        bg-gray-800/40 backdrop-blur-md 
                        border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Salut, moi c'est <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Antoine</span> !
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Étudiant en Informatique & Passionné de Tech 🚀
          </p>
          <p className="text-gray-400">
            Bienvenue sur mon portfolio. Découvrez mon univers, mes projets et mon parcours ci-dessous.
          </p>
        </div>

        {/* --- MODIFICATION ICI : AVEC ZOOM SUR L'IMAGE --- */}
        {/* J'ai retiré le 'hover:scale-105' sur ce conteneur extérieur pour éviter un double effet de zoom */}
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl z-10 shrink-0">
           {/* Ajout de 'group' ici pour contrôler l'image au survol de ce conteneur */}
           <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden group relative">
              {/* J'ai retiré le <span> inutile. Ajout des classes de transformation sur l'image */}
              <img 
                src="./Photo.png" 
                alt="Antoine" 
                className="w-full h-auto pl-4 opacity-90 group-hover:opacity-100 transform group-hover:scale-125 transition-all duration-500 ease-in-out object-cover" 
              />
           </div>
        </div>
      </div>

      {/* --- SECTION 2 : CARTES DE NAVIGATION --- */}
      <div className="relative container mx-auto px-6 pb-20">
        {/* Grid system : 1 colonne sur mobile, 2 sur tablette, 4 sur grand écran */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link key={card.title} to={card.link} className="group relative h-64 perspective">
              <div className="w-full h-full bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6
                              flex flex-col items-center justify-center text-center transition-all duration-300
                              group-hover:bg-gray-700/60 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                
                {/* Titre */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {card.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Home;