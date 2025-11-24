import React, { useEffect, useState } from "react";

function ProgressBar({ name, value }) {
  const [progress, setProgress] = useState(0);

  // Animation au montage
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100); // petit délai pour l'animation
    return () => clearTimeout(timer);
  }, [value]);

  const isFull = progress>=100;

  return (
    <div className="mb-6 text-left">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{name}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
        <div
           className={`h-3 rounded-full transition-all duration-1000 ease-out ${
            isFull
              ? "bg-green-600" 
              : "bg-gradient-to-r from-blue-400 to-green-600" 
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
    <div className="text-white min-h-screen flex flex-col bg-gray-900 cursor-default">
      <div className="container flex flex-col mx-auto px-4 pt-20 pb-8  items-center justify-center">
        <div className="p-8 max-w-3xl w-full text-center 
                        bg-gray-500/30 backdrop-blur-lg 
                        border border-white/20 rounded-2xl shadow-2xl ">
          <h1 className="text-5xl font-extrabold mb-10 ">Mes Skills</h1>
          <p className="text-2xl font-bold mb-2 ">selon mon niveau d'études (BUT Informatique)</p>
          </div>
          <div className="bg-gray-500/30 max-w-82 w-full mt-6 p-4  text-center 
                      border border-white/20 rounded-lg shadow-lg text-xl">
        
            <div className="space-y-4">
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
