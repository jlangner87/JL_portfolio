import recipes from '../assets/recipes.png'
import mock from '../assets/mock.png'
import alice from '../assets/alice.png'
import portfilio from '../assets/this.png'
import rps from '../assets/rps.png'
import dice from '../assets/diceMock.png'
import more from '../assets/more.png'
import { HashLink } from 'react-router-hash-link'

const Projects = () => {
  return (
    <div>
      <br></br>
      <div className="projects">
        <h1 className="title_text"><a id="anchor_projects"></a>Projects</h1>
        <div className='carousel'>
        <div className="project_card">
          <HashLink to='/wikibean/#top'>
          <img className='more_icon' src={more}/>
            <h1 className='project_title'>WikiBean</h1>

            <img className='project_img' src={mock}/>
            <p className='project_date'>September 2022- Ongoing</p>
          </HashLink>
      </div>
        <div className="project_card">
          <HashLink to='/recipes_for_me/#top'>
          <img className='more_icon' src={more}/>
          <h1 className='project_title'>Recipes For Me</h1>
          <img className='project_img' src={recipes}/>
          <p className='project_date'>August 2022</p>
          </HashLink>
        </div>
        <div className="project_card">
        <HashLink to='/rpg_dice/#top'>
        <img className='more_icon' src={more}/>
          <h1 className='project_title_alice'>Dice Roller in React</h1>
          <img className='project_img' src={dice}/>
          <p className='project_date'>September 2022- Ongoing</p>
          </HashLink>
        </div>
        <div className="project_card">
          <HashLink to='/rps/#top'>
          <img className='more_icon' src={more}/>
          <h1 className='project_title_alice'>Rock Paper Scissors in Vue</h1>
          <img className='project_img' src={rps}/>
          <p className='project_date'>August 2022</p>
          </HashLink>
     </div>
        <div className="project_card">
          <HashLink to='/alice_python/#top'>
          <img className='more_icon' src={more}/>
          <h1 className='project_title_alice'>Alice's Adventures in Python</h1>
          <img className='project_img' src={alice}/>
          <p className='project_date'>August 2022</p>
          </HashLink>
        </div>
        <div className="project_card">
          <HashLink to='/my_portfolio/#top'>
          <img className='more_icon' src={more}/>
          <h1 className='project_title'>This Portfolio</h1>
          <img className='project_img' src={portfilio}/>
          <p className='project_date'>July 2022- Ongoing</p>
          </HashLink>
        </div>
        </div>
      </div>
  </div>
  )
}

export default Projects