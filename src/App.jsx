import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div className="relative text-white selection:bg-primary selection:text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-gray-500 border-t border-gray-900 bg-darker">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} ABI BINU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
