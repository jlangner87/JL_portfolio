import family from '../assets/family_transparent.png'

const About = () => {
  return (
    <div>
      <br></br>

    <div className="about">
      <h1 className="title_text"><a id="anchor_about"></a>About Me </h1>
      <h1 className="about_title">An Overview... </h1>
      <p className="content_text">
      I am a software engineer with a background in technical support, sales, and management in the electronics and cellular industry. I am driven by continuous improvement and complex problem-solving. I effectively uncover root needs with empathy, approach them with creativity and deliver high-quality custom websites to meet those needs.
      </p>
      <h1 className="about_title">An Origin Story...</h1>
      <p className="content_text">When I was a kid, I loved dissecting and conceptualizing everything– figuring out what makes the world tick.<br/>
      That drive eventually led me to my first <em>big boy job</em> as an electronics technician at a cellular company.<br/>
      Over the years, I continually adapted to the rapidly changing industry. I went from hardware repair to software maintenance to user support. My interests eventually shifted to software. I kept asking myself, If I could develop this, what would I improve?<br/>
      I took the leap! I enrolled in the <em>General Assembly</em>Software Engineering Immersive course. Now I am catapulting into new and exciting aspects of software engineering every single day.</p>
      <h1 className="about_title">a personal note...</h1>
      <p className="content_text">Aside from a developer, I am a husband and father living in rural Iowa. My passion hobby is theater. I am a playwright, director, and actor. It is fun, but I have gained so many transferrable skills in teater. I have learned how to effectively work with a diverse group to deliver the best possible product. I have learned the importance of giving my best to my areas of contribution. I have learned the process of taking an abstract concept and transforming it into a tangible product for the audience to enjoy.</p>
      <div className='family_container'>
      <img className='family' src={family}/>
      </div>
    </div>
    </div>
  )
}

export default About