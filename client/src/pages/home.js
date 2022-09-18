import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'
import Skills from '../components/skills'

const Home = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      <div>
        <Nav />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
