import React from 'react';

import './App.css';
import {BrowserRouter as Router,HashRouter,Switch,Route,Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HandSanzPage from "./pages/HandSanzPage";
import NavBar from "./components/NavBar";
import FooterPage from "./components/footer";
import IssuesPage from "./pages/IssuesPage";

export default class App extends React.Component{



  render() {


    return(

        <div className="container-fluid" style={{width: '100%',height: "100%"}}>

      <HashRouter>
        <NavBar/>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />

            <Route path="/products" component={HandSanzPage} />

            <Route path="/issues" component={IssuesPage} />
          </Switch>
        </div>
      </HashRouter>
          <FooterPage/>
        </div>
    )

  }

}
