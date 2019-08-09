import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import logo from "./images/ESW.png";
import piechart from "./images/Major Distribution.png";

class Team extends Component {
  render() {
    return (
      <div className="Team index is-preload">
        {/*
          <head>
            <title>Triton Solar Car</title>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            />
            //Bootstrap4
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
              integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
              crossorigin="anonymous"
            />
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
              integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
              crossorigin="anonymous"
            />
            <script
              src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
              integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
              crossorigin="anonymous"
            />
            <link rel="SHORTCUT ICON" href="images/tabcar.png" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <noscript>
              <link rel="stylesheet" href="assets/css/noscript.css" />
            </noscript>
          </head> */}
        <div id="page-wrapper">
          <header id="header" class="alt">
            <h1>
              <Link to="/">
                <img id="logo" src={logo} alt="ESW Logo" />
              </Link>
            </h1>
            <nav id="nav">
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li class="current">
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <a href="updates.html">Updates</a>
                </li>
                <li>
                  <a href="media.html">Media</a>
                </li>
                <li>
                  <a href="donate.html">Donate</a>
                </li>
                <li>
                  <a href="contact.html" class="button primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <section id="banner">
            <div id="teamtext" class="inner">
              <header>
                <h2>Team</h2>
              </header>
              <p>
                <br />
              </p>
            </div>
          </section>
          <article id="main">
            <section class="wrapper style4 container">
              <div class="content">
                <section>
                  <header>
                    <h3>The Roster</h3>
                  </header>
                  <p>
                    The UCSD Solar Car Team has its roots firmly planted by a
                    spirit of excellence through diversity. With a variety of
                    students from contrasting educational as well as cultural
                    backgrounds, every member is equally responsible for the
                    team's success. Supervising them are the team leads, who go
                    the extra step to bring out the best in every one of them.
                  </p>
                  <p />
                  <p />
                </section>
              </div>
            </section>
            <section class="wrapper style1 container special">
              <img id="piechart" src={piechart} alt="Pie Chart" />
            </section>
            <section class="wrapper style1 container special">
              <div class="row">
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-briefcase" />
                    <header>
                      <h3>Project Lead: Kieu Huynh</h3>
                    </header>
                    <p>Class of 2020 | Mechanical Engineering</p>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-cogs" />
                    <header>
                      <h3>Mechanical Lead: Roy Choi</h3>
                    </header>
                    <p>Class of 2019 | Mechanical Engineering</p>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-bolt" />
                    <header>
                      <h3>EE Lead: Bryan Thai</h3>
                    </header>
                    <p>Class of 2019 | Bioengineering</p>
                  </section>
                </div>
              </div>
            </section>

            <section class="wrapper style1 container special">
              <div class="row">
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-briefcase" />
                    <header>
                      <h3>Operations Team</h3>
                    </header>
                    <p>Camila Paik, Angela Yu</p>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-cogs" />
                    <header>
                      <h3>Mechanical Team</h3>
                    </header>
                    <p>
                      Roy Choi, Janet He, Eugine Lin, Angela Yu, Canwin Tso,
                      Sean Orellana, Jennie Coates, Arjun Ray, Arturo Medina,
                      Jesse Sanchez, Dustin Tengdyantono, Billy Park, Jacob
                      Watson, Sukhdeep Chera,
                    </p>
                  </section>
                </div>
                <div class="col-4 col-12-narrower">
                  <section>
                    <span class="icon featured fa-bolt" />
                    <header>
                      <h3>Electrical Team</h3>
                    </header>
                    <p>
                      Bryan Thai, Dan Nguyen, Vivian Lee, Sara Dorr, Madeline
                      Tjoa, Jonathan Venegas, Daniel Renfrow
                    </p>
                  </section>
                </div>
              </div>
            </section>
          </article>
          <footer id="footer">
            <ul class="icons">
              <li>
                <a
                  href="https://www.facebook.com/ucsdsolarcar/"
                  class="icon circle fa-facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ucsdsolarcar/"
                  class="icon circle fa-instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TritonSolarCar"
                  class="icon circle fa-github"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="label">Github</span>
                </a>
              </li>
            </ul>

            <ul class="copyright">
              <li>&copy; 2019 UCSD Solar Car</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </footer>
        </div>

        <script src="assets/js/jquery.min.js" />
        <script src="assets/js/jquery.dropotron.min.js" />
        <script src="assets/js/jquery.scrolly.min.js" />
        <script src="assets/js/jquery.scrollex.min.js" />
        <script src="assets/js/browser.min.js" />
        <script src="assets/js/breakpoints.min.js" />
        <script src="assets/js/util.js" />
        <script src="assets/js/main.js" />
      </div>
    );
  }
}

export default Team;
