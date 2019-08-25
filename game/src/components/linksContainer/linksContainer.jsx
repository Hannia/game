import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './linksContainer.css'

const LinksContainer = () => {

    return (
        <div className="container background link-group ">
            <div className="row ">
                <div className="ml-5 col-sm-2 margin-t-b">
                    <p><a>ABOUT US</a></p>
                    <p><a>FRONTPAGE</a></p>
                    <p><a>PLAY OKAY</a></p>
                </div>
                <div className="col-sm-2 margin-t-b">
                    <p><a>FAO</a></p>
                    <p><a>CASINOS GAMES</a></p>
                    <p><a>BLOG</a></p>
                </div>
                <div className="col-sm-2 margin-t-b">
                    <p><a>WORK AT WAGER</a></p>
                    <p><a>AFFILIATES</a></p>
                    <p><a>PRIVACY NOTICE</a></p>
                </div>
                <div className="col-sm-2 margin-t-b">
                    <p><a>CONTACT US</a></p>
                </div>
            </div>









        </div>

    );
};

export default LinksContainer;