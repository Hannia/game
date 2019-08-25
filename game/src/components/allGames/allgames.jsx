import React, { Component } from 'react';
import './allgame.css';

class AllGame extends Component {
    state = {}
    render() {
        return (
            <div className="border-m-top-50 background text-color block">
                <div className="container block">
                    <div className="row">
                        <div className="col-sm-9">
                            <a className="nav-search" href="">ALL GAMES</a>
                            <a className="nav-search" href="">SLOTS</a>
                            <a className="nav-search" href="">TABLE GAMES</a>
                            <a className="nav-search" href="">LIVE CASINO</a>
                            <a className="nav-search" href="">VIDEO POKER</a>
                            <a className="nav-search" href="">OTHER GAMES</a>
                        </div>
                        <div className="col-sm-3 group">
                            <input className="input-search" type="text" placeholder="Search Game" aria-label="Search Games" />
                            <i className="fa icon fa-search"></i>
                        </div>
                    </div>
                    <div className="text-color margin-left">
                        <div><span>FEATURED GAMES [14]</span></div>
                        <div className="imgGame">
                            <img src="/assets/game1.jpg" alt="game" />
                            <img className="imgGame" src="/assets/game2.jpg" alt="game" />
                            <img className="imgGame" src="/assets/game3.jpg" alt="game" />
                            <img className="imgGame" src="/assets/game4.jpg" alt="game" />
                        </div>

                    </div>
                    <div className="imgGame margin-left">
                        <div><span>SLOTS [55]</span></div>
                        <img src="/assets/game1.jpg" alt="game" />
                        <img src="/assets/game2.jpg" alt="game" />
                        <img src="/assets/game3.jpg" alt="game" />
                        <img src="/assets/game4.jpg" alt="game" />
                    </div>
                    <div className="imgGame margin-left">
                        <div><span>TABLE GAMES [47]</span></div>
                        <img src="/assets/game1.jpg" alt="game" />
                        <img src="/assets/game2.jpg" alt="game" />
                        <img src="/assets/game3.jpg" alt="game" />
                        <img src="/assets/game4.jpg" alt="game" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AllGame;
