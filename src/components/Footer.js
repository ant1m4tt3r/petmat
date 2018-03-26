import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="credits">
        <span>
          Feito por{" "}
          <a href="https://hugoazevedosoares.github.io/" target="_blank">
            Hugo Azevedo
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
