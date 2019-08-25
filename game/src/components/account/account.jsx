import React from 'react';
import './account.css';

const Account = () => {
    return (
        <div className="container background color-white">
            <div className="row">
                <div className="col-sm-6 ml-5 margin-t-b">
                    <p className="size-sm">YOUR WELCOME BONUS</p>
                    <div className="size-bg">
                        <span className="text-bold">200 </span>
                        <span>FREE SPINS </span>
                        <span>+</span>
                    </div>
                    <p className="size-md">5 DEPOSIT BONUSES WORTH</p>
                    <p className="size-bg margin-b-off">UP TO <span className="text-bold">$1200</span></p>
                    <p><a className="link" href="">BONUS TERMS</a></p>
                    <button className="btn-create" >CREATE FREE ACCOUNT</button>
                </div>
                <div className="col-sm-4 img-gift">
                    <img className="svg-circle" src="/assets/icon.svg" alt="icon" />
                    <i className="fa fa-gift fa-6 animate" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
};
export default Account;