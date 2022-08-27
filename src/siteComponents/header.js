function Header() {
    return (
        //was header
        <section className="section sec1 header active" id="home">
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src="./img/churchPic.jpg" alt="Profile" />
                    </div>
                    
                    
                </div>
                <div className="right-header">
                    <h1 className="name">
                    Hi, I'm <span>Derek Mulhausen.</span>A Software Developer
                    </h1>
                    <p>
                    I am a full stack developer.  I have done everything from the SQL queries to presenting the data to the end user and everything in between.  From 2018 to now, my stack has been MS SQL, Node, Express, Javascript, and jQuery.  I have been focused on refactoring an off the shelf ERP to work better for the end users within my organization.
                    </p>
                    <div className="btn-con">
                        <a href="" className="main-btn">
                            <span className="btn-text">Download Resume</span>
                            <span className="btn-icon">
                                <i className="fas fa-download"></i>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
        //was header
    );
}
export default Header;
  