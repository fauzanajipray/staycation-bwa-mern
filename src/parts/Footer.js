import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-1">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>
          <div className="col-auto mr-5 ">
            <h6 className="mt-2 ">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item ">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-5 ">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item ">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@stacation.id"
                >
                  support@stacation.id
                </Button>
              </li>
              <li className="list-group-item ">
                <Button type="link" isExternal href="tel:+6221224331999">
                  021 - 2433 - 1999
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Karanganyar, Solo</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <span className="col text-center copyrights">
            Copyright 2020 • All rights reserved • Staycation
          </span>
        </div>
      </div>
    </footer>
  );
}
