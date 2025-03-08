import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <Skills/>
    </div>
  );
}
