import React, { useState } from "react";
import { Container } from "./NavBar";

import "../Styles/Pricing.css";

function Pricing() {
  const { toggle } = React.useContext(Container);

  const [priceToggleBasic, setPriceToggleBasic] = useState(true);
  const [priceToggleStandart, setPriceToggleStandart] = useState(true);
  const [priceTogglePremium, setPriceTogglePremium] = useState(true);

  return (
    <div
      style={{ paddingTop: "100px" }}
      className={toggle ? "pricingBlack" : "pricingWhite"}
    >
      <div className="services">
        <section className={toggle ? "pricecol black" : "pricecol"}>
          <div className="icon">
            <i className="icon-magic"></i>
          </div>
          <h3>
            <span>Basic</span>
          </h3>
          <ul>
            <li>Video quality: good</li>
            <li>Resolution: 480p</li>
            <li>Screens you can watch on at the same time: 1</li>
            <li> {priceToggleBasic ? "7.99$/Mountly" : "59.99$/Yearly"} </li>
          </ul>
          <p>
            <button className="button">
              <span>Buy now</span>
            </button>
          </p>
          <div className="color__switcher-container">
            <div
              id="Color-switcher"
              onClick={() => setPriceToggleBasic(!priceToggleBasic)}
            >
              <div
                id={
                  priceToggleBasic
                    ? "Color-switcher-mover"
                    : "Color-switcher-moved"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </section>

        <section className={toggle ? "pricecol black" : "pricecol"}>
          <div className="icon">
            <i className="icon-leaf"></i>
          </div>
          <h3>
            <span>Standart</span>
          </h3>
          <ul>
            <li>Video quality: better</li>
            <li>Resolution: 720p</li>
            <li>Screens you can watch on at the same time: 2</li>
            <li>{priceToggleStandart ? "13.99$/Mountly" : "79.99$/Yearly"} </li>
          </ul>
          <p>
            <button className="button">
              <span>Buy now</span>
            </button>
          </p>
          <div className="color__switcher-container">
            <div
              id="Color-switcher"
              onClick={() => setPriceToggleStandart(!priceToggleStandart)}
            >
              <div
                id={
                  priceToggleStandart
                    ? "Color-switcher-mover"
                    : "Color-switcher-moved"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </section>

        <section className={toggle ? "pricecol black" : "pricecol"}>
          <div className="icon">
            <i className="icon-link"></i>
          </div>
          <h3>
            <span>Premium</span>
          </h3>
          <ul>
            <li>Video quality: best</li>
            <li>Resolution: 1080p</li>
            <li>Screens you can watch on at the same time: 3</li>
            <li>{priceTogglePremium ? "20.99$/Mountly" : "129.99$/Yearly"} </li>
          </ul>
          <p>
            <button className="button">
              <span>Buy now</span>
            </button>
          </p>
          <div className="color__switcher-container">
            <div
              id="Color-switcher"
              onClick={() => setPriceTogglePremium(!priceTogglePremium)}
            >
              <div
                id={
                  priceTogglePremium
                    ? "Color-switcher-mover"
                    : "Color-switcher-moved"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
