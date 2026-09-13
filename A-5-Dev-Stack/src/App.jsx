import './App.css'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import TechnologyCard from './TechnologyCard.jsx'
import Footer from './Footer.jsx'




function App() {
  return (
    <div className='mainContainer'>
      <div>
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
