import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    // Path to the PDF file as a URL
    const pdfUrl = '/resume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';

    // Dispatch a click event on the link
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className='footer-text' style={{ display: 'flex', justifyContent: 'center' }}>
      <button className="vvd" onClick={handleDownload}>
        <span>Download Resume/CV</span>
      </button>
    </div>
  );
};

export default Resume;
