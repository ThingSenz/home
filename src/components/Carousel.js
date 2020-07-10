import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import React from "react";
import iot1 from '../assets/iot1.png';
import iot2 from '../assets/iot2.jpg';
import banner3 from '../assets/banner3.jpg';

const SimpleCarousel=()=>{
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} style={{marginBottom: '40px'}}>
            <div className="container-fluid bg-success">
                <div className="row">
                    <div className="text-left col-md-6 border-0">
                        <h2 className="display-4">Gain Knowledge</h2>
                        <p className="lead">IoT is an amazing topic with related uses in Home Automation.<br /> With a
                            single grasp of the knowledge, each one of you<br />
                                can develop many devices on your own. You can implement the<br /> concept in your own
                                home. Be amazed at what you learn</p>
                    </div>
                    <div className="col-md-2 border-0" />
                    <div className="img-thumbnail col-md-4 border-0 bg-success">
                        <img src={iot1} alt="IoT" className="img-thumbnail col-md-12 border-0" id="image1" />
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid bg-info">
                    <div className="row">
                        <div className="img-thumbnail col-md-4 border-0 bg-info">
                            <img src={iot2} alt="IoT devices" className="img-thumbnail col-md-12 border-0"
                                 id="image2" />
                        </div>

                        <div className="col-md-2 border-0" />
                        <div className="text-right col-md-6 border-0">
                            <h2 className="display-4">Build your Own Projects</h2>
                            <p className="lead">With the knowledge you gain, you can innovate or invent new
                                projects<br/> and who knows you might even build your own company.<br/>
                                    We will guide you to reach your dreams.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid " style={{backgroundColor: "purple"}}>
                    <div className="row">
                        <div className="img-thumbnail col-md-4 border-0">
                            <img src={banner3} alt="IoT devices" className="img-thumbnail col-md-12 border-0"
                                 id="image2" />
                        </div>

                        <div className="col-md-2 border-0" />
                        <div className="text-right col-md-6 border-0">
                            <h2 className="display-4">Join the bandwagon</h2>
                            <p className="lead">With the growing research into materials and processor technology, interest has grown steadily in this field. Be an electronics engineer and design your dream product</p>
                        </div>

                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default SimpleCarousel;
