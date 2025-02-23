import React from "react";
import {MDBCol,MDBContainer,MDBRow,MDBFooter} from "mdbreact";
import 'font-awesome/css/font-awesome.css';


const FooterPage=()=>(
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0" style={{marginTop: '80px'}}>
        <div style={{backgroundColor: "#6351ce"}}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className="py-4 d-flex align-items-center">
                    <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                        <h6 className="mb-0 white-text">
                            Get connected with us on social networks
                        </h6>
                    </MDBCol>
                    <MDBCol md="6" lg="7" className="text-center text-md-right">
                        <a className="fb-ic ml-0" href="https://www.facebook.com/thingsenz/" target="_blank">
                            <i className="fa fa-facebook-f white-text mr-lg-4" />
                        </a>
                        <a className="ins-ic" style={{marginLeft: '40px'}} href="https://www.instagram.com/thingsenz/?hl=en" target="_blank">
                            <i className="fa fa-instagram white-text mr-lg-4" />
                        </a>

                        <a className="utube" style={{marginLeft: '40px'}} href="https://www.youtube.com/channel/UChhWwMDf5IB-ZoU-KzEiWfQ" target="_blank">
                            <i className="fa fa-youtube-play white-text mr-lg-4" />
                        </a>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
            <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                        <strong>ThingSenz India</strong>
                    </h6>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                        <strong>Contact</strong>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                    <p>
                        <i className="fa fa-home mr-3" /> c/o Skylink Enterprises, J-94, Anjaneya Block, Sheshadripuram, Bengaluru-560020
                    </p>
                    <p>
                        <i className="fa fa-envelope mr-3" /><a href="mailto:thingsenz@gmail.com?subject=HandSanz">thingsenz@gmail.com</a>
                    </p>
                    <p>
                        <i className="fa fa-phone mr-3" /><a href=""> Redacted </a>
                    </p>

                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>Published: {new Date().getFullYear()} thingsenz.github.io <br/><hr/></MDBContainer>
        </div>

    </MDBFooter>
);

export default FooterPage;
