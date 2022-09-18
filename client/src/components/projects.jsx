import recipes from '../assets/recipes.png'
import mock from '../assets/mock.png'

const Projects = () => {
  return (
    <div>
      <br></br>
      <div className="projects">
        <h1 className="title_text"><a id="anchor_projects"></a>Projects</h1>
        <h1 className='scroll_instruction'>Scroll for more > > ></h1>
        <div className='carousel'>
        <div className="project_card">
          <h1 className='project_title'>Recipes For Me</h1>
          <img className='project_img' src={recipes}/>
          <p className='project_text'>Recipes For Me is a PERN stack application developed for a group project at General Assembly.</p>
          <p className='project_text'>On this project, I was responsible for the building the PSQL database and its models as well as constructing the Express/Node server and routes. I also designed the logo and styled the application with custom CSS.</p>
          <a className='project_item' href='https://obscure-reef-40887.herokuapp.com/'>Deployed Site</a>
          <a className='project_item' href='https://github.com/jengriffin/Recipes-For-Me-'>Code Repo: Client</a>
          <a className='project_item' href='https://github.com/Aonmonomer/Recipe-For-Me-api'>Code Repo: API</a>
        </div>
        <div className="project_card">
          <h1 className='project_title'>WikiBean</h1>
          <img className='project_img' src={mock}/>
          <p className='project_text'> This is a description of the project and my role in the project</p>
          <a className='project_item' href='https://wikibean.netlify.app/beans'>Deployed Site</a>
          <a className='project_item' href='https://github.com/jlangner87/roaster_roster_client'>Code Repo</a>
        </div>
        <div className="project_card">
          <h1 className='project_title'>WikiBean</h1>
          <img className='project_img' src={mock}/>
          <p className='project_text'> This is a description of the project and my role in the project</p>
          <a className='project_item' href='https://wikibean.netlify.app/beans'>Deployed Site</a>
          <a className='project_item' href='https://github.com/jlangner87/roaster_roster_client'>Code Repo</a>
        </div>
        <div className="project_card">
          <h1 className='project_title'>WikiBean</h1>
          <img className='project_img' src={mock}/>
          <p className='project_text'> This is a description of the project and my role in the project</p>
          <a className='project_item' href='https://wikibean.netlify.app/beans'>Deployed Site</a>
          <a className='project_item' href='https://github.com/jlangner87/roaster_roster_client'>Code Repo</a>
        </div>
        </div>
      </div>
  </div>
  )
}
export default Projects