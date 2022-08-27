import AboutItem from "./about/AboutItem";
import ProgressBars from "./about/ProgressBars";
function About(){
    return(
        <section className="section sec2 about" id="about">
            <div className="main-title">
                <h2>
                    About <span>me</span><span className="bg-text">my stats</span>
                </h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About Me</h4>
                    <p>
                    Derek Mulhausen has more than 20 years of experience using technology to analyze data over multiple platforms.  Most recently, he has worked heavily in Node.js and Express.js, and SQL as a full stack developer.  He has worked closely with stakeholders to develop applications that save time and decrease errors.  He has exposure to multiple data analytics tools including PowerBI, Tableau, Crystal Reports, and SQL.  Having earned a Master of Science in Data Analytics, he has created multiple projects using various data principles including data modeling, data mining, visualization, and predictive modeling. He has organizational management education and has applied this knowledge to serve on a team to change the culture to improve innovation in an international organization.
                    </p> 
                    <ResumeDownload />
                </div>
            </div>
            <div className="right-about">
                
            </div>
        </section>
    )
}

export default About