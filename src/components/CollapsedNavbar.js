import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./CollapsedNavbar.css";

export default class CollapsedNavbar extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <nav className="cd-stretchy-nav">
        <a className="cd-nav-trigger" href="#0">
          <span aria-hidden="true" />
        </a>

        <ul>
          <li>
            <NavLink
              to="/"
              isActive={(match, location) => location.pathname === "/"}
            >
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/barcode"
              isActive={(match, location) => location.pathname === "/barcode"}
            >
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creditcard"
              data="CPF"
              isActive={(match, location) =>
                location.pathname === "/creditcard"
              }
            >
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              isActive={(match, location) => location.pathname === "/about"}
            >
            </NavLink>
          </li>
        </ul>

        <span aria-hidden="true" className="stretchy-nav-bg" />
      </nav>
    );
  }
}
