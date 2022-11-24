import React from 'react';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100  text-center shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length>0 ? slots[0]:'Try another day'}</p>
                <p>{slots.length} {slots.length>1 ?"spaces":"space"} as available</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Book Appointment</button>
                    <label htmlFor="booking-modal" className="btn">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;