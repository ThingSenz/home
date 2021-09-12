import React from "react";

import SimpleCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import prod1 from '../assets/prod1.jpeg';


export default class HomePage extends React.Component {


    render() {
        return (
            <div>

                <div>
                <SimpleCarousel/>
                </div>

                <div className="text-center">
                    <text  className="purple-text">PRODUCTS</text>
                </div>

                <div style={{marginLeft: '20px'}} className="container-fluid">
                <ProductCard title="HandSanz" body="Automatic Sanitizer Dispenser to fill your needs. Suitable for all locations" imgUrl={prod1} goto="/products"/>
                </div>
            </div>
        );
    }

}
