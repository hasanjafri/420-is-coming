import React from 'react';

import Hero from '../hero';
import Carousel from '../carousel';

import CannabisPlantImg from '../../assets/images/blur-cannabis.jpg';

function Index() {
  return (
    <React.Fragment>
      <Hero heroImg={CannabisPlantImg} title="Welcome to Loud Packs" />
      <Carousel />
    </React.Fragment>
  );
}

export default Index;
