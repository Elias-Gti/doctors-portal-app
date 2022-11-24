import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({selectDate}) => {
    const [appointmentOption,setAppointmentOption]=useState([]);
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOption(data))
    },[])
    return (
        <div>
            <p className='text-center text-secondary font-bold my-11'>Available Date :{format(selectDate,'PP')}</p>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    appointmentOption.map(option=><AppointmentOption key={option._id} option={option}></AppointmentOption>)
                }
            </div>
            
        </div>
    );
};

export default AvailableAppointment;