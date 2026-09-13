import './App.css'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import Technologies from './Technologies.jsx'
import Footer from './Footer.jsx'
import { Suspense } from 'react'



function App() {
  return (
    <div className='mainContainer'>
      <div>
        <Nav></Nav>
        <Banner></Banner>
        <Suspense fallback={<p>Loading technologies...</p>}>
                    <Technologies></Technologies>
                </Suspense>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
