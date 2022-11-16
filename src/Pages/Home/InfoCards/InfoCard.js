import React from 'react';

const InfoCard = ({card}) => {
    const {title,disc,icon,bgClass}=card;
    console.log(title);
    return (
        <div className={`card card-side ${bgClass} p-6 shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{disc}</p>                
            </div>
        </div>
    );
};

export default InfoCard;