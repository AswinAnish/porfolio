// StickyNav.js

import React, { useEffect, useRef } from 'react';


const StickyNav = () => {
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (tabsContainerRef.current) {
      const tabsContainer = tabsContainerRef.current;
      if (window.scrollY > 50) {
        tabsContainer.classList.add('et-hero-tabs-container--top');
      } else {
        tabsContainer.classList.remove('et-hero-tabs-container--top');
      }
    }
  };

  return (
    <div ref={tabsContainerRef} className="et-hero-tabs-container">
      <a className="et-hero-tab" href="#tab-es6" style={{ textDecoration: 'none' }}>
        About
      </a>
      <a className="et-hero-tab" href="#tab-flexbox" style={{ textDecoration: 'none' }}>
        Experience
      </a>
      <a className="et-hero-tab" href="#tab-react" style={{ textDecoration: 'none' }}>
        Projects
      </a>
      <a className="et-hero-tab" href="#tab-angular" style={{ textDecoration: 'none' }}>
        Contact
      </a>
      <a className="et-hero-tab" href="#tab-other" style={{ textDecoration: 'none' }}>
        Resume
      </a>
      <span className="et-hero-tab-slider"></span>
    </div>
  );
};

export default StickyNav;