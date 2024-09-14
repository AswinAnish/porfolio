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
        {/* Card 1 */}
        <div className="card custom-card">
          <img
            src={logo2} alt={"logo"}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">EY GDS</h5>
            <p className="card-text">Associate Software Engineer</p>
            {/*<a href="/" className="btn btn-primary">
      Go somewhere
    </a>*/}
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
            {/*<a href="/" className="btn btn-primary">
      Go somewhere
    </a>*/}
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
};

export default Cards;
