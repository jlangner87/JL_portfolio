import { HashLink } from 'react-router-hash-link'
import mock from './project_assets/mock.png'
import home from './project_assets/home.png'

const WikiBean = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <h1 className="project_page_title">WikiBean</h1>
          <p className="project_page_date">September 2022</p>
        </div>
        <img className="project_page_img" src={mock} />
        <div className="project_links">
          <a className="project_item" href="https://youtu.be/Vz6ppOBLPCg">
            &#123;Demo&#125;
          </a>
          <br />
          <a className="project_item" href="https://wikibean.netlify.app/">
            &#123;Deployed Site&#125;
          </a>
          <br />
          <a
            className="project_item"
            href="https://github.com/jlangner87/roaster_roster_client"
          >
            &#123;Code Repo&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            WikiBean is a PERN stack application where I focus on building
            RESTful APIs and multiple query routes that can be accessed from my
            ReactJs front end that was styled with custom CSS.
          </p>
          <p className="project_page_text">
            The PSQL database with 4 models and 14 express routes delivering
            full crud operations to the user.
          </p>
          <p className="project_page_text_footnote">
            Be sure to check back and see where WikiBean is going. This is a
            passion project and will continue to evolve as I sharpen my existing
            skills and learn new ones.
          </p>
          <p className="project_page_text_footnote">
            I am currently looking for a new hosting service to replace Heroku
            for the backend of this project. Please view the demo below to see
            the full functionality of this application.
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

export default WikiBean
