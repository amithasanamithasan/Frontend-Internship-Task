
import './App.css'

import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import PortfolioSection from './Components/PortfolioSection'
import ServiceCards from './Components/ServiceCards'
import StudioDescription from './Components/StudioDescription'

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <PortfolioSection/>
        <StudioDescription/>
      <ServiceCards/>
      </div>
    </>
  )
}

export default App
