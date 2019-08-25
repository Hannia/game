import React, { Component } from 'react';
import './jackpot.css';

class JackPot extends Component {
    state = {
        duration: 5000,
        number: 34638253,
        initNumber: 0
    }

    componentDidMount() {
        this.animate(this.state.number);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    animate(number) {
        this.timer = setInterval(
            function () {
                if (this.state.initNumber < number) {
                    let add = this.state.initNumber + Math.floor(Math.random() * 10000);;
                    this.setState({ initNumber: add });
                } else {
                    clearInterval(this.timer);
                }
            }.bind(this), 50);
    }

    render() {
        return (<div className="container border-top background">
            <div className="row margin-t-5">
                <div className="col-sm-4 text-center"></div>
                <div className="col-sm-8 color-white ">
                    <div className="md-size">TOTAL JACKPOT</div>
                    <p className="counter color-total bg-size">${this.state.initNumber}</p>
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
        </div >);
    }
}

export default JackPot;
