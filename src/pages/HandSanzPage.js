import React from "react";

import {MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import ProductSlideshow from "../components/ProductSlideshow";
import {Card} from "react-bootstrap";


export default class HandSanzPage extends React.Component {


    render() {



        return(





               <div>


                   <div style={{marginBottom: '40px',marginTop: '10px'}}>
                       <ProductSlideshow />
                   </div>


                   <div className="container-fluid" style={{justifyContent: 'center',alignItems: 'center',alignContent: 'center',width: '30rem', margin: "0 auto" }}>
                       <MDBContainer>
                           <MDBListGroup style={{width: "30rem"}}>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> Motion Activated
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> No More Contact &amp; Infection
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> Safety, Convenience, Cleanliness
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> Extra Large Content 2L
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> Low Power Consumption
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> Used in conjuction with Sanitizer, Liquid Soap, Shampoos &amp; more
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-check" aria-hidden="true"></i> ABS Body with strong polycarbonate 2L tank
                               </MDBListGroupItem>
                               <MDBListGroupItem className="d-flex justify-content-between align-items-center green-text">
                                   <i className="fa fa-star" aria-hidden="true"></i> 500 ml Free Sanitizer for limited time
                               </MDBListGroupItem>
                           </MDBListGroup>
                       </MDBContainer>
                   </div>


                   <div className="container-fluid" style={{marginTop: '40px'}}>

                       <div className="row  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">


                           <div className="col-md-3 col-lg-3 col-xl-3" />

                           <div className="col-sm-6 col-6 col-md-3 col-lg-3 col-xl-3">

                               <Card>
                                   <Card.Title><center>TS-01-PU</center></Card.Title>
                                   <hr/>
                                   <Card.Body>
                                       <Card.Text> <li>High Quality UV Sensor </li></Card.Text>
                                       <Card.Text><li> Apt for use in home and small office space</li> </Card.Text>
                                   </Card.Body>
                                   <Card.Footer>
                                       MRP: &#x20B9; 3500 * (incl of GST)
                                   </Card.Footer>
                               </Card>

                           </div>

                           <div className="col-sm-6 col-6 col-md-3 col-lg-3 col-xl-3">

                               <Card>
                                   <Card.Title><center>TS-01-CU</center></Card.Title>
                                   <hr />
                                   <Card.Body>
                                       <Card.Text><li>High Quality UV + Proximity Sensor</li></Card.Text>
                                       <Card.Text><li> Adjustable 3-80 cm Distance range</li></Card.Text>
                                       <Card.Text><li> For continued commercial use of more than 12 hrs/day </li></Card.Text>
                                       <Card.Text><li> Apt for use in Production lines, office space, Shopping malls, Restaurants, etc </li></Card.Text>
                                   </Card.Body>
                                   <Card.Footer>
                                       MRP: &#x20B9; 3000 * (incl of GST)
                                   </Card.Footer>
                               </Card>




                           </div>

                           <div className="col-md-3 col-lg-3 col-xl-3" />

                       </div>

                       <div className="jumbotron-fluid text-center py-5">

                           <text>* Prices are subject to change</text><br/>
                           <text>** The price is non-inclusive of Shipping charges. Shipping charges apply separately based on location-wise charges of shipping partner</text><br/>
                           <text>*** The images shown may differ from the actual product. No queries will be entertained in this regard</text>
                       </div>


                       <div className="jumbotron-fluid">
                           <text>Chat to Order</text><br/>
                           <a className="btn-outline-success bg-light border-dark mx-5" href="https://api.whatsapp.com/send?phone=919902630775" target="_blank">
                                  <i className="fa fa-whatsapp"></i> +91-990-263-0775
                           </a>
                           <br/>

                           <a className="btn-outline-success bg-light mx-5" href="https://api.whatsapp.com/send?phone=916362342879" target="_blank" style={{marginTop: '10px'}}>
                               <i className="fa fa-whatsapp"></i> +91-636-234-2879
                           </a>

                       </div>


                       <div className="jumbotron-fluid " style={{marginTop: '40px'}} >

                           <h1> Resources </h1>
                           <hr/>

                           <br/>

                           <a href="https://github.com/JohnX4321/johnx4321.github.io/raw/master/HandSanz_Manual.pdf" download>
                               HandSanz Automatic Dispenser Manual
                           </a>

                       </div>



                   </div>

               </div>





        );

    }


}
