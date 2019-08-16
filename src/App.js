import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
//import Team from "./Team";

//import "./app.css";
import logo from "./images/ESW.png";

import "./assets/css/font-awesome.min.css";
import "./assets/css/noscript.css";

class App extends Component {
  render() {
    return (
      <div className="App index is-preload">
        {/*<head>
          <title>Triton Solar Car</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
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
        </head>*/}

        <div id="page-wrapper">
          <header id="header" className="alt">
            <h1>
              <Link to="/">
                <img id="logo" src={logo} alt="ESW Logo" />
              </Link>
            </h1>
            <nav id="nav">
              <ul>
                <li className="current">
                  <Link to="/">About Us</Link>
                </li>
                <li>
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
                  <Link to="/dummy" className="button primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <section id="banner">
            <div className="inner">
              <header>
                <h2>UCSD Solar Car</h2>
              </header>
              <p>Welcome!</p>
              <p>Engineers for a Sustainable World</p>
              <footer>
                <ul className="buttons stacked">
                  <li>
                    <a href="#main" className="button fit scrolly">
                      Tell Me More
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </section>

          <article id="main">
            <header className="special container">
              <span className="icon fa-bar-chart-o" />
              <h2>
                A Student Organization Dedicated to Excellence in Sustainable
                Engineering
              </h2>
              <p className="text-left my-3">
                Established in the fall of 2015, UCSD's first Solar Car Team is
                an entirely student-run project that aims to design, build,
                test, and race solar powered vehicles. Comprised of over 20
                students across a variety of disciplines and areas of study, we
                have come together to start a Solar Car program at UCSD, located
                in one of the sunniest cities in the world.
              </p>
              <p className="text-left my-3">
                The Solar Car Project is the first of its kind in that it
                attracts a large variety of students from various engineering as
                well as non-engineering backgrounds. Participating in this
                project gives students the opportunity to gain hands-on
                experience with different fields of engineering (mechanical,
                engineering, aerospace, design) as well as experience in
                business, operations, and project management. Students in Triton
                Solar Car can stand out from the crowd by gaining important
                real-world experience and operating in an environment that
                prepares them for their careers by getting involved in setting
                deadlines, budgets, designs, reviews while doing their best to
                control all the unforeseen variables that may arise.
              </p>
              <p className="text-left my-3">
                Being a member of Triton Solar Car is more than just being a
                part of any other club, it allows students to not only create a
                better future for themselves, but for the world by supporting
                sustainable, clean energy.
              </p>
            </header>

            <section className="wrapper style1 container special">
              <div className="row">
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-briefcase" />
                    <header>
                      <h3>Business Team</h3>
                    </header>
                    <p>
                      This team works on the financial side of the project by
                      contacting potential sponsors and corporations to make
                      sure that there are enough resources to actually build the
                      car.
                    </p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-cogs" />
                    <header>
                      <h3>Mechanical Team</h3>
                    </header>
                    <p>
                      Under the mechanical lead, this team is responsible for
                      designing and building all mechanical aspects of the car
                      such as the chassis, suspension, body and frame. The team
                      uses CAD softwares to design and test their parts and
                      build the entire vehicle from scratch.
                    </p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-bolt" />
                    <header>
                      <h3>Electrical Team</h3>
                    </header>
                    <p>
                      Under the electrical lead, this team designs and
                      implements all electronic aspects of the car such as the
                      solar array, the battery pack, telemetry and controls that
                      make sure the car runs smoothly. Members use simulation
                      software as well as prototyping to test their designs and
                      do everything that is necessary to power the car with
                      solar energy.
                    </p>
                  </section>
                </div>
              </div>
            </section>
          </article>

          <footer id="footer">
            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/ucsdsolarcar/"
                  className="icon circle fa-facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ucsdsolarcar/"
                  className="icon circle fa-instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TritonSolarCar"
                  className="icon circle fa-github"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="label">Github</span>
                </a>
              </li>
            </ul>

            <ul className="copyright">
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

export default App;
