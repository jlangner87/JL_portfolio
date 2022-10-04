import { HashLink } from 'react-router-hash-link'
import recipes from './project_assets/recipes.png'
import home from './project_assets/home.png'

const Recipes = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <p className="project_page_title">Recipes For Me</p>
          <p className="project_page_date">August 2022</p>
        </div>
        <img className="project_page_img" src={recipes} />
        <div className="project_links">
          <a className="project_item" href="https://youtu.be/nLbX0npgjlw">
            &#123;Demo&#125;
          </a>
          <a
            className="project_item"
            href="https://obscure-reef-40887.herokuapp.com/"
          >
            &#123;Deployed Site&#125;
          </a>
          <a
            className="project_item"
            href="https://github.com/jengriffin/Recipes-For-Me-"
          >
            &#123;Code Repo: React App&#125;
          </a>
          <a
            className="project_item"
            href="https://github.com/Aonmonomer/Recipe-For-Me-api"
          >
            &#123;Code Repo: API&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            Recipes For Me is a PERN stack application developed for a group
            project at General Assembly.
          </p>
          <p className="project_page_text">
            On this project, I was responsible for the building the PSQL
            database and its models as well as constructing the Express/Node
            server and routes. I also designed the logo and styled the
            application with custom CSS.
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

export default Recipes
