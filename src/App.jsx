import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-text selection:bg-wine selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Metrics />
        <Timeline />
        <Portfolio />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
