import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import ProjectsSection from "./component/ProjectSection";

export default function Home() {
  return (
    <main className="max-w-3xl px-4 mx-auto md:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
