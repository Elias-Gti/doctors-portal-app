import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [selectDate,setSelectedDate]=useState(new Date())
   
    return (
        <div className='mx-5'>
            <AppointmentBanner
            selectDate={selectDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppointment
            selectDate={selectDate}
            ></AvailableAppointment>
            
            
        </div>
    );
};

export default Appointment;