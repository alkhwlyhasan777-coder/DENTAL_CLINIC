import Navbar from "../layout/Navbar";
import About from "../sections/About";
import Doctors from "../sections/Doctors";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "./Contact";
import Footer from "../layout/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Testimonials/>
      <Doctors/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home