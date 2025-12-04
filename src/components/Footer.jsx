function Footer() {
  return (
    <footer className="relative z-10 mt-auto py-8 
                       bg-gray-900/80 backdrop-blur-md 
                       border-t border-white/10"> 
      <div className="container mx-auto px-4 text-center">
        
        {/* Texte principal */}
        <p className="text-gray-400 mb-4 cursor-default">
          Conçu et développé avec <span className="text-red-500 animate-pulse">❤️</span> et <span className="text-blue-400 font-bold">React</span> par Antoine.
        </p>

        {/* Liens Sociaux (Icones ou Texte) */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/AntoineMouille" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/antoine-mouille" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 cursor-default">
          &copy; {new Date().getFullYear()} Antoine Mouille. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}

export default Footer;