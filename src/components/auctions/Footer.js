import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>BUY</h4>
            <ul className="list-unstyled">
              <li>Registration</li>
              <li>Auctioneer Money Back Gurantee</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Sell</h4>
            <ul className="list-unstyled">
              <li>Start Selling</li>
              <li>Learn to Sell</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>About us</h4>
            <ui className="list-unstyled">
              <li>Info</li>
              <li>Query</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Auctioneer | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
