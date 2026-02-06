import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function IconLogo({ name , link }) {
    return (
    <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10  hover:border-purple-400/30 transition-all">
        <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon   icon={link} className='text-xl' />
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{name}</span>
        </div>
    </div>
        
    );
}
export default IconLogo;