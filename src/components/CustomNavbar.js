import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-trans navbar-fixed-top effect">
        <div className="container">
          <div className="flex-container">
            <div className="navbar-header flex-item">
              <div className="navbar-brand" href="https://github.com/alphadsy">
                PETMAT - UFOP
              </div>
            </div>
            <ul className="nav navbar-nav flex-item">
              <li>
                <NavLink
                  to="/"
                  isActive={(match, location) => location.pathname === "/"}
                >
                  CPF
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/barcode"
                  isActive={(match, location) =>
                    location.pathname === "/barcode"
                  }
                >
                  Código de Barras
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/creditcard"
                  isActive={(match, location) =>
                    location.pathname === "/creditcard"
                  }
                >
                  Cartão de Crédito
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-item pull-right">
              <li>
                <NavLink
                  to="/about"
                  isActive={(match, location) => location.pathname === "/about"}
                >
                  Sobre
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
