import React from "react";
const AboutItem=({lg, sm1, sm2})=>{
    return(
        <div className="about-item">
            <div className="about-text">
                <p className="large-text">{lg}</p>
                <p className="small-text">{sm1}<br />{sm2}</p>
            </div>
        </div>
    )
}

export default AboutItem