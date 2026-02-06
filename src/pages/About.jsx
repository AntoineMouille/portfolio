import React, { useEffect, useState } from "react";

function ProgressBar({ name, value }) {
  const [progress, setProgress] = useState(0);

  // Animation au montage
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  const isFull = progress >= 100;

  return (
    <div className="mb-6 group">
      <div className="flex justify-between mb-2 text-gray-300 font-medium">
        <span className="group-hover:text-blue-400 transition-colors">{name}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-900/50 rounded-full h-3 overflow-hidden border border-white/5">
        <div
           className={`h-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out ${
            isFull
              ? "bg-green-500" 
              : "bg-gradient-to-r from-blue-500 to-purple-500" 
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function About() {
  const skills = [
    { name: "Java", value: 100 },
    { name: "JavaFx", value: 100},
    { name: "JavaScript", value: 50 },
    { name: "SQL", value: 95},
    { name: "HTML", value: 100 },
    { name: "CSS", value: 100 },
    { name: "PHP", value: 90},
    { name: "React", value: 60 },
    { name: "Python", value: 80},
    { name: "C++", value: 60},
  ];

  return (
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24 pb-12">
      
      {/* BLOBS D'ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* Titre */}
        <div className="p-8 max-w-3xl w-full text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span> 🛠️
          </h1>
          <p className="text-gray-400 text-lg">
            Compétences acquises durant mon BUT Informatique
          </p>
        </div>

        {/* Liste des Skills */}
        <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 max-w-2xl w-full p-8 rounded-3xl shadow-2xl">
          <div className="space-y-2">
            {skills.map((skill) => (
              <ProgressBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>

        <div className="p-8 max-w-3xl w-full text-center mb-10 mt-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Parcours</span> 
          </h1>
          
        </div>
        <div className="flex justify-center pb-24 px-6 relative z-10 cursor-default">
        <div className="p-8 md:p-12 max-w-4xl w-full 
                        bg-gray-800/50 backdrop-blur-lg 
                        border border-white/10 rounded-3xl shadow-2xl">
          
          

          {/* Texte aéré avec emojis */}
          <div className="text-lg text-gray-300 space-y-8 text-justify leading-relaxed font-light">
            
            <p>
              Je suis ravi de vous présenter ma personnalité et mes compétences sur ce portfolio.
            </p>
            
            <p>
              Actuellement en 2ème année d'études d'Informatique à <a href="https://www.iut-lens.univ-artois.fr" className="text-blue-400 font-semibold hover:underline decoration-blue-400 underline-offset-4 transition-all">l'IUT de Lens</a> 🎓 et passionné par les jeux vidéo et les technologies. J'exprime ma personnalité à travers ce projet regroupant tout mon parcours depuis le lycée jusqu'à aujourd'hui.
            </p>
            
            <p>
              En effet, depuis tout petit je joue aux jeux vidéo. Plus tard, au collège, j'apprends <strong>Scratch</strong> et je commence à créer des mini-jeux comme le jeu du chat et de la souris ou Pong. Trouvant cela trop "facile", j'apprends au lycée qu'il existe une spécialité <strong>NSI</strong> (Numérique et Sciences Informatiques).
            </p>
            
            <p>
              Dans cette spécialité, j'ai appris le <strong>Python</strong>, l'HTML et le CSS. Bien sûr, je continue à créer des mini-jeux tels que la bataille navale et le morpion, mais je n'ai pas fait que des jeux. J'ai aussi créé un mini site web statique, appris à coder proprement et utilisé plusieurs librairies Python telles que <strong>Matplotlib</strong>.
            </p>
            
            <p>
              À cause de Parcoursup, j'ai dû laisser la spécialité NSI en première pour continuer Mathématiques et Physique-Chimie afin d'ouvrir plus de portes. J'ai postulé à différentes formations, mais celle que j'espérais avoir est le <strong>BUT Informatique</strong>, dans lequel je suis actuellement. Grâce à cette formation, j'apprends beaucoup plus de langages, de méthodes de travail et je découvre mon futur possible en informatique.
            </p>
            
            <div className="pt-4 border-t border-white/10">
              <p>
                J'ai d'autres qualifications en dehors de l'informatique, telles que le <strong>BAFA</strong> que j'ai obtenu en 2024. Suite à diverses expériences professionnelles en tant qu'animateur, j'ai géré des groupes de 10 à 17 ans. Également, j'ai participé au SNU et je suis devenu bénévole à la <strong>Croix-Rouge de Mazingarbe</strong> , où je triais des habits pour les personnes dans le besoin.
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
    </div>
  );
}

export default About;