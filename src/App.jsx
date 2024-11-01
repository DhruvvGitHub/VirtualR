import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust to control scroll speed
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time); // Sync Lenis with the animation frame
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up on unmount
  }, []);

  return (
    <>
    <Navbar/>
    <Hero />
    <Features />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App