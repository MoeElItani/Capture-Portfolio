// Global Style
import GlobalStyle from './components/GlobalStytle'
// Imports
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'
// Router
import { Routes, Route } from 'react-router-dom'

function App() {
   return (
      <div className='App'>
         <GlobalStyle />
         <Nav />
         <Routes>
            <Route path='/' element={<AboutUs />} />
            <Route path='/work' element={<OurWork />} />
            <Route path='/work/:id' element={<MovieDetail/>} />
            <Route path='/contact' element={<ContactUs />} />
         </Routes>
      </div>
   )
}

export default App
