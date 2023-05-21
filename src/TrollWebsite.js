import React, { useState, useEffect } from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Welcome to</h1>
      <h1 className="header-title-large">my portfolio</h1>
      <p className="header-description">----------pls hire me </p>
    </header>
  );
};

const Content = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);
  const [countdown, setCountdown] = useState(6);
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleCookieAccept = () => {
    setShowCookiePopup(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerVisible(true);
      setCountdown(3);
      setTimeout(() => {
        setTimerVisible(false);
      }, 2000);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown > 0 && timerVisible) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown, timerVisible]);

  return (
    <div className="content">
      <h2 className="content-title">Content Section</h2>
      <p className="content-text">contact me rinaxosman@gmail.com for job offer</p>
      <button
        className={`content-button ${buttonClicked ? 'button-clicked' : ''}`}
        onClick={handleClick}
      >
        contact me
      </button>
      {timerVisible && (
        <div className="timer-container">
          <div className="timer-text">Hurry up!!</div>
          <div className="timer-countdown">{countdown}</div>
        </div>
      )}
      {showCookiePopup && (
        <div className={`cookie-popup ${showCookiePopup ? 'active' : ''}`}>
          <p className="cookie-popup-text">This website uses cookies, ok?</p>
          <div className="cookie-buttons">
            <button className="cookie-button">Ok</button>
            <button className="cookie-button">Yes</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Computer science student at uOttawa. 2025. I know Java, Python, JavaScript, HTML, CSS, and
        work with Node.js, React.js, and Flask as well. made by rina
      </p>
    </footer>
  );
};

const TrollWebsite = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default TrollWebsite;
