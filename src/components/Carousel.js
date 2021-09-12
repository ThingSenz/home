import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import React from "react";
import iot1 from '../assets/iot1.png';
import iot2 from '../assets/iot2.jpg';
import banner3 from '../assets/banner3.jpg';
import img1 from '../assets/img1.jpeg';
import dwn from '../assets/download.png';

import cotrack2 from '../assets/cotrack2.jpg';

/*const SimpleCarousel=()=>{
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
}*/

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
            <div className="container-fluid " style={{backgroundColor: "purple"}}>
                <div className="row" style={{backgroundColor: "#32cd32"}}>
                    <div className="text-left col-md-6 border-0">
                        <h2 className="display-4"> HandSanz </h2>
                        <p className="lead">Automatic Sanitizer Dispenser in this pandemic time to ensure cleanliness and protection germs and virus.
                            Now available with a free 500 ml free Sanitizer pack.<br/> Two models available to fill the needs of different environments. Shipping throughout India based on availability by Delivery Partner </p>
                    </div>
                    <div className="col-md-2 border-0" />
                    <div className="img-thumbnail col-md-4 border-0 bg-warning">
                        <img src={img1} alt="IoT"  style={{width: '400px',height: '400px'}} className="img-thumbnail col-md-12 border-0" id="image1" />
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid bg-info" style={{height: '450px'}}>
                    <div className="row">
                        <div className="img-thumbnail col-md-4 border-0 bg-info">

                            <img src={dwn} alt="IoT devices" className="img-thumbnail col-md-12 border-0"
                                 id="image2" />

                        </div>

                        <div className="col-md-2 border-0" />
                        <div className="text-right col-md-6 border-0 bg-info">
                            <h2 className="display-4"> Covid Tracker </h2>
                            <p className="lead">An android application to monitor the current spread of the Covid pandemic in realtime. Available on Github </p>
                            <a  style={{backgroundColor: 'black'}} href="https://github.com/JohnX4321/corona_tracker" target="_blank"> <i className="fa fa-github" style={{height: '40px'}} color={"black"}></i> </a>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid " style={{backgroundColor: "purple",height: '450px'}}>
                    <div className="row">
                        <div className="img-thumbnail col-md-4" style={{backgroundColor: "purple"}}>
                            <img src={banner3} style={{width: '400px',height: '400px'}} alt="IoT devices" className="img-thumbnail col-md-12 border-0"
                                 id="image2" />
                        </div>

                        <div className="col-md-2 border-0" />
                        <div className="text-right col-md-6 border-0" style={{backgroundColor: 'purple'}}>
                            <h2 className="display-4">Join the bandwagon</h2>
                            <p className="lead">With the growing research into materials and processor technology, interest has grown steadily in this field. Be an electronics engineer and design your dream product<br/>
                            Face the challenges and design your dream product. We will showcase it on our YouTube Channel.</p>

                        </div>

                    </div>
                </div>
            </div>


        </Slider>
    )
}

export default SimpleCarousel;
