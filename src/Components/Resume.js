// Resume.js
import React from 'react';
import Counter from './Counter';

const Resume = () => {
  const handleDownload = (event) => {
    event.preventDefault();

    const pdfPath = '/aswinanish.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'AswinAnish.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    // Manually scroll back to the current position
    window.scrollTo(0, window.scrollY);
  };

  return (
    <section>
      <section className="et-slide" id="tab-other">
        <h1>Resume</h1>
        <hr />
        {/* Download */}
        <div className="card text-center custom-card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">AswinAnish.pdf</h5>
            <p className="card-text">Click on the button to download my Resume.</p>
            <a href="/" className="btn btn-primary" onClick={handleDownload}>
              Download
            </a>
          </div>
          <div className="card-footer text-body-secondary">
            <Counter />
          </div>
        </div>

        <style>
          {`
            .custom-card {
              background: rgba(255, 255, 255, 0.2);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 12px;
              overflow: hidden;
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              margin: 20px;
            }

            .custom-card:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            }
          `}
        </style>

        {/* Download */}
      </section>
    </section>
  );
};

export default Resume;
