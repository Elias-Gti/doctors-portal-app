import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
        <div className='mx-5'>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointment></AvailableAppointment>
        </div>
    );
};

export default Appointment;