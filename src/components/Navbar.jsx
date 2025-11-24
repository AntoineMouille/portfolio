import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 
                    bg-gray-900/30 backdrop-blur-lg 
                    border-b border-white/20 shadow-xl"> 
      <div className="flex justify-between items-center max-w-7xl mx-auto text-white">
        <Link to="/" className="text-xl font-bold">Mon Portfolio</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Accueil</Link>
          <Link to="/CV" className="hover:text-gray-300">Mon CV</Link>
          <Link to="/projects" className="hover:text-gray-300">Projets</Link>
          <Link to="/about" className="hover:text-gray-300">Mes Skills</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;