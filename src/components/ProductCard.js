import React from "react";
import {MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCardTitle,MDBCol} from "mdbreact";
import {Link} from "react-router-dom";

const ProductCard=({imgUrl,title,body,goto})=>(
    <MDBCol style={{maxWidth: "22rem"}}>
        <MDBCard >
            <MDBCardImage className="img-fluid" src={imgUrl} waves/>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{body}</MDBCardText>
                <MDBBtn><Link to={goto}>View</Link></MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
);

export default ProductCard;
