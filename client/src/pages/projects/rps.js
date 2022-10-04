import rock from './project_assets/rps.png'
import { HashLink } from 'react-router-hash-link'
import home from './project_assets/home.png'

const RPS = () => {
  return (
    <div className="rps">
      <div className="project_page">
        <div className="project_page_card">
          <a id="top" />
          <HashLink to="/#anchor_projects">
            <img className="home_icon" src={home} />
          </HashLink>
          <h1 className="project_title_alice">Rock Paper Scissors in Vue</h1>
          <img className="project_img" src={rock} />
          <p className="project_date">August 2022</p>
          <p className="project_text">
            This mini-project was an assignment from my time at General
            Assembly. It demonstrates competency in Vue and Javascript Control
            Flow"
          </p>
          <a className="project_item" href="https://vue-rpsgame.netlify.app/">
            &#123;Deployed Site&#125;
          </a>
          <br />
          <a
            className="project_item"
            href="https://github.com/jlangner87/rps_vue"
          >
            &#123;Code Repo&#125;
          </a>
          <br />
        </div>
      </div>
    </div>
  )
}

export default RPS
