import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import locat from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info1={
    img:clock,
    heading:'Opening Hours',
    description:'Lorem Ipsum is simply dummy text of the pri',
    bg:'bg-gradient-to-r from-secondary to-primary'
}
const info2={
    img:locat,
    heading:'Visit our location',
    description:'LoremBrooklyn, NY 10036, United States Ipsum is simply dummy text of the pri',
    bg:'bg-neutral'
}
const info3={
    img:phone,
    heading:'Contact us now Hours',
    description:'+000 123 456789',
    bg:'bg-gradient-to-r from-secondary to-primary'
}

const Info = () => {
    return (
        <div className='grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 gap-11 px-3'>
            <InfoCard info={info1}></InfoCard>
            <InfoCard info={info2}></InfoCard>
            <InfoCard info={info3}></InfoCard>
        </div>
    );
};

export default Info;