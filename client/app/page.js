import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <Experience/>
    </div>
  );
}
