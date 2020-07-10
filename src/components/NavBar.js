import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/thingsenzlogo.jpeg'
import {Link} from "react-router-dom";

export default class NavBar extends React.Component{


    render() {
        return(
            <>
              <Navbar bg="dark" variant="dark" stylw={{marginBottom: '80px'}}>
                  <Navbar.Brand href="#home">
                      <img src={logo}
                        className="d-inline-block align-top" alt="ThingSenz logo"
                           width={40} height={40}
                      />{' '}
                      ThingSenz
                  </Navbar.Brand>
                  <Nav classname="mr-auto" >
                      <Nav.Link><Link to="/">Home</Link></Nav.Link>
                      <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                      <Nav.Link><Link to="/issues">Issues</Link></Nav.Link>
                  </Nav>
              </Navbar>
            </>
        )
    }

}
