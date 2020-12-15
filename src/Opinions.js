import React, { Component } from "react";
import "./Aboutus.css";
import onas from "./images/onas.png";

class Opinions extends Component {
  render() {
    return (
      <>
        <div className="width">
          <div className="separator">OPINIE NASZYCH GOŚCI</div>
          <div className="flex">
            <img src={onas}></img>
            <div className="text">
              <h2>Domowa kuchnia i niepowtarzalny smak</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates pariatur magnam numquam. Provident nobis
                reprehenderit saepe corporis repellendus soluta molestiae
                aperiam aut itaque iste, cupiditate, dolores ad ratione
                blanditiis commodi.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Opinions;
