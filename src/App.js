import React from 'react';
import StickyNav from './Components/StickyNav'; 
import Header from './Components/Header';
import ExampleComponent from './Components/ExampleComponent';
import AboutSection from './Components/AboutSection';
import Cards from './Components/cards';
import Projects from './Components/projects';
import Contact from './Components/contact';
import Resume from './Components/Resume';






const App = () => {
  return (

    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>

      {/* Use the StickyNav component */}
      <StickyNav />

      {/* Hero */}
      <section className="et-hero-tabs">
        <Header />
        <ExampleComponent/>
      </section>

      {/* Main */}
      <main className="et-main">
          <AboutSection/>
          <Cards/>
          <Projects/>
          
        <section className="et-slide" id="tab-angular">
          <h1>Contact</h1>
          <hr />
          <Contact/>
        </section>
        <Resume/>
      </main>
    </>
  );
};

export default App;
