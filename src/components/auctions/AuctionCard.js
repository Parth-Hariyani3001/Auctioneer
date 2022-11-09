import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CountdownTimer from "./countdown";

export const AuctionCard = ({ item }) => {
  const { bidAuction, endAuction, currentUser } = useContext(AuthContext);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          style={{
            height: "320px",
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">{item.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              <CountdownTimer
                hours={item.duration.hrs}
                minutes={item.duration.mins}
                seconds={item.duration.secs}
              />
            </h5>
          </div>
          <p className="card-text">{item.desc}</p>
          <div className="d-flex justify-content-between align-item-center">
            <div>
              {!currentUser ? (
                <div
                  onClick={() => bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : currentUser.email === item.email ? (
                <div
                  onClick={() => endAuction(item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : currentUser.email === item.curWinner ? (
                <p className="display-6">Winner</p>
              ) : (
                <div
                  onClick={() => bidAuction(item.id, item.curPrice)}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="display-6">${item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
