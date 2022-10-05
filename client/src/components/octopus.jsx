import logo from "../assets/values_octo.png"
import curiosity from "../assets/curiosity.png"
import collaborate from "../assets/collaborate.png"
import ci from "../assets/ci.png"
import willing from "../assets/willing.png"
import humble from "../assets/humble.png"
import honest from "../assets/honest.png"
import integrity from "../assets/integrity.png"
import open from "../assets/open.png"

const Octopus = () => {
  return (
    <div>
      <br></br>
      <div className="octopus">
        <h1 className="title_text"><a id="anchor_octopus"></a>Values & Philosophy</h1>
          <div className="octo_container">
            <img className="logo2" src={logo}/>
            <p className="octo_text">versatile ◦ resourceful ◦ attentive ◦ resilient</p>
          </div>
          <h1 className="about_title">The Ethos of the Octopus...</h1>
        <p className="content_text"> <em>What is up with the octopus logo?</em><br/>
          The octopus is a beautifully fascinating animal. At the core of this magestic beast are the pillars of my personal philosophy on engineering, work, and just all of live in general.</p>
        <p className="about_title2">Be Versatile</p>
        <p className="content_text2">
          The octopus can change its shape or color to match any environment—it is able to adjust to and handle even the most challenging situations <br/>
          <em>When faced with a challenge, keep your head up and know that you already have what it takes to adapt and overcome.</em>
        </p>
        <p className="about_title2">Be Resourceful</p>
        <p className="content_text2">
          The octopus is continually learning. They learn by encountering obstacles. They explore the obstacle, discover a solution, and then keep that knowledge to be built upon when facing future obstacles. <br/>
          <em>See each obstacle as an opportunity to learn. When you do not know how, use your past experiences and all available resources to learn how. </em></p>
        <p className="about_title2">Be Attentive</p>
        <p className="content_text2">
          The octopus’s tentacles are an extension of its brain. They are hardwired with millions of neurons. It is continuously feeling the environment and updating its perspective. <br/>
          <em>Pay attention. Anticipate change. There are clues everywhere, telling us how to prevent or fix any problem. </em></p>
        <p className="about_title2">Be Resilient</p>
        <p className="content_text2">
          The octopus faces many dangers, but it has an amazing survival mechanism. It can regenerate lost limbs. When attacked, the octopus does not give up and die. It heals and goes on living.<br/>
          <em>When things get really hard&#8212;When you meet failure, do not quit. Get up. Keep going.</em></p>
        <div className="values">
          <p className="value_header">Personal Values</p>
        <p className="content_text3">
        <div className="tooltip">Curiosity &nbsp; | &nbsp; <img className="tooltiptext" src={curiosity}/></div>
        <div className="tooltip">Collaboration &nbsp; | &nbsp; <img className="tooltiptext" src={collaborate}/></div>
        <div className="tooltip">Continuous Improvement &nbsp; | &nbsp; <img className="tooltiptext" src={ci}/></div>
        <div className="tooltip">Willingness to Learn <img className="tooltiptext" src={willing}/></div> <br/>
        <div className="tooltip2">Humility &nbsp; | &nbsp; <img className="tooltiptext" src={humble}/></div>
        <div className="tooltip2">Honesty &nbsp; | &nbsp; <img className="tooltiptext" src={honest}/></div>
        <div className="tooltip2">Integrity &nbsp; | &nbsp; <img className="tooltiptext" src={integrity}/></div>
        <div className="tooltip2">Openness <img className="tooltiptext" src={open}/></div>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Octopus


