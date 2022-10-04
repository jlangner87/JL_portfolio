import '../App.css'
import info from '../assets/info.png'
import skills from '../assets/skills.png'
import briefcase from '../assets/briefcase.png'
import care from '../assets/care.png'
import contact from '../assets/chat.png'
import top from "../assets/up.png"

const Nav = () => {
  return (
    <div className="nav">
      <div className="sidenav_bar">
        <a href="#anchor_about">&#160; <img className="nav_icon" src={info}/> &#160; About</a>
        <a href="#anchor_projects">&#160;<img className="nav_icon" src={briefcase}/> &#160;Projects</a>
        <a href="#anchor_skills">&#160;<img className="nav_icon" src={skills}/> &#160;Skills</a>
        <a href="#anchor_octopus">&#160;<img className="nav_icon" src={care}/> &#160;Values</a>
        <a href="#anchor_contact">&#160;<img className="nav_icon" src={contact}/> &#160;Connect</a>
        <a href="#anchor_top">&#160;<img className="nav_icon" src={top}/> &#160;Top</a>
      </div>  
    </div>
  )
}

export default Nav
