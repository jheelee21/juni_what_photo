import React, { useState } from "react";
import Logo from './Logo';

function CameraUpload() {
    const [camera, setCamera] = useState({
        cameraId: '',
        type: '',
        model: ''
    });

    const handleSubmit = async (e) => {
    };

    const handleChange = (e) => {
    };

    return (
        <div className='app'>
            <div className="upload">
                <h1>Add New Camera</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="type"
                        placeholder="Camera Type"
                        value={camera.type}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="model"
                        placeholder="Camera Model"
                        value={camera.model}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Camera</button>
                </form>
            </div>
            <Logo />
        </div>
    );
}

export default CameraUpload;