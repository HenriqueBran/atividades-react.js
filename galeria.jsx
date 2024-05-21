import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseButtonClick = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
      {selectedImageIndex !== null && (
        <div className="modal">
          <span className="close" onClick={handleCloseButtonClick}>&times;</span>
          <img src={images[selectedImageIndex]} alt={`Imagem ${selectedImageIndex + 1}`} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
