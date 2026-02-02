import Home from "./pages/home";
import ProjectLibrary from "./pages/projects";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          // Get settings from data attributes
          const animation = el.dataset.animation || 'fade-in-up';
          const delay = el.dataset.delay || '0s';
          const duration = el.dataset.duration || '0.6s';

          // Apply styles
          el.style.animationDelay = delay;
          el.style.animationDuration = duration;
          
          // Add the CSS class to trigger the @keyframes
          el.classList.add(animation);
          el.classList.add('opacity-100'); // Ensure it becomes visible
          
          // Stop watching once animated (best for performance)
          observer.unobserve(el);
        }
      });
    }, { 
      threshold: 0.20, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Triggers slightly before it enters the viewport
    });

    // Watch everything with the "reveal" class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Home/>  
    </div>
  );
}

export default App