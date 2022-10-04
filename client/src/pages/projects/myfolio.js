import { HashLink } from 'react-router-hash-link'
import portfolio from './project_assets/this.png'
import home from './project_assets/home.png'

const MyFolio = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <h1 className="project_page_title">This Portfolio</h1>
          <p className="project_page_date">July 2022</p>
        </div>

        <img className="project_page_img" src={portfolio} />
        <div className="project_links">
          <a className="project_item" href="https://joshua-langner.com/">
            &#123;Deployed Site&#125;
          </a>
          <a
            className="project_item"
            href="https://github.com/jlangner87/JL_portfolio"
          >
            &#123;Code Repo&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            This portfolio is a ReactJs app that I created to demonstrate my
            personal design aesthetic and front end development ability.
          </p>
          <p className="project_page_text">
            It is probably unconventional to showcase the portfolio in the
            portfolio. But I feel like this project is where I display myself
            the most. And I want to take a moment to celebrate that.
          </p>
          <p className="project_page_text">
            When I started this project, I thought about using a template, just
            to get it up and running. Instead, challenged myself to create
            something beautiful with raw CSS.
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

export default MyFolio
