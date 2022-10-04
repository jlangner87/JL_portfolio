import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'
import Skills from '../components/skills'
import Octopus from '../components/octopus'

const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
        <Nav />
      </div>
      <About />
      <Projects />
      <Skills />
      <Octopus />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
