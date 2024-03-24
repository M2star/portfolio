import About from "./components/about";
import ContactUs from "./components/contact-us";
import Experiences from "./components/experiense";
import HeroSection from "./components/hero-section";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}
