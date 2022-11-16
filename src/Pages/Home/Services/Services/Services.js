import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const serviceItem=[
        {
            id:"1",
            icon: cavity,
            title:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:"2",
            icon: fluoride,
            title:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:"3",
            icon: whitening,
            title:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-6'>
            <div className='text-center my-20'>
                <h1 className='text-secondary font-bold text-xl'>SERVICES</h1>
                <h2 className='text-accent text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid justify-center align-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    serviceItem.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;