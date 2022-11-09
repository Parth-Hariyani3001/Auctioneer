import React, { useContext } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';
import moment from "moment-timezone";
import CountdownTimer from './countdown';

export const AuctionCard = ({ item } ) => {
  
  // if (completed) {
  //   return null;
  // }
  console.log(item)
  console.log(item.bidAuction)
  //let timerData = countdownTimer(item.duration.hrs,item.duration.mins,item.duration.secs)
 
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">{item.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
            {/* //{timerData.hours} hr: {timerData.minutes} min: {timerData.seconds} sec */}
            <CountdownTimer hours={item.duration.hrs} minutes={item.duration.mins} seconds={item.duration.secs}/>
            </h5>
          </div>
           <p className="card-text">{item.desc}</p>
          <div className="d-flex justify-content-between align-item-center">           
            <div>
              {!item.owner ? (
                <div
                  onClick={() => item.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : owner.email === item.email ? (
                <div
                  onClick={() => endAuction(item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : item.owner.email === item.curWinner ? (
                <p className="display-6">Winner</p>
              ) : (
                <div
                  onClick={() =>
                    item.bidAuction(item.id, item.curPrice)
                  }
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

