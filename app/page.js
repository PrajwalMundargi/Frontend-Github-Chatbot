'use client'
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from './typewriter';

const MainContent = ({ isTypingComplete, handleTypingComplete }) => (
  <div className="min-h-screen bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-zinc-800 mb-3">
          About US
        </h1>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="bg-zinc-50 rounded-lg p-6 border border-green-200">
          <Typewriter onComplete={handleTypingComplete} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        {isTypingComplete && (
          <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg 
                     transition-all duration-300 transform hover:scale-105 flex items-center space-x-2
                     shadow-md hover:shadow-lg">
            <span className="text-lg">Continue</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* <div className="flex justify-center space-x-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-200"></div>
        <div className="w-2 h-2 rounded-full bg-green-200"></div>
      </div> */}

      <footer className="mt-16 text-center text-zinc-600">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="h-px w-12 bg-green-200"></div>
          <span className="text-green-500">•</span>
          <div className="h-px w-12 bg-green-200"></div>
        </div>
        <div>
          <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
          </svg>
          <p className="text-sm font-medium">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
);

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const logoContainerRef = useRef(null);
  const loadingTitleRef = useRef(null);
  const mainContentRef = useRef(null);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

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
    const tl = gsap.timeline();
    let logoInterval;

    // Function to create and animate a falling logo
    const createLogo = () => {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      const size = 20 + Math.random() * 30;
      const startX = Math.random() * window.innerWidth;
      const endX = startX + (Math.random() * 200 - 100);
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
      logoContainerRef.current?.appendChild(logoElement);

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
          opacity: 0.2,
          duration: 3 + Math.random() * 2,
          ease: "none",
          onComplete: () => {
            logoElement.remove();
          }
        }
      );
    };

    // Initial animations
    tl.set(mainContentRef.current, { opacity: 0 })
      .fromTo(loadingTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

    // Start logo rain
    logoInterval = setInterval(createLogo, 200);

    // After 3 seconds, transition to main content
    setTimeout(() => {
      // Fade out loading screen
      tl.to(loadingTitleRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      })
      .to(logoContainerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          clearInterval(logoInterval);
          setIsLoading(false);
        }
      })
      // Fade in main content
      .fromTo(mainContentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, 3000);

    return () => {
      clearInterval(logoInterval);
      logoContainerRef.current?.childNodes.forEach(node => node.remove());
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-zinc-900 flex items-center justify-center overflow-hidden">
          <div ref={logoContainerRef} className="absolute inset-0" />
          <h1 
            ref={loadingTitleRef}
            className="text-8xl font-bold text-white tracking-wider z-10"
          >
            GOGETGIT
          </h1>
        </div>
      ) : null}
      
      <div ref={mainContentRef} style={{ opacity: 0 }}>
        <MainContent 
          isTypingComplete={isTypingComplete}
          handleTypingComplete={handleTypingComplete}
        />
      </div>
    </>
  );
};

export default Page;