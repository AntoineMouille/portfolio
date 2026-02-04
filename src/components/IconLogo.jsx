import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function IconLogo({ name , link }) {
    return (
    <div>
        <FontAwesomeIcon   icon={link} />
        <span>{name}</span>
    </div>
        
    );
}
export default IconLogo;