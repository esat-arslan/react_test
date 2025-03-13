import { useState } from "react";

function Accordion( {title, value, children}){
    const [isActive, setActive] = useState(false);
    return(
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" 
                onClick={() => setActive(!isActive)}>
                    <div className="accordion-title-content">{title}</div>
            </div>
            </div>
            </div>
    )
}
export default Accordion