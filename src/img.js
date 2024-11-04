import React from 'react';
import './ImageViewer.css'; // Ensure you have a CSS file for styling

// Import images
import thumbnail from './component/srinithinsomasundaram.jpg';
import fullsize from './component/srinithinsomasundaram.jpg';

const ImageViewer = () => {
  return (
    <div className="image-viewer">
      <a href={fullsize} target="_blank" rel="noopener noreferrer">
        <img 
          src={thumbnail} 
          alt="Srinithin Somasundaram, Founder and CEO of Yesp Tech and Yesp" 
        />
      </a>
    </div>
  );
};

export default ImageViewer;
