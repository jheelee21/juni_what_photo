import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const images = [
    {
        src: "/photo/DSCF3529.JPG",
    },
    {
        src: "/photo/DSCN3502.JPG",
    },
    {
        src: "/photo/DSCN3538.JPG",
    },
    {
        src: "/photo/DSCN3844.JPG",
    },
    {
        src: "/photo/DSCN4233.JPG",
    }
];

function PhotoGallery() {
    const { photoId } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 300);
    };

    const handleBackClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            navigate('/');
        }, 300);
    };

    return (
        <div className='app'>
            <div className={`photo-gallery ${isClosing ? 'closing' : ''}`}>
                <div className="image-gallery">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="image-gallery-slide"
                            onClick={() => handleImageClick(image)}
                        >
                            <img src={image.src} alt={image.description} />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className={`modal ${isClosing ? 'closing' : ''}`} onClick={handleCloseModal}>
                        <div className="modal-content">
                            <img src={selectedImage.src} alt={selectedImage.description} />
                            <div className="modal-description">{selectedImage.description}</div>
                        </div>
                    </div>
                )}
            </div>
            {!selectedImage && <Logo onClick={handleBackClick} />}
        </div>
    );
}

export default PhotoGallery;