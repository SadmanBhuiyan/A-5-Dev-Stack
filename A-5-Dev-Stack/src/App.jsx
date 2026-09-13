import './App.css'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import Technologies from './Technologies.jsx'
import Footer from './Footer.jsx'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'



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
        <ToastContainer></ToastContainer>
      </div>
    </div>
  )
}

export default App
