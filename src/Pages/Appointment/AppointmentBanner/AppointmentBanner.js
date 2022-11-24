import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectDate,setSelectedDate}) => {
    
    return (
        <div className="hero " style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col py-20 lg:flex-row-reverse">
                <img src={chair} alt='' className="lg:w-1/2  shadow-2xl" />

                <div className='lg:w-1/2'>
                    <DayPicker
                    mode='single'
                    selected={selectDate}
                    onSelect={setSelectedDate}
                    
                     />;
                     <p>Your Date is {format(selectDate,'PP')}</p>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;