import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import logo from "./images/ESW.png";

class Dummy extends Component {
  render() {
    return (
      <div className="contact is-preload">
        <div id="page-wrapper">
          <header id="header" className="alt">
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
                <li className="current">
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

          <article id="main">
            <header className="special container">
              <span className="icon fa-envelope" />
              <h2>Get In Touch</h2>
              <p>Use the form below to send us an email!</p>
            </header>

            <section className="wrapper style4 special container medium">
              <div className="content">
                <form method="POST" action="/contact">
                  <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-mobile">
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" placeholder="Message" rows="7" />
                    </div>
                    <div className="col-12">
                      <ul className="buttons">
                        <li>
                          <input
                            type="submit"
                            className="special"
                            value="Send Message"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    {window.location.hash === "#success" && (
                      <div id="success">
                        <p>Your message has been sent!</p>
                      </div>
                    )}
                    {window.location.hash === "#error" && (
                      <div id="error">
                        <p>An error occured while submitting the form.</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </section>
          </article>

          <footer id="footer">
            <ul className="icons">
              <li>
                <a href="#" className="icon circle fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon circle fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon circle fa-google-plus">
                  <span className="label">Google+</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon circle fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon circle fa-dribbble">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Untitled</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </footer>
        </div>

        <script src="assets/js/jquery.min.js" />
        <script src="assets/js/jquery.dropotron.min.js" />
        <script src="assets/js/jquery.scrolly.min.js" />
        <script src="assets/js/jquery.scrollgress.min.js" />
        <script src="assets/js/jquery.scrollex.min.js" />
        <script src="assets/js/browser.min.js" />
        <script src="assets/js/breakpoints.min.js" />
        <script src="assets/js/util.js" />
        <script src="assets/js/main.js" />
      </div>
    );
  }
}
export default Dummy;
