import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Back(){
    return(
        <div className="absolute top-28 left-12 z-50">
        <Link to="/projects" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group">
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-medium">Retour</span>
        </Link>
      </div>
    );
}

export default Back;