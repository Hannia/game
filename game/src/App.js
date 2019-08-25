import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';
import AllGame from './components/allGames/allgames';
import Account from './components/account/account';
import Footer from './components/footer/footer';
import JackPot from './components/jackpot/jackpot';
import NavBar from './components/navBar/navBar';
import LinksContainer from './components/linksContainer/linksContainer';

function App() {
  return (
    <body background="/assets/BG.jpg" >
      <div className="container">
        <NavBar />
        <Banner />
        <JackPot />
        <AllGame />
        <Account />
        <LinksContainer />
        <Footer />
      </div>
    </body>


  );
}

export default App;
