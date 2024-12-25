import React, { useState } from 'react';
import Logo from './Logo';

function PhotoUpload() {
    const [photo, setPhoto] = useState({
        imageId: '',
        tripId: '',
        cameraId: '',
        isCover: false,
        hasTitle: false,
        s3Url: '',
        uploadDate: ''
    });

    const handleSubmit = async (e) => {
    };

    const handleChange = (e) => {
    };

    return (
        <div className='app'>
            <div className="upload">
                <h1>Add New Photo</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='file' 
                        name='photo'
                        onChange={handleChange}
                    />
                    <label>
                        Trip: 
                        <select name='trip' value={photo.tripId} onChange={handleChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>
                    </label>
                    <label>
                        Camera:
                        <select name='camera' value={photo.cameraId} onChange={handleChange}>
                            <option value='1'>1</option>
                        </select>
                    </label>
                    <button type="submit">Add Photo</button>
                </form>
            </div>
            <Logo />
        </div>
    );
}

export default PhotoUpload;