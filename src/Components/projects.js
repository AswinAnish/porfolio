import React from 'react'
import hrms from './hrmsf.png'
import crs from './CRSf.png'
import fan from './fan.png'



export default function projects() {
  return (
    <><section className="et-slide" id="tab-react">
      <h1>Projects</h1>
      <hr/>
      <div className="card-container  ">
        {/* Card 1 */}
        <div className="card custom-card">
          <img
            src={hrms} alt="HRMS"
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">HRMS</h5>
            <p className="card-text">A HRMS system that runs <br/>on AWS.</p>
            <a href="https://github.com/AswinAnish/HRMS.git" className="btn btn-primary">
              Project Link
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card custom-card">
          <img
            src={crs} alt="CRS"
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">CRS</h5>
            <p className="card-text">A CR system that runs <br/>on AWS.</p>
            <a href="https://github.com/AswinAnish/CRS-.git" className="btn btn-primary">
            Project Link
            </a>
          </div>
        </div>


        {/* Card 3 */}
        <div className="card custom-card">
          <img
            src={fan} alt="SMCF"
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">SMCF Module</h5>
            <p className="card-text">Smart Ceiling Fan controller <br/>Using Machine Vision</p>
            <a href="/" className="btn btn-primary">
              Project link
            </a>
          </div>
        </div>
        

      </div>

    </section>
    </>
  )
}
