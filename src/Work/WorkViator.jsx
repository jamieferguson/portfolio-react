import React from "react";
import { Link, Route } from "react-router-dom";
import Page from "../Components/Page";
import Footer from "../Components/Footer";
import WorkFooter from "../Components/WorkFooter";
import BodyClassName from "react-body-classname";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function WorkViator() {
  return (
    <BodyClassName className="viator">
      <Page>
        <Route component={ScrollToTop} />
        <div className="work viator">
          <nav className="work-nav">
            <Link
              className="btn"
              to={{
                pathname: "/",
                state: { prev: false },
              }}
            >
              Home
            </Link>
          </nav>
          <div className="work-container">
            <header className="sub ">
              <div className="Header--inner">
                <h1>Viator</h1>
                <h2>
                  UX & UI Design <span>/ 2013</span>
                </h2>
                <div id="skills">
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>UI Design</li>
                  </ul>
                </div>
              </div>
              <div className="background-wrapper">
                <div className="background-image" />
              </div>
            </header>
            <section id="intro">
              <p>
                Viator is the market leader when it comes to booking tours &
                activities when travelling. I was hired as UX lead for their
                mobile products - Web, iOS and Android. As their product team is
                based on the other side of the planet (San Francisco) it was as
                much a logistical challenge as a design one.
              </p>
              <p>
                My main tasks were to gather requirements from the product team
                and translate these into Wireframes and Prototypes. We chose
                Axure to do this, however I also prototyped in HTML when it made
                sense to do so. I also worked closely with the developers,
                engaging them as part of the design process.
              </p>
              <p>
                As a firm believer that UX doesn't end when wireframes are
                signed off I also contributed to visual design and development
                wherever possible.
              </p>
              <p>
                During my short time there I worked on a major redesign of their
                iOS and Android apps as well as their main mobile website.{" "}
              </p>
            </section>

            <section className="example screens">
              <h5>Viator iPhone iOS7 App Redesign</h5>
              <p>
                After requirements had been gathered I mapped out the IA of the
                app to get a sense of what would be kept and what would be
                changed.
              </p>
              <div className="item bordered">
                <img
                  src={require("../Media/work-viator-sitemap.png")}
                  alt="Viator iPhone App - IA"
                />
              </div>
              <p>
                Wireframes and some simple prototypes were created in Axure for
                review with stakeholders.
              </p>
              <div className="item bordered">
                <img
                  src={require("../Media/work-viator-wireframes.png")}
                  alt="Viator iPhone App - Wireframes"
                />
              </div>
              <p>Some examples of visual design mockups that I did.</p>
              <div className="item bordered">
                <img
                  src={require("../Media/work-viator-designs.jpg")}
                  alt="Viator iPhone App - Mockups"
                />
              </div>
            </section>
            <section className="example screens">
              <h5>Viator Android Phone Redesign</h5>
              <p>
                The brief was a consistent experience across platforms, however
                being less familiar with Android design patterns I spent a lot
                of time ensuring the UI wasn't simply a copy of the changes from
                iOS
              </p>
              <div className="item bordered">
                <img
                  src={require("../Media/work-viator-android.png")}
                  alt="Viator Android App - Wireframes"
                />
              </div>
            </section>
            <section className="example screens">
              <h5>Viator Mobile Web Redesign</h5>
              <p>
                Wireframes and some simple prototypes were created in Axure for
                review with stakeholders.
              </p>
              <div className="item bordered">
                <img
                  src={require("../Media/work-viator-mobile.png")}
                  alt="Viator Mobile Site"
                />
              </div>
            </section>
          </div>
        </div>
        <WorkFooter />
        <Footer />
      </Page>
    </BodyClassName>
  );
}

export default WorkViator;
