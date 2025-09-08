import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import KeyAchievements from '@/app/components/KeyAchievements';

export default function Home() {
  return (
    <>
    <div id="home">
      <Hero />
    </div>
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
  );
}
