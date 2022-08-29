import {FaTelegramPlane} from 'react-icons/fa';
function ResumeDownload(){
    return(
        <div className="btn-con">
            <a href="./assets/docs/Derek Mulhausen Resume.docx" className="main-btn">
                <span className="btn-text">Download Resume</span>
                <span className="btn-icon">
                    <i><FaTelegramPlane /></i>
                </span>
            </a>
        </div>
    );
}
export default ResumeDownload;