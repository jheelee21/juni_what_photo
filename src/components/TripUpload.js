import React, { useState } from 'react';
import Logo from './Logo';

function TripUpload() {
    const [trip, setTrip] = useState({
        tripId: '',
        location: '',
        date: ''
    });

    const handleSubmit = async (e) => {
    };

    const handleChange = (e) => {
    };

    return (
        <div className='app'>
            <div className="upload">
                <h1>Add New Trip</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={trip.location}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={trip.date}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Trip</button>
                </form>
            </div>
            <Logo />
        </div>
    );
}

export default TripUpload;