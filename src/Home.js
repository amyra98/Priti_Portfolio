// import React, {useState} from "react";
import "./Home.css";
import logo from "./img/logo.png";
// import Typical from 'react-typical'
import React, { useState, useEffect } from 'react';

function Home() {
  const [index, setIndex] = useState(0);
  const roles = ['Developer', 'Coder', 'Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?null :(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#skills">Skills</a>
            </li>
            <li className="sideNavbar">
              <a href="#projects">Project</a>
            </li>
            <li className="sideNavbar">
              <a href="#contact">Contact</a>
            </li>
              </ul>
          </div>
           )}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY IMAGINATION</h1>
              <h2 className="home__text pz__10">Hello, I’m Priti Kumari</h2>
              {/* <h3 className="home__text sweet pz__10"><Typical
               loop={Infinity}
               wrapper="b"
               steps={[
                 'Developer', 
                 1000,
                 'Coder', 
                 1000,
                 'Designer', 
                 1000
               ]}
              /></h3> */}
              <h3 className="home__text sweet pz__10">
      <b>{roles[index]}</b>
    </h3>
              <h4 className="home__text pz__10">studying in IITBHU</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
