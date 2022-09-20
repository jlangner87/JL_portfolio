import purpleLogo from "../assets/purplelogo.png"
import dekker from "../assets/dekker.png"
import ty from '../assets/ty.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="credits">
        <h1 className="credits_text">Headshot courtesy of Dekker Photography </h1>
        <img className="footer_logo2" src={dekker}/><br/>
        <a href="https://www.dekkerphotos.com/contact/" className="credits_link">View her portfolio here</a>
      </div>
      <div className="credits">
        <h1 className="footer_text">This website was created by</h1>
        <img className="footer_logo" src={purpleLogo}/>
        <h1 className="copyright">©2022 Joshua Langner • All rights reserved. </h1>
      </div>
      <div className="credits">
        <h1 className="credits_text">Logo design by Ty Supply Co.</h1>
        <img className="footer_logo3" src={ty}/><br/>
        <a href="https://dribbble.com/tysupplyco" className="credits_link">View his portfolio here</a>
      </div>

    </div>
  )
}

export default Footer
