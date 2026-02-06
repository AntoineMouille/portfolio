import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 
                    bg-gray-900/60 backdrop-blur-md 
                    border-b border-white/10 shadow-lg transition-all duration-300"> 
      <div className="container mx-auto flex justify-between items-center text-white">
        
        {/* Logo / Nom en dégradé */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Antoine.dev
          </span>
        </Link>

        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
            Accueil
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition-colors duration-300">
            Projets
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">
            A propos
          </Link>
          <Link to="/CV" className="hover:text-blue-400 transition-colors duration-300">
            CV
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Menu Mobile (Version simple si écran petit) */}
        <div className="md:hidden flex space-x-4 text-sm">
          <Link to="/about" className='hover:text-blue-400'>A Propos</Link>
           <Link to="/projects" className="hover:text-blue-400">Projets</Link>
           <Link to="/contact" className="hover:text-blue-400 font-bold">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;