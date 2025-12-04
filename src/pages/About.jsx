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
    { name: "Java", value: 90 },
    { name: "JavaFx", value: 80},
    { name: "JavaScript", value: 30 },
    { name: "SQL", value: 75},
    { name: "HTML", value: 70 },
    { name: "CSS", value: 80 },
    { name: "PHP", value: 60},
    { name: "React", value: 40 },
    { name: "Python", value: 70},
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
      </div>     
    </div>
  );
}

export default About;