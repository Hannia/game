import React from 'react';
import './jackpot.css';

const JackPot = () => {
    return (
        <div className="container border-top background">
            <div className="row margin-t-5">
                <div className="col-sm-4 text-center"></div>
                <div className="col-sm-8 color-white ">
                    <div className="md-size">TOTAL JACKPOT</div>
                    <p className="color-total bg-size">$34638254</p>
                </div>
            </div>
            <div className="text-center">
                <button className="btn-sign">SIGN UP TO PLAY</button>
            </div>
            <div className="row container border-top text-center text-color">
                <div className="col-sm-3 img-block">
                    <img src="/assets/jp-img-4.png" alt="Leo Vegas" />
                </div>
                <div className="col-sm-3 img-block">
                    <img src="/assets/jp-img-3.png" alt="Mega Fortune" />
                </div>
                <div className="col-sm-3 img-block">
                    <img src="/assets/jp-img-2.png" alt="Hall of Gods" />
                </div>
                <div className="col-sm-3 img-block">
                    <img src="/assets/jp-img-1.png" alt="Arabian Nights" />
                </div>
                <div className="margin-b-5">

                </div>
                <div className="col-sm-3 margin-b-5">
                    <p>$5,621,262.56</p>
                </div>
                <div className="col-sm-3 margin-b-5">
                    <p>$5,721,262.56</p>
                </div>
                <div className="col-sm-3 margin-b-5">
                    <p>$9,981,262.56</p>
                </div>
                <div className="col-sm-3 margin-b-5">
                    <p>$4,621,253.56</p>
                </div>
            </div>
        </div >
    );
};
export default JackPot;