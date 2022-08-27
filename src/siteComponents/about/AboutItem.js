function AboutItem(){
    return(
        <div className="about-item">
            <div className="about-text">
                <p className="large-text">{large}</p>
                <p className="small-text">{small1}<br />{small2}</p>
            </div>
        </div>
    )
}

export default AboutItem