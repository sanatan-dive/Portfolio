import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies'; // Corrected import
import Projects from './components/Projects';
import Contact from './components/Contact';
import Floating from './components/ui/Floating';

function App() { 
  return (
    <main>
      <div className='overflow-x-hidden text-stone-300 antialiased'>
        {/* Background Layer */}
        <div className='fixed inset-0 -z-10'>
          <div className="relative h-full w-full bg-stone-950">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fcfcfc36,#0c0a09)]"></div>
          </div>
        </div>

        {/* Floating Navigation */}
        <Floating />

        {/* Main Content */}
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Technologies /> {/* Corrected component name */}
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
