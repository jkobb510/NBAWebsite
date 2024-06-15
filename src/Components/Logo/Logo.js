import React from 'react';
import './styles.css'; // Import the CSS file

const ImageComponent = () => {
  return (
    <div className="img-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NBA_script.svg/320px-NBA_script.svg.png" alt="NBA Logo" className='image'/>
    </div>
  );
}

export default ImageComponent;