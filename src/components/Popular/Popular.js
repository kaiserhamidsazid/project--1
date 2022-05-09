import img1 from '../Carousel/pic-4.jpg'
import  img2 from '../Carousel/pic-5.jpg'
import './popular.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Popular extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className='popular'>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
           <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

