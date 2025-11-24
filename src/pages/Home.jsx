import { Link } from "react-router-dom";

function Home() {
  const cards = [
    { title: "Projets", text: "Découvrez mes projets récents et mes réalisations.", link: "/projects" },
    { title: "Mes skills", text: "En savoir plus sur mes compétences.", link: "/about" },
    { title: "Contact", text: "Contactez-moi via email ou LinkedIn pour collaborer.", link: "/contact" },
    { title:"Mon CV", text: "Voici mon CV ainsi que le lien de telechargement.", link: "/CV"},
  ];

  return (
    <div className="text-white min-h-screen bg-gray-900">
      
      <div className="container mx-auto px-4 pt-20 pb-8 flex items-center justify-center">
        <div className="p-8 max-w-3xl w-full text-center 
                        bg-gray-500/30 backdrop-blur-lg 
                        border border-white/20 rounded-2xl shadow-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenue sur mon Portfolio</h1>
          <p className="text-xl text-gray-200">Découvrez mes projets et compétences</p>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-wrap justify-center gap-8 pb-14">
        {cards.map((card) => (
          <Link key={card.title} to={card.link} className="relative w-40 h-40">
            <div className="relative w-full h-full bg-gray-500/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl
                           overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-500/50 group">
              
              {/* Titre visible */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300
                              group-hover:opacity-0">
                <p className="text-2xl font-semibold">{card.title}</p>
              </div>

              {/* Texte caché */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-md text-center
                              opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p>{card.text}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
