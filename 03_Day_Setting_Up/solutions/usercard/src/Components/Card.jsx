// import { ReactComponent as Picture} from "../assets/profile-picture.svg"
import { ReactComponent as Picture} from '../assets/profile-picture.svg';

const skills = ["C#", "HTML", "CSS", "Javascript", "SQL", "GIT", "Mongo", "Gatsby", "Ruby", "C++", "Python", "Docker", "Rust",  "SQL", "GIT"]

function Card(){
    // console.log(Picture);
    
    return <section className="card-container">
      <div className="card">
        <Picture className="card-img" />
        <br />
        <br />
        <h4 className='card-author'>RASYA ARYASATYA R</h4>
        <img className='card-icon-verified' width="24" height="24" src="https://img.icons8.com/color/48/tiktok-verified-account.png" alt="tiktok-verified-account"/>
        <br /><br />
        <span className='card-job'>Senior Developer, Jakarta</span>
        <br /><br />
        <h4 className='card-author'>SKILLS</h4>
        <br /><br />
        <ul className='card-skills-container'>
          {
            skills.map((skill) => <li key={skill}>{skill}</li>)
          }
        </ul>
        <br /><br />
        <span className='card-time'>Joined on 11 November, 2024</span>
      </div>
    </section>
}

export default Card;