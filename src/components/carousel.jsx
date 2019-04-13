import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/carousel.css';

const data = [
    {
        id: 0,
        color: 'blue'
    },
    {
        id: 1,
        color: 'black'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'blue'
    },
    {
        id: 4,
        color: 'black'
    },
    {
        id: 5,
        color: 'green'
    }
]

const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '75px',
    infinite: true,
    slidesToShow: 3,
    speed: 333,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

export default class Carousel extends Component {
  render() {

    const products = data.map(product => (
      <div key={product.id} className="Movie">
        <div id={product.id} className="MoviePoster" style={{backgroundColor: product.color}} />
      </div>
    ))

    return (
      <div className="MovieSlider">
        <h2>Popular Products</h2>
        <Slider {...settings}>{products}</Slider>
      </div>
    );
  }
}