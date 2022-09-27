import headshot from "../assets/lower_res.png"
import logo from "../assets/black_logo.png"

const Header = () => {
  return (
    <div className="header">
      <a id="anchor_top"></a>
      <div className="header_text_container">
      <h1 className="hello">Hello, I am</h1>
        <h1 className="header_text">Joshua M. Langner</h1>
      </div>
      <img className="headshot" src={headshot}/>
        <h1 className="headersub_text">Software Engineer</h1>
        <img className="logo" src={logo}/><br></br>
      
    </div>
  )
}

export default Header