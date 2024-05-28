import { useState } from "react";

function Scroll({title,text}){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
    setIsOpen(!isOpen);
    };

    return(
        <div className="collapsible">
            <button className="toggle-button" onClick={toggleCollapsible}>
            {title} <span className={isOpen ? 'arrow up' : 'arrow down'}></span>
            </button>
        {isOpen && <div className="content">{text}</div>}
    </div>
    )
}

export default Scroll;