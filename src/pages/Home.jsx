import { Link } from "react-router-dom";

function Home() {
  const cards = [
    { title: "Projets", text: "Découvrez mes projets récents et mes réalisations.", link: "/projects" },
    { title: "Mes Skills", text: "En savoir plus sur mes compétences techniques.", link: "/about" },
    { title: "Contact", text: "Contactez-moi via email ou LinkedIn pour collaborer.", link: "/contact" },
    { title: "Mon CV", text: "Téléchargez mon Curriculum Vitae au format PDF.", link: "/CV"},
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

      {/* --- SECTION 3 : PRÉSENTATION DÉTAILLÉE --- */}
      <div className="flex justify-center pb-24 px-6 relative z-10 cursor-default">
        <div className="p-8 md:p-12 max-w-4xl w-full 
                        bg-gray-800/50 backdrop-blur-lg 
                        border border-white/10 rounded-3xl shadow-2xl">
          
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Mon Parcours</h2>

          {/* Texte aéré avec emojis */}
          <div className="text-lg text-gray-300 space-y-8 text-justify leading-relaxed font-light">
            
            <p>
              Je suis ravi de vous présenter ma personnalité et mes compétences sur ce portfolio 👋.
            </p>
            
            <p>
              Actuellement en 2ème année d'études d'Informatique à <a href="https://www.iut-lens.univ-artois.fr" className="text-blue-400 font-semibold hover:underline decoration-blue-400 underline-offset-4 transition-all">l'IUT de Lens</a> 🎓 et passionné par les jeux vidéo et les technologies 💻. J'exprime ma personnalité à travers ce projet regroupant tout mon parcours depuis le lycée jusqu'à aujourd'hui.
            </p>
            
            <p>
              En effet, depuis tout petit je joue aux jeux vidéo 🕹️. Plus tard, au collège, j'apprends <strong>Scratch</strong> et je commence à créer des mini-jeux comme le jeu du chat et de la souris ou Pong. Trouvant cela trop "facile", j'apprends au lycée qu'il existe une spécialité <strong>NSI</strong> (Numérique et Sciences Informatiques).
            </p>
            
            <p>
              Dans cette spécialité, j'ai appris le <strong>Python 🐍</strong>, l'HTML et le CSS. Bien sûr, je continue à créer des mini-jeux tels que la bataille navale et le morpion, mais je n'ai pas fait que des jeux. J'ai aussi créé un mini site web statique, appris à coder proprement et utilisé plusieurs librairies Python telles que Matplotlib 📊.
            </p>
            
            <p>
              À cause de Parcoursup, j'ai dû laisser la spécialité NSI en première pour continuer Mathématiques et Physique-Chimie afin d'ouvrir plus de portes. J'ai postulé à différentes formations, mais celle que j'espérais avoir est le <strong>BUT Informatique</strong>, dans lequel je suis actuellement. Grâce à cette formation, j'apprends beaucoup plus de langages, de méthodes de travail et je découvre mon futur possible en informatique.
            </p>
            
            <div className="pt-4 border-t border-white/10">
              <p>
                J'ai d'autres qualifications en dehors de l'informatique, telles que le <strong>BAFA</strong> que j'ai obtenu en 2024 ⛺. Suite à diverses expériences professionnelles en tant qu'animateur, j'ai géré des groupes de 10 à 17 ans. Également, j'ai participé au SNU et je suis devenu bénévole à la <strong>Croix-Rouge de Mazingarbe</strong> ⛑️, où je triais des habits pour les personnes dans le besoin.
              </p>
            </div>
            <div className=" flex justify-center">
              <p>
                Bonne Visite
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;