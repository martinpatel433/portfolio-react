import Header from './componates/header'
import Slider from './componates/slider'
import Skills from './componates/skills'
import Work from './componates/work'
import Blogs from './componates/blogs'
import Contact from './componates/contact'
import Footer from './componates/footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Skills />
        <Work />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

