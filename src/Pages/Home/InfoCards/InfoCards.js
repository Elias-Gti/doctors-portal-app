import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cards = [
        {
            id: '1',
            title: 'Opening Hours',
            disc: '5.00pm to 6pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        },
        {
            id: '2',
            title: 'Visit our location',
            disc: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: '3',
            title: 'Contact us now',
            disc: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='gap-4 grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1'>

            {
                cards.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            
            }

        </div>
    );
};

export default InfoCards;