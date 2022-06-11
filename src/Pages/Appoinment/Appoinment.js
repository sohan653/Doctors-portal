import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appoinment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div className='p-0 md:p-12'>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appoinment;