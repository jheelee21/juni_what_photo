import React, { useState, useEffect } from "react";
import Logo from './Logo';

const uri = process.env.NODE_ENV === 'production' ? '/api/cameras' : 'http://localhost:3000/api/cameras';

function CameraUpload() {
    const [camera, setCamera] = useState({
        type: '',
        model: ''
    });
    const [cameras, setCameras] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchCameras();
    }, []);

    const fetchCameras = async () => {
        const response = await fetch(uri);
        const data = await response.json();

        if (response.ok) {
            setCameras(data.data);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/cameras', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(camera)
            });

            const data = await response.json();

            if (data.success) {
                setMessage('Camera added successfully!');
                setCamera({
                    type: '',
                    model: ''
                });
                // Refresh the camera list
                fetchCameras();
            } else {
                setMessage('Error adding camera');
            }
        } catch (error) {
            setMessage('Error adding camera');
            console.error('Error adding camera:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCamera(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='app'>
            <div className="upload">
                <h1>Add New Camera</h1>
                {message && (
                    <p className={message.includes('Error') ? 'error-message' : 'success-message'}>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="type"
                        placeholder="Camera Type"
                        value={camera.type}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="model"
                        placeholder="Camera Model"
                        value={camera.model}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Add Camera</button>
                </form>

                {/* Display existing cameras */}
                {cameras.length > 0 && (
                    <div className="camera-list">
                        <h2>Existing Cameras</h2>
                        <ul>
                            {cameras.map((cam, index) => (
                                <li key={index}>
                                    {cam.type} - {cam.model}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Logo />
        </div>
    );
}

export default CameraUpload;