import React from 'react';
import Hero from './components/Hero';
import DataVisuals from './components/DataVisuals';
import Partners from './components/Partners';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <DataVisuals />
      <Partners />
      <CTASection />
    </div>
  );
}
