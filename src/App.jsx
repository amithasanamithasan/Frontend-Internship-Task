
import './App.css'
import FavoriteCards from './Components/FavoriteCards'
import FeaturedInsights from './Components/FeaturedInsights'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ParticlesBackground from './Components/ParticlesBackground'
import PortfolioSection from './Components/PortfolioSection'
import RecentWorksHeader from './Components/RecentWorksHeader'
import Section from './Components/Section'
import SmallCard from './Components/SmallCard'

import StudioDescription from './Components/StudioDescription'
  
function App() {



  return (
    <div className="min-h-screen relative">
        <Navbar/>
        <Hero/>
        <PortfolioSection/>
        <StudioDescription/>
        <Section/>
        <RecentWorksHeader/>
        <FavoriteCards/>
        <SmallCard/>
        <FeaturedInsights/>
        <Footer/>
      
    </div>
  )
}

export default App
