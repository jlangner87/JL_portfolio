import { HashLink } from 'react-router-hash-link'
import alice from './project_assets/alice.png'
import home from './project_assets/home.png'

const Alice = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <h1 className="project_page_title">Alice's Adventures in Python</h1>
          <p className="project_page_date">August 2022</p>
        </div>
        <img className="project_page_img" src={alice} />

        <div className="project_links">
          {' '}
          <a
            className="project_item"
            href="https://github.com/jlangner87/control_flow_Py"
          >
            &#123;Code Repo&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            This mini-project was an assignment from my time at General Assembly
            It demonstrates control flow in Python in the form of a command line
            "choose your own adventure game."
          </p>
          <p className="project_page_text_footnote">
            There is no deployed site. This game is designed to be played in the
            Python CLI
          </p>
        </div>
        <HashLink to="/#anchor_projects">
          <img className="home_icon_bottom" src={home} />
        </HashLink>
        <br />
      </div>
    </div>
  )
}

export default Alice
