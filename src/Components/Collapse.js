import { useState } from "react";
import fleche from '../Images/Vector.svg';

function Collapse({title, children}){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
    setIsOpen(!isOpen);
    };

    return(
        <div className="collapsible">
            <div className="toggle-button">
                <span className="toggle-title">
                    {title} 
                </span>
                <span className="toggle-arrow" onClick={toggleCollapsible}>
                    <img src={fleche} className={isOpen ? 'down' : 'up' } alt="Flèche"/>
                </span>
            </div>
            <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Collapse;