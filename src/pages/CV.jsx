function CV() {
  return (
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24 pb-12 flex flex-col items-center">
      
      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Titre */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">
          Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">CV</span> 📄
        </h1>
        <p className="text-gray-400">Aperçu et téléchargement</p>
      </div>

      {/* Zone d'affichage du CV avec effet Glow */}
      <div className="relative z-10 w-full max-w-4xl px-4 mb-10 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
             {/* Vérifie bien que ton image est dans le dossier public */}
            <img src="./CV_Antoine_Mouille.png" alt="CV Antoine Mouille" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Bouton Téléchargement */}
      <div className="relative z-10">
        <a
          href="./CV_Antoine_Mouille.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
        >
          <span>📥</span> Télécharger le PDF
        </a>
      </div>
    </div>
  );
}

export default CV;