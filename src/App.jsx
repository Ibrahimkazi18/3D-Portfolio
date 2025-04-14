import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeaturesSection from "./sections/FeaturesSection"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStackSection from "./sections/TechStackSection"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
            <Navbar />

            <Hero />

            <ShowcaseSection />

            <LogoSection />

            <FeaturesSection />

            <ExperienceSection />

            <TechStackSection />

            <Testimonials />

            <Contact />

            <Footer />
    </>
  )
}

export default App