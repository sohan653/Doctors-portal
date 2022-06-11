import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
import ServiceBanner from './ServiceBanner';
const servicesData=[{
    img:floride,
    heading:'Fluoride Treatment',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
},
{
    img:cavity,
    heading:'Cavity Filling',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
},
{
    img:teeth,
    heading:'Teeth Whitening Treatment',
    description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
}]
const Services = () => {
    return (
        <div className='py-6 mt-10'>
            <h1 className='text-center text-primary  font-bold'>Our Services</h1>
            <h1 className='text-center  text-3xl font-bold'>Services we provided</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 px-3 justify-center w-full gap-4 pt-10'>
                {servicesData.map(service => <ServiceCard key={service.heading} service={service}></ServiceCard>)}
            </div>
            <div>
                <ServiceBanner></ServiceBanner>
            </div>
        </div>
    );
};

export default Services;