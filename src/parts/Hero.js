import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.png";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import FormatNumber from "utils/FormatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
    console.log(props.refMostPicked.current.offsetTop - 10);
  }
  return (
    <section className="container pt-5" id="hero">
      <Fade bottom>
        <div className="row align-item-center">
          <div className="col-auto pr-5 " style={{ width: 530 }}>
            <h1 className=" font-weight-bold mb-3 line-height-1">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-5 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              style={{ height: 50 }}
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                ></img>
                <h6 className="mt-3">
                  {FormatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                ></img>
                <h6 className="mt-3">
                  {FormatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                ></img>
                <h6 className="mt-3">
                  {FormatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div className="image-hero" style={{ width: 555, height: 449 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: 0,
                  zIndex: 1,
                  width: 520,
                  height: 410,
                }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "30px 0 0 30px", width: 520, height: 410 }}
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
