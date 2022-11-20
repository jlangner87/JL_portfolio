import { HashLink } from 'react-router-hash-link'
import teamlindsay from './project_assets/teamlindsay.png'
import home from './project_assets/home.png'
import feedback from './project_assets/feedback.png'

const TeamLindsay = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <h1 className="project_page_title">Team Lindsay</h1>
          <p className="project_page_date">October 2022</p>
        </div>
        <img className="project_page_img" src={teamlindsay} />
        <div className="project_links">
          <a className="project_item" href="https://teamlindsay.netlify.app/">
            &#123;Deployed Site&#125;
          </a>
          <br />
          <a
            className="project_item"
            href="https://github.com/jlangner87/teamlindsay"
          >
            &#123;Code Repo&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            Team Lindsay is a static React application that allows a user to
            submit an order that is then sent to my client via email.
          </p>
          <p className="project_page_text">
            This project is particularly exciting to me for two reasons.
          </p>
          <p className="project_page_text">
            First, this was my first real world client. It was an enlightening
            learning process. There was no list of project requirements in the
            syllabus. I had to listen with empathy and seek to understand her
            needs. Then I got to recommend a solution in a concrete way that
            inspired confidence.
          </p>
          <p className="project_page_text">
            Second, this was my first project that was built with real world
            application. Classroom projects have uses, but this one was birthed
            from a need. Someone needed a tool that they did not have, and I was
            able to say, “Hey! I can build the tool you need!”
          </p>
        </div>
        <div className="project_headline">
          <p className="artifact_headline">Client Feedback</p>
        </div>
        <img className="project_artifact" src={feedback} />
        <HashLink to="/#anchor_projects">
          <img className="home_icon_bottom" src={home} />
        </HashLink>
        <br />
      </div>
    </div>
  )
}

export default TeamLindsay
