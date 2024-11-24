'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LogoRain = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const logos = [
    {
      name: 'Python',
      color: '#3776AB',
      path: 'M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.372 12-12C24 5.372 18.627 0 12 0zm0 4.8c3.183 0 4.8 1.617 4.8 4.8v2.4h-9.6v-.8c0-1.765.735-3.2 2.4-3.2h4.8v-.8c0-1.323-.677-2.4-2.4-2.4H7.2v-.8c0-1.323.677-2.4 2.4-2.4h2.4z'
    },
    {
      name: 'JavaScript',
      color: '#F7DF1E',
      path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
    },
    {
      name: 'React',
      color: '#61DAFB',
      path: 'M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z'
    }
  ];

  useEffect(() => {
    // Initial animations for content
    gsap.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
    
    gsap.fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
    );
    
    gsap.fromTo(buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.1 }
    );

    // Create raining logos
    const createLogo = () => {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      const size = 20 + Math.random() * 30;
      const startX = Math.random() * window.innerWidth;
      const endX = startX + (Math.random() * 200 - 100); // Random drift
      const duration = 3 + Math.random() * 4;
      const rotation = Math.random() * 360;

      const logoElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      logoElement.setAttribute("viewBox", "0 0 24 24");
      logoElement.setAttribute("width", size);
      logoElement.setAttribute("height", size);
      logoElement.style.position = "absolute";
      logoElement.style.left = `${startX}px`;
      logoElement.style.top = "-50px";
      logoElement.style.opacity = "0";

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", logo.path);
      path.setAttribute("fill", logo.color);
      logoElement.appendChild(path);
      containerRef.current.appendChild(logoElement);

      gsap.fromTo(logoElement,
        {
          x: 0,
          y: -50,
          rotation: 0,
          opacity: 0
        },
        {
          x: endX - startX,
          y: window.innerHeight + 100,
          rotation: rotation,
          opacity: 0.1 + Math.random() * 0.9,
          duration: duration,
          ease: "none",
          onComplete: () => {
            logoElement.remove();
          }
        }
      );
    };

    // Start creating logos
    const interval = setInterval(createLogo, 300);

    // Cleanup
    return () => {
      clearInterval(interval);
      containerRef.current?.childNodes.forEach(node => node.remove());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900 overflow-hidden">
      {/* Container for falling logos */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <h1 
          ref={titleRef}
          className="text-8xl font-bold text-white mb-8 tracking-wider"
          style={{ opacity: 0 }}
        >
          GO - GET - GIT
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-green-400 text-2xl mb-12"
          style={{ opacity: 0 }}
        >
          Your Journey Begins Here
        </p>
        
        <button 
          ref={buttonRef}
          className="px-8 py-4 bg-green-500 text-white text-lg rounded-lg transform transition-transform hover:scale-105"
          style={{ opacity: 0 }}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LogoRain;