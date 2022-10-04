import { HashLink } from 'react-router-hash-link'
import dice from './project_assets/diceMock.png'
import home from './project_assets/home.png'

const Dice = () => {
  return (
    <div className="project_page">
      <div className="project_page_card">
        <a id="top" />
        <HashLink to="/#anchor_projects">
          <img className="home_icon" src={home} />
        </HashLink>
        <div className="project_headline">
          <h1 className="project_page_title">Dice Roller in React</h1>
          <p className="project_page_date">September 2022</p>
        </div>
        <img className="project_page_img" src={dice} />
        <div className="project_links">
          <a className="project_item" href="https://rpg-dice.netlify.app/">
            &#123;Deployed Site&#125;
          </a>
          <a
            className="project_item"
            href="https://github.com/jlangner87/dnd_dice"
          >
            &#123;Code Repo&#125;
          </a>
        </div>
        <div className="project_page_text_container">
          <p className="project_page_text">
            This ReactJs app started as a mini-project to practice state
            management in React. As I got it up and running, I quickly learned
            that RPGs offer endless possibilities for ongoing development. The
            current iteration is finctional, but as I receive more feedback from
            players, I will continue to add features."
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

export default Dice
