function Contact() {
  return (
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24">
      
      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-4 flex flex-col items-center">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">
            Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Contacter</span> 📬
          </h1>
          <p className="text-gray-400 text-lg">
            Une idée de projet ou une proposition ? N'hésitez pas !
          </p>
        </div>

        {/* Grille de Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4 pb-20">
          
          {/* Carte Email Perso */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-gray-700/50 transition duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">Email Personnel</h3>
            <p className="text-gray-300 break-all">antoine.mouille62750@gmail.com</p>
          </div>

          {/* Carte Email Universitaire */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-gray-700/50 transition duration-300">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">Email Universitaire</h3>
            <p className="text-gray-300 break-all">antoine_mouille@ens.univ-artois.fr</p>
          </div>

          {/* Carte Téléphone */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-gray-700/50 transition duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-green-300 mb-2">Téléphone</h3>
            <p className="text-gray-300">+33 7 49 49 22 81</p>
          </div>

          {/* Carte Réseaux (GitHub / LinkedIn) */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center flex flex-col justify-center gap-4">
            <a href="https://github.com/AntoineMouille" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-700 transition border border-white/10">
              <span>🐙</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/antoine-mouille" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition shadow-lg">
              <span>💼</span> LinkedIn
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;