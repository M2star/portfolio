import About from "./components/about";
import Experiences from "./components/experiense";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Experiences />
    </div>
  );
}
