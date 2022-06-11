import React from 'react';

const Service = ({service}) => {
    const{name,slots}=service
    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class=" text-xl text-secondary text-center">{name}</h2>
          <p className='text-center'>
            {slots.length ? <span className='font-bold'>{slots[0]}</span>:<span className='text-red-600'>no slot available,try another date</span>}
          </p>
          <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces': 'space'} available</p>
          <div class="card-actions justify-center">
            <button disabled={slots.length===0} class="btn btn-secondary">Booking Appoinment</button>
          </div>
        </div>
      </div>
    );
};

export default Service;