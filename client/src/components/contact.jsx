import github from '../assets/GitHub.png'
import email from '../assets/email.png'
import linkedin from '../assets/LinkedIn.png'
import resume from '../assets/resume.png'
import pdf from '../assets/Joshua_Langner.pdf'

const Contact = () => {
  return (
    <div>
      <br></br>
    <div className="contact">
      <h1 className="title_text"><a id="anchor_contact"></a>Contact & More</h1>
      <p className="contact_msg">Please contact me via email or LinkedIn. I would love to hear from you.</p>
      <p className="contact_msg"> If you like what you see here, take a deeper dive into my GitHub repos and download my resume.</p>
      <div className="contact_card">
        <a href="mailto:josh.langner@gmail.com">
          <img className="logos" src={email}/>
          <p className='contact_item'>E-mail</p>
        </a>
        <a href="https://www.linkedin.com/in/josh-langner/">
          <img className="logos" src={linkedin}/>
          <p className='contact_item'>LinkedIn</p>
        </a>
        <a href="https://github.com/jlangner87">
          <img className="logos" src={github}/>
          <p className='contact_item'>GitHub</p>

        </a>
        <a href={pdf} download>
          <img className='logos' src={resume}/>
          <p className='contact_item'>Resume</p>
        </a>
      </div>
      </div>
  
    

    </div>
  )
}

export default Contact