import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = ({date,setDate}) => {
    
    return (
        <div>
            <div class="hero h-[500px] bg-base-200">
  <div class="hero-content  flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='chair' />
    <div>
     <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
     ></DayPicker>
     <p>You picked {format(date, 'PP')}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppoinmentBanner;