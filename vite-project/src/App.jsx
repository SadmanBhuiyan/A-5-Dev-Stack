import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Check from './Check.jsx'
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer'>
      <div>
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
        <Check></Check>
      </div>
    </div>
  )
}

export default App
