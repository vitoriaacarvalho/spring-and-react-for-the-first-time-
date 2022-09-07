import icon from '../../assets/Vector.svg';
import './styles.css';

function NotificationButton(){
    return(
        <div className="dsmeta-red-btn">
            <img src={icon} alt="notificar" />
        </div>
    );
}

export default NotificationButton