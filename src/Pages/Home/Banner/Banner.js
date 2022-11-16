import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';


const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-content flex-col py-20 lg:flex-row-reverse">
          <img src={chair} alt='' className="lg:w-1/2  shadow-2xl" />
          <div className='lg:w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="font-bold btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
    
      </div>
    );
};

export default Banner;