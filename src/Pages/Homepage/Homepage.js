import React from 'react';

import Banner from './Banner';
import Contact from './Contact';

import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testomonial';

const Homepage = () => {
    return (
        <div className='p-0 md:p-12'>
           <Banner/>
           <Info></Info>
           <Services></Services>
          <MakeAppoinment></MakeAppoinment>
           <Testimonials/>
           <Contact/>
        </div>
    );
};

export default Homepage;