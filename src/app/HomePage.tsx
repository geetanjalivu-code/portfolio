import { NavBar } from './components/NavBar';
import { SeesawSection } from './components/SeesawSection';
import { WorkJourney } from './components/WorkJourney';
import { AboutSection } from './components/AboutSection';
import { TestimonialSection } from './components/TestimonialSection';
import React, { useState, useEffect } from 'react';


export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1a1a2e', background: '#fff', overflowX: 'hidden', minHeight: '100vh' }}>
      <NavBar />
      <SeesawSection />
      <WorkJourney />
      <AboutSection />
      <TestimonialSection />
    </div>
  );
}
