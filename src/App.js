import React, { Component } from "react";
import Media from "react-media";

import { Route, BrowserRouter } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CollapsedNavbar from "./components/CollapsedNavbar";
import CPF from "./components/CPF";
import BarCode from "./components/BarCode";
import CreditCard from "./components/CreditCard";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Media query="(max-width: 900px)">
            {matches => (matches ? <CollapsedNavbar /> : <CustomNavbar />)}
          </Media>
          <div className="app-content">
            <Route exact path="/" component={CPF} />
            <Route path="/barcode" component={BarCode} />
            <Route path="/creditcard" component={CreditCard} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
