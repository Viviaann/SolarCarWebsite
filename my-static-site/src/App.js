import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Team from "./Team";

//import "./app.css";
import logo from "./images/ESW.png";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/noscript.css";

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            Learn{' '}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              className="App-link"
              href="https://react-static.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Static
            </a>
          </span>
        </header>
      </div>*/
      /*
      <div className="App">
        <html>
          <head>
            <title>Twenty by HTML5 UP</title>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            />
            <link rel="stylesheet" href="assets/css/main.css" />
            <noscript>
              <link rel="stylesheet" href="assets/css/noscript.css" />
            </noscript>
          </head>
          <body class="index is-preload">
            <div id="page-wrapper">
              //Header
              <header id="header" class="alt">
                <h1 id="logo">
                  <a href="index.html">
                    Twenty <span>by HTML5 UP</span>
                  </a>
                </h1>
                <nav id="nav">
                  <ul>
                    <li class="current">
                      <a href="index.html">Welcome</a>
                    </li>
                    <li class="submenu">
                      <a href="#">Layouts</a>
                      <ul>
                        <li>
                          <a href="left-sidebar.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="no-sidebar.html">No Sidebar</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li class="submenu">
                          <a href="#">Submenu</a>
                          <ul>
                            <li>
                              <a href="#">Dolore Sed</a>
                            </li>
                            <li>
                              <a href="#">Consequat</a>
                            </li>
                            <li>
                              <a href="#">Lorem Magna</a>
                            </li>
                            <li>
                              <a href="#">Sed Magna</a>
                            </li>
                            <li>
                              <a href="#">Ipsum Nisl</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" class="button primary">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              //Banner
              <section id="banner">
                // ".inner" is set up as an inline-block so it automatically //
                expands in both directions to fit whatever's inside it. This /
                means it won't automatically wrap lines, so be sure to use line
                // breaks where appropriate (<br />
                //).
                <div class="inner">
                  <header>
                    <h2>TWENTY</h2>
                  </header>
                  <p>
                    This is <strong>Twenty</strong>, a free
                    <br />
                    responsive template
                    <br />
                    by <a href="http://html5up.net">HTML5 UP</a>.
                  </p>
                  <footer>
                    <ul class="buttons stacked">
                      <li>
                        <a href="#main" class="button fit scrolly">
                          Tell Me More
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
              </section>
              // Main
              <article id="main">
                <header class="special container">
                  <span class="icon fa-bar-chart-o" />
                  <h2>
                    As this is my <strong>twentieth</strong> freebie for HTML5
                    UP
                    <br />I decided to give it a really creative name.
                  </h2>
                  <p>
                    Turns out <strong>Twenty</strong> was the best I could come
                    up with. Anyway, lame name aside,
                    <br />
                    it's minimally designed, fully responsive, built on
                    HTML5/CSS3, and, like all my stuff,
                    <br />
                    released for free under the{" "}
                    <a href="http://html5up.net/license">
                      Creative Commons Attribution 3.0
                    </a>{" "}
                    license. Have fun!
                  </p>
                </header>
                //One
                <section class="wrapper style2 container special-alt">
                  <div class="row gtr-50">
                    <div class="col-8 col-12-narrower">
                      <header>
                        <h2>
                          Behold the <strong>icons</strong> that visualize what
                          you’re all about. or just take up space. your call
                          bro.
                        </h2>
                      </header>
                      <p>
                        Sed tristique purus vitae volutpat ultrices. Aliquam eu
                        elit eget arcu comteger ut fermentum lorem. Lorem ipsum
                        dolor sit amet. Sed tristique purus vitae volutpat
                        ultrices. eu elit eget commodo. Sed tristique purus
                        vitae volutpat ultrices. Aliquam eu elit eget arcu
                        commodo.
                      </p>
                      <footer>
                        <ul class="buttons">
                          <li>
                            <a href="#" class="button">
                              Find Out More
                            </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                    <div class="col-4 col-12-narrower imp-narrower">
                      <ul class="featured-icons">
                        <li>
                          <span class="icon fa-clock-o">
                            <span class="label">Feature 1</span>
                          </span>
                        </li>
                        <li>
                          <span class="icon fa-volume-up">
                            <span class="label">Feature 2</span>
                          </span>
                        </li>
                        <li>
                          <span class="icon fa-laptop">
                            <span class="label">Feature 3</span>
                          </span>
                        </li>
                        <li>
                          <span class="icon fa-inbox">
                            <span class="label">Feature 4</span>
                          </span>
                        </li>
                        <li>
                          <span class="icon fa-lock">
                            <span class="label">Feature 5</span>
                          </span>
                        </li>
                        <li>
                          <span class="icon fa-cog">
                            <span class="label">Feature 6</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                //Two
                <section class="wrapper style1 container special">
                  <div class="row">
                    <div class="col-4 col-12-narrower">
                      <section>
                        <span class="icon featured fa-check" />
                        <header>
                          <h3>This is Something</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat ultrices. Aliquam
                          eu elit eget arcu commodo suscipit dolor nec nibh.
                          Proin a ullamcorper elit, et sagittis turpis. Integer
                          ut fermentum.
                        </p>
                      </section>
                    </div>
                    <div class="col-4 col-12-narrower">
                      <section>
                        <span class="icon featured fa-check" />
                        <header>
                          <h3>Also Something</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat ultrices. Aliquam
                          eu elit eget arcu commodo suscipit dolor nec nibh.
                          Proin a ullamcorper elit, et sagittis turpis. Integer
                          ut fermentum.
                        </p>
                      </section>
                    </div>
                    <div class="col-4 col-12-narrower">
                      <section>
                        <span class="icon featured fa-check" />
                        <header>
                          <h3>Probably Something</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat ultrices. Aliquam
                          eu elit eget arcu commodo suscipit dolor nec nibh.
                          Proin a ullamcorper elit, et sagittis turpis. Integer
                          ut fermentum.
                        </p>
                      </section>
                    </div>
                  </div>
                </section>
                //Three
                <section class="wrapper style3 container special">
                  <header class="major">
                    <h2>
                      Next look at this <strong>cool stuff</strong>
                    </h2>
                  </header>

                  <div class="row">
                    <div class="col-6 col-12-narrower">
                      <section>
                        <a href="#" class="image featured">
                          <img src="images/pic01.jpg" alt="" />
                        </a>
                        <header>
                          <h3>A Really Fast Train</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat commodo suscipit
                          amet sed nibh. Proin a ullamcorper sed blandit. Sed
                          tristique purus vitae volutpat commodo suscipit
                          ullamcorper sed blandit lorem ipsum dolore.
                        </p>
                      </section>
                    </div>
                    <div class="col-6 col-12-narrower">
                      <section>
                        <a href="#" class="image featured">
                          <img src="images/pic02.jpg" alt="" />
                        </a>
                        <header>
                          <h3>An Airport Terminal</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat commodo suscipit
                          amet sed nibh. Proin a ullamcorper sed blandit. Sed
                          tristique purus vitae volutpat commodo suscipit
                          ullamcorper sed blandit lorem ipsum dolore.
                        </p>
                      </section>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 col-12-narrower">
                      <section>
                        <a href="#" class="image featured">
                          <img src="images/pic03.jpg" alt="" />
                        </a>
                        <header>
                          <h3>Hyperspace Travel</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat commodo suscipit
                          amet sed nibh. Proin a ullamcorper sed blandit. Sed
                          tristique purus vitae volutpat commodo suscipit
                          ullamcorper sed blandit lorem ipsum dolore.
                        </p>
                      </section>
                    </div>
                    <div class="col-6 col-12-narrower">
                      <section>
                        <a href="#" class="image featured">
                          <img src="images/pic04.jpg" alt="" />
                        </a>
                        <header>
                          <h3>And Another Train</h3>
                        </header>
                        <p>
                          Sed tristique purus vitae volutpat commodo suscipit
                          amet sed nibh. Proin a ullamcorper sed blandit. Sed
                          tristique purus vitae volutpat commodo suscipit
                          ullamcorper sed blandit lorem ipsum dolore.
                        </p>
                      </section>
                    </div>
                  </div>

                  <footer class="major">
                    <ul class="buttons">
                      <li>
                        <a href="#" class="button">
                          See More
                        </a>
                      </li>
                    </ul>
                  </footer>
                </section>
              </article>
              //CTA
              <section id="cta">
                <header>
                  <h2>
                    Ready to do <strong>something</strong>?
                  </h2>
                  <p>
                    Proin a ullamcorper elit, et sagittis turpis integer ut
                    fermentum.
                  </p>
                </header>
                <footer>
                  <ul class="buttons">
                    <li>
                      <a href="#" class="button primary">
                        Take My Money
                      </a>
                    </li>
                    <li>
                      <a href="#" class="button">
                        LOL Wut
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
              //Footer
              <footer id="footer">
                <ul class="icons">
                  <li>
                    <a href="#" class="icon circle fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon circle fa-facebook">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon circle fa-google-plus">
                      <span class="label">Google+</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon circle fa-github">
                      <span class="label">Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon circle fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                </ul>

                <ul class="copyright">
                  <li>&copy; Untitled</li>
                  <li>
                    Design: <a href="http://html5up.net">HTML5 UP</a>
                  </li>
                </ul>
              </footer>
            </div>
            //Scripts
            <script src="assets/js/jquery.min.js" />
            <script src="assets/js/jquery.dropotron.min.js" />
            <script src="assets/js/jquery.scrolly.min.js" />
            <script src="assets/js/jquery.scrollex.min.js" />
            <script src="assets/js/browser.min.js" />
            <script src="assets/js/breakpoints.min.js" />
            <script src="assets/js/util.js" />
            <script src="assets/js/main.js" />
          </body>
        </html>
      </div>
*/

      <div className="App">
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
        <body class="index is-preload">
          <div id="page-wrapper">
            <header id="header" class="alt">
              <h1>
                {/*<a href="index.html">*/}
                <img id="logo" src="./images/ESW.png" alt="ESW Logo" />
                {/*</a>*/}
              </h1>
              <nav id="nav">
                <BrowserRouter>
                  <ul>
                    <li class="current">
                      <a href="index.html">About Us</a>
                    </li>
                    <li>
                      <Link to="team">Team</Link>
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
                  <Switch>
                    <Route path="/Team" component={Team} />
                  </Switch>
                </BrowserRouter>
              </nav>
            </header>

            <section id="banner">
              <div class="inner">
                <header>
                  <h2>UCSD Solar Car</h2>
                </header>
                <p>
                  Welcome!
                  <p>Engineers for a Sustainable World</p>
                </p>
                <footer>
                  <ul class="buttons stacked">
                    <li>
                      <a href="#main" class="button fit scrolly">
                        Tell Me More
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
            </section>

            <article id="main">
              <header class="special container">
                <span class="icon fa-bar-chart-o" />
                <h2>
                  A Student Organization Dedicated to Excellence in Sustainable
                  Engineering
                </h2>
                <p class="text-left my-3">
                  Established in the fall of 2015, UCSD's first Solar Car Team
                  is an entirely student-run project that aims to design, build,
                  test, and race solar powered vehicles. Comprised of over 20
                  students across a variety of disciplines and areas of study,
                  we have come together to start a Solar Car program at UCSD,
                  located in one of the sunniest cities in the world.
                </p>
                <p class="text-left my-3">
                  The Solar Car Project is the first of its kind in that it
                  attracts a large variety of students from various engineering
                  as well as non-engineering backgrounds. Participating in this
                  project gives students the opportunity to gain hands-on
                  experience with different fields of engineering (mechanical,
                  engineering, aerospace, design) as well as experience in
                  business, operations, and project management. Students in
                  Triton Solar Car can stand out from the crowd by gaining
                  important real-world experience and operating in an
                  environment that prepares them for their careers by getting
                  involved in setting deadlines, budgets, designs, reviews while
                  doing their best to control all the unforeseen variables that
                  may arise.
                </p>
                <p class="text-left my-3">
                  Being a member of Triton Solar Car is more than just being a
                  part of any other club, it allows students to not only create
                  a better future for themselves, but for the world by
                  supporting sustainable, clean energy.
                </p>
              </header>

              <section class="wrapper style1 container special">
                <div class="row">
                  <div class="col-4 col-12-narrower">
                    <section>
                      <span class="icon featured fa-briefcase" />
                      <header>
                        <h3>Business Team</h3>
                      </header>
                      <p>
                        This team works on the financial side of the project by
                        contacting potential sponsors and corporations to make
                        sure that there are enough resources to actually build
                        the car.
                      </p>
                    </section>
                  </div>
                  <div class="col-4 col-12-narrower">
                    <section>
                      <span class="icon featured fa-cogs" />
                      <header>
                        <h3>Mechanical Team</h3>
                      </header>
                      <p>
                        Under the mechanical lead, this team is responsible for
                        designing and building all mechanical aspects of the car
                        such as the chassis, suspension, body and frame. The
                        team uses CAD softwares to design and test their parts
                        and build the entire vehicle from scratch.
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
                        Under the electrical lead, this team designs and
                        implements all electronic aspects of the car such as the
                        solar array, the battery pack, telemetry and controls
                        that make sure the car runs smoothly. Members use
                        simulation software as well as prototyping to test their
                        designs and do everything that is necessary to power the
                        car with solar energy.
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
        </body>
      </div>
    );
  }
}

export default App;
