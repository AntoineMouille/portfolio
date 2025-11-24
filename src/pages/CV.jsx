function CV() {
  return (
    <div className="text-white min-h-screen bg-gray-900 flex flex-col items-center pt-20 px-4">
      {/* Titre */}
      <div className="p-8 max-w-3xl w-full text-center 
                      bg-gray-500/30 backdrop-blur-lg 
                      border border-white/20 rounded-2xl shadow-2xl mb-10">
        <h1 className="text-5xl font-extrabold">Mon CV</h1>
      </div>

      {/* PDF affiché */}
      <div className="w-full max-w-5xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden mb-8">
        <img src="./CV_Antoine_Mouille.png" alt="" />
      </div>

      {/* Lien de téléchargement */}
      <div className="text-center mb-10">
        <a
          href="./CV_Antoine_Mouille.pdf"
          download
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Télécharger le PDF
        </a>
      </div>
    </div>
  );
}

export default CV;
