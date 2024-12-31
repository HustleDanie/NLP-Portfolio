import './globals.css'; // Make sure the relative path is correct

// Import components
import About from '@/components/About';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <main>
      {/* About Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
