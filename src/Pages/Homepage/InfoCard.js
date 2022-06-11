import React from 'react';

const InfoCard = ({info}) => {
    console.log(info)
    return (
        <div>
            <div class={`card h-auto  md:h-[152px] ${info.bg} lg:card-side bg-primary shadow-xl`}>
  <figure><img className='p-2' src={info.img} alt="Album"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{info.heading}</h2>
    <p>{info.description}</p>
    
  </div>
</div>
        </div>
    );
};

export default InfoCard;