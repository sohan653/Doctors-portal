import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>available appoinments {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
        {
            services.map(service => <Service key={service._id} service={service}></Service>)
        }
            </div>
        </div>
    );
};

export default AvailableAppointments;