import React from "react";
import "./../styles/ProfileCard.css";

const ProfileCard = () => {
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="social-buttons">
            <button className="">
              <a href="https://www.facebook.com/lokajayandala/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/lokajaya.andala/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </button>
            <button>
              <a href="https://twitter.com/lokajaya_andala">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </button>
          </div>
          <div className="social-buttons right">
            <button className="">
              <a href="https://github.com/lokajaya1">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <button className="">
              <a href="https://www.linkedin.com/in/lokajaya-andala-510a08245/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </button>
          </div>
          <div className="text">
            <div className="name-wrapper">
              <span className="name">Black Cat</span>
            </div>
            <small className="title">Meow Engineer</small>
          </div>
        </div>
        <div className="bottom">
          <div className="desc">
            <div className="title">
              My name is <b>Black Cat</b> and I am a Developer.
            </div>
            <br />
            <div className="text">
              I specialize in creating modern web applications and have
              experience with various technologies including JavaScript, React,
              and Node.js.
            </div>
          </div>
          <div className="buttons">
            <button>
              <div className="height">
                <i className="fa fa-code icon" title="Node.js"></i>
                <span>JavaScript</span>
              </div>
            </button>
            <button>
              <div className="height">
                <i className="fa-brands fa-react icon" title="Node.js"></i>
                <span>React.js</span>
              </div>
            </button>
            <button>
              <div className="height">
                <i className="fa fa-cogs icon" title="Node.js"></i>
                <span>Node.js</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
