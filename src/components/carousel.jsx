import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/carousel.css';

const data = [
    {
        id: 0,
        image: 'https://s3.amazonaws.com/leafly/content/leaflys-visual-quality-guide-to-selecting-cannabis/GAtB6sxoQYOGa6oOl3Eg_Grape%20Ape.jpg'
    },
    {
        id: 1,
        image: 'https://image.shutterstock.com/image-photo/close-blue-walker-marijuana-bud-260nw-557649868.jpg'
    },
    {
        id: 2,
        image: 'https://image.shutterstock.com/image-photo/close-blue-walker-marijuana-bud-260nw-557649868.jpg'
    },
    {
        id: 3,
        image: 'https://image.shutterstock.com/image-photo/close-blue-walker-marijuana-bud-260nw-557649868.jpg'
    },
    {
        id: 4,
        image: 'https://image.shutterstock.com/image-photo/close-blue-walker-marijuana-bud-260nw-557649868.jpg'
    },
    {
        id: 5,
        image: 'https://image.shutterstock.com/image-photo/close-blue-walker-marijuana-bud-260nw-557649868.jpg'
    }
]

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 333,
    arrows: false,
    dots: false,
    autoplay: true,
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
        <div id={product.id} className="MoviePoster" style={{backgroundImage: `url(${product.image})`, backgroundSize: 'stretch'}} />
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