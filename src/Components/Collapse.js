import { useState } from "react";
import fleche from '../Images/Vector.svg';

function Collapse({title, children}){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
    setIsOpen(!isOpen);
    };

    return(
        <div className="collapse">
            <div className="collapse-button" onClick={toggleCollapsible}>
                <span className="collapse-title">
                    {title} 
                </span>
                <span className="collapse-arrow">
                    <img src={fleche} className={isOpen ? 'down' : 'up' } alt="Flèche"/>
                </span>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <div className="collapse-text">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapse;