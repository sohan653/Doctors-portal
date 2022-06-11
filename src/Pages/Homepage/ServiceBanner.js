import React from 'react';
import serviceBanner from '../../assets/images/treatment.png'
const ServiceBanner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={serviceBanner} class="max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-5xl font-bold px-9">Box Office News!</h1>
      <p class="py-6 px-9">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='px-9 '>
      <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default ServiceBanner;