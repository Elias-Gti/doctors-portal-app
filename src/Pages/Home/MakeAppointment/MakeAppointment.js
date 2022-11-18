import React from 'react';
import bgImg from '../../../assets/images/appointment.png';
import drImg from '../../../assets/images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className=' mt-36 rounded-lg' style={{ backgroundImage: `url(${bgImg})` }}>

            <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={drImg} className="lg:block hidden -mt-36 w-1/2" />
                <div className='lg:w-1/2 text-white'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="font-bold btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>

        </section>        

    );
};

export default MakeAppointment;