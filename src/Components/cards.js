import React from 'react';
import './Cards.css';
import logo from './f13.png'
import logo2 from './eylogo.png'

const Cards = () => {
  return (
    <><section className="et-slide" id="tab-flexbox">
      <h1>Experience</h1>
      <hr/>
      <div className="card-container">
        {/* Card 1 - EY GDS with progression */}
        <div className="card custom-card">
          <img
            src={logo2} alt={"logo"}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">EY GDS</h5>
            <div className="experience-stack">
              <div className="stack-item current">
                <span className="role-title">Software Engineer</span>
                <span className="role-duration">Current</span>
              </div>
              <div className="stack-item">
                <span className="role-title">Associate Software Engineer</span>
                <span className="role-duration">1 Year 5 Months</span>
              </div>
            </div>
          </div>
        </div>
      

      
        {/* Card 2 */}
        <div className="card custom-card">
          <img
            src={logo} alt={"logo"}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">F13 Technologies</h5>
            <p className="card-text">AWS Intern for 5 months.</p>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
};

export default Cards;
