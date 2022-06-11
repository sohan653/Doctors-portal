import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div class="card card-compact min-w-min bg-base-100 shadow-xl">
        <figure><img src={service.img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="text-center font-bold">{service.heading}</h2>
          <p className='text-center'>{service.description}</p>
          
        </div>
      </div>
    );
};

export default ServiceCard;