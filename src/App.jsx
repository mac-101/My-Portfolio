import Home from "./pages/home";
import ProjectLibrary from "./pages/projects";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const animation = el.dataset.animation || 'fade-in-up';

        if (entry.isIntersecting) {
          // FORWARD: Add classes to animate in
          const delay = el.dataset.delay || '0s';
          const duration = el.dataset.duration || '0.6s';

          el.style.animationDelay = delay;
          el.style.animationDuration = duration;

          el.classList.add(animation);
          el.classList.add('opacity-100');
        } else {
          // BACKWARD: Remove classes to reset the state
          el.classList.remove(animation);
          el.classList.remove('opacity-100');

          // Optional: Reset styles so they don't interfere with the next entry
          el.style.animationDelay = '0s';
        }
      });
    }, {
      threshold: 0.20,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App