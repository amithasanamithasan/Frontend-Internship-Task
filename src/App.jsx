
import './App.css'

import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import PortfolioSection from './Components/PortfolioSection'
import Section from './Components/Section'

import StudioDescription from './Components/StudioDescription'

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <PortfolioSection/>
        <StudioDescription/>
     <Section/>
      </div>
    </>
  )
}

export default App
