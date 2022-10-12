import family from '../assets/family_transparent.png'

const About = () => {
  return (
    <div>
      <br></br>

    <div className="about">
      <h1 className="title_text"><a id="anchor_about"></a>About Me </h1>
      <h1 className="about_title">An Overview... </h1>
      <p className="content_text">
      I am a software-engineer with technical support and sales background in the electronics and cellular industry.
      <br/>
      I am driven by continuous improvement and complex problem-solving.
      <br/>
      Drawing from my experiences, I effectively uncover root problems  with empathy and communicate abstract solutions in a concrete way that inspires confidence and understanding.
      </p>
      <h1 className="about_title">An Origin Story...</h1>
      <p className="content_text">When I was a kid, I took apart a broken VCR and fixed it, so that I could watch my “Lord of the Rings” in my own room. I loved figuring out what makes the world tick.
      <br/>That never went away and eventually led me to my first <em>big boy job</em> as an electronics technician at a cellular company.
      <br/>Over the years, I continually adapted to the rapidly changing industry. I went from hardware repair to software maintenance to user support. My interests eventually shifted to software. I kept asking myself, <em>If I could develop this, what would I improve?</em>
      <br/> Eventually, I made the leap and took the Software Engineering Immersive course at <em>General Assembly</em>. Now I am catapulting forward into new exciting aspects of developing every single day.</p>
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