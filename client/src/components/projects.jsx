import recipes from '../assets/recipes.png'
import mock from '../assets/mock.png'
import alice from '../assets/alice.png'
import portfilio from '../assets/this.png'
import rps from '../assets/rps.png'

const Projects = () => {
  return (
    <div>
      <br></br>
      <div className="projects">
        <h1 className="title_text"><a id="anchor_projects"></a>Projects</h1>
        <h1 className='scroll_instruction'>Scroll for more > > ></h1>
        <div className='carousel'>
        <div className="project_card">
          <h1 className='project_title'>WikiBean</h1>
          <img className='project_img' src={mock}/>
          <p className='project_text'>WikiBean is a PERN stack application where I focus on building RESTful APIs and multiple query routes that can be accessed from my ReactJs front end that was styled with custom CSS.</p>
          <p className='project_text'>The PSQL database with 4 models and 14 express routes delivering full crud operations to the user.</p>
          <p className='project_text_footnote'>Be sure to check back and see where WikiBean is going. This is a passion project and will continue to evolve as I sharpen my existing skills and learn new ones.</p>
          <p className='project_text_footnote'>I am currently looking for a new hosting service to replace Heroku for the backend of this project. Please view the demo below to see the full functionality of this application.</p>
          <a className='project_item' href='https://wikibean.netlify.app/'>&#123;Demo&#125;</a><br/>
          <a className='project_item' href='https://wikibean.netlify.app/'>&#123;Deployed Site&#125;</a><br/>
          <a className='project_item' href='https://github.com/jlangner87/roaster_roster_client'>&#123;Code Repo&#125;</a><br/>
        </div>
        <div className="project_card">
          <h1 className='project_title'>Recipes For Me</h1>
          <img className='project_img' src={recipes}/>
          <p className='project_text'>Recipes For Me is a PERN stack application developed for a group project at General Assembly.</p>
          <p className='project_text'>On this project, I was responsible for the building the PSQL database and its models as well as constructing the Express/Node server and routes. I also designed the logo and styled the application with custom CSS.</p>
          <a className='project_item' href='https://obscure-reef-40887.herokuapp.com/'>&#123;Deployed Site&#125;</a><br/>
          <a className='project_item' href='https://github.com/jengriffin/Recipes-For-Me-'>&#123;Code Repo: React App&#125;</a><br/>
          <a className='project_item' href='https://github.com/Aonmonomer/Recipe-For-Me-api'>&#123;Code Repo: API&#125;</a>
        </div>
        <div className="project_card">
          <h1 className='project_title_alice'>Rock Paper Scissors in Vue</h1>
          <img className='project_img' src={rps}/>
          <p className='project_text'> This mini-project was an assignment from my time at General Assembly. It demonstrates competency in Vue and Javascript Control Flow"</p>
          <a className='project_item' href='https://vue-rpsgame.netlify.app/'>&#123;Deployed Site&#125;</a><br/>
          <a className='project_item' href='https://github.com/jlangner87/rps_vue'>&#123;Code Repo&#125;</a>
        </div>
        <div className="project_card">
          <h1 className='project_title_alice'>Alice's Adventures in Python</h1>
          <img className='project_img' src={alice}/>
          <p className='project_text'> This mini-project was an assignment from my time at General Assembly It demonstrates control flow in Python in the form of a command line "choose your own adventure game."</p>
          <p className='project_text_footnote'>There is no deployed site. This game is designed to be played in the Python CLI</p>
          <a className='project_item' href='https://github.com/jlangner87/control_flow_Py'>&#123;Code Repo&#125;</a>
        </div>
        <div className="project_card">
          <h1 className='project_title'>This Portfolio</h1>
          <img className='project_img' src={portfilio}/>
          <p className='project_text'>This portfolio is a ReactJs app that I created to demonstrate my personal design aesthetic and front end development ability.</p>
          <p className='project_text'>It is probably unconventional to showcase the portfolio in the portfolio. But I feel like this project is where I display myself the most. And I want to take a moment to celebrate that.</p>
          <p className='project_text'>When I started this project, I thought about using a template, just to get it up and running. Instead, challenged myself to create something beautiful with raw CSS.</p>
          <a className='project_item' href='https://joshua-langner.com/'>&#123;Deployed Site&#125;</a><br/>
          <a className='project_item' href='https://github.com/jlangner87/JL_portfolio'>&#123;Code Repo&#125;</a><br/>
        </div>
        </div>
        <h1 className='scroll_instruction'>Scroll for more > > ></h1>
      </div>
  </div>
  )
}

export default Projects