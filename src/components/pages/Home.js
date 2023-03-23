import React from 'react';

const Resume = () => {
  const downloadDocument = () => {
    window.location.href = 'https://docs.google.com/document/d/1b6U17wSDXXEBFp4xWJBAmE25XBhSjuXBSgLoaZLxruY/edit?usp=sharing';
  };

  return (
    <div className="resume-container">
      <h1 className="resume-heading text-light text-center">Resume</h1>
      <h2 className="resume-subheading text-light text-center">Click the button below to download my FULL resume.</h2>
      <div className="resume-download">
        <button className="btn btn-primary" onClick={downloadDocument}>
          Download
        </button>
      </div>
      <div className="resume-document">
        <iframe 
          title="resume-document"
          src="https://docs.google.com/document/d/e/2PACX-1vQ6G24ac6R6kZ9ARhc9l_LDrmsWI4sZLphYjn0nKQlKKWHpvPuObqYrDAOpApRGXVnNJJoz8Vir21I3/pub?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          style={{ overflow: 'auto' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
