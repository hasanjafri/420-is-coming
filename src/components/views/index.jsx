import React from 'react';

import Hero from '../hero';

import CannabisPlantImg from '../../assets/images/blur-cannabis.jpg';

function Index() {
    return(
        <React.Fragment>
           <Hero heroImg={CannabisPlantImg} title="Welcome to United Piff Services" />
        </React.Fragment>
    )
}

export default Index;