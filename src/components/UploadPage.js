import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function UploadPage() {
    return (
        <div className='app'>
            <div className='upload'>
                <Link key='camera' to='/upload/camera'>
                    Camera
                </Link>
                <Link key='trip' to='/upload/trip'>
                    Trip
                </Link>
                <Link key='photo' to='/upload/photo'>
                    Photo
                </Link>
            </div>
            <Logo />
        </div>
    );
}

export default UploadPage;