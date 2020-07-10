import React from "react";
import {Slide} from 'react-slideshow-image';
import './slide.css';
import 'react-slideshow-image/dist/styles.css';
import prod1 from '../assets/prod1.jpeg';
import prod2 from '../assets/prod2.jpeg';
import prod3 from '../assets/prod3.jpeg';
import prod4 from '../assets/prod4.jpeg';
import prod5 from '../assets/prod5.jpeg';
import prod6 from '../assets/prod6.jpeg';
import prod7 from '../assets/prod7.jpeg';

const slideshowProperties={
    duration: 2500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true
};


const ProductSlideshow=()=>(
    <div className="slide-container bg-light">
        <Slide {...slideshowProperties}>
            <div className="each-slide text-center">

                <img src={prod1} height={300} width={300} className="justify-content-center"/>

            </div>
            <div className="each-slide text-center">
                <img src={prod2} height={300} width={300}/>
            </div>
            <div className="each-slide text-center">
                <img src={prod3} height={300}/>
            </div>
            <div className="each-slide text-center">
                <img src={prod4} height={300} />
            </div>
            <div className="each-slide text-center">
                <img src={prod5} height={300} width={300}/>
            </div>
            <div className="each-slide text-center">
                <img src={prod6} height={300} width={300}/>
            </div>
            <div className="each-slide text-center">
                <img src={prod7} height={300} width={300}/>
            </div>
        </Slide>
    </div>
);

export default ProductSlideshow;
