import React from "react";
import { Link, Route } from "react-router-dom";
import Page from "../Components/Page";
import BodyClassName from "react-body-classname";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function WorkTGM() {
  return (
    <BodyClassName className="tgm">
      <Page>
        <Route component={ScrollToTop} />
        <div className="work tgm">
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
                <h1>The Global Mail</h1>
                <h2>
                  Data Vis & Editorial Design <span>/ 2012-2013</span>
                </h2>
                <div id="skills">
                  {/* <h5>Primary skills used</h5> */}
                  <ul>
                    <li>Ideation</li>
                    <li>UI Design</li>
                    <li>Data Visualisation</li>
                    <li>Illustration</li>
                  </ul>
                </div>
              </div>
              <div className="background-wrapper">
                <div className="background-image" />
              </div>
            </header>
            <section id="intro">
              <p>
                The Global Mail was a short-lived, not-for-profit news
                organisation that focussed on long-form storytelling &
                data-driven journalism.
              </p>
              <p>
                My role was to lead the design of editorial & data-visualisation
                projects. As part of a small team I was involved in all aspects
                of the project - from research, concepts & UX, through to
                cleaning data - working closely with developers, the amazing
                journalists & editorial staff.
              </p>
              <p>
                As The Global Mail ceased operations some time ago only a few of
                these projects remain online. I have linked to them where
                possible.
              </p>
            </section>

            <section className="example grid">
              <h5>Behind The Wire</h5>
              <p>
                'Behind The Wire' used data about incidents in detention
                gathered via FOI requests by the team at{" "}
                <a href="http://detentionlogs.com.au/">Detention Logs</a> &
                aimed to present them in a meaningful way. Each square
                represents one incident. A user can easily sort or browse the
                incidents as well as learn more by pressing each 'square'.
                Rather than try to present the data with any bias we created a
                way for users to tell us what they thought was the most
                important. To do this they could 'flag' an incident, which would
                increase the brightness of that incident on the grid.
              </p>
              <ul>
                <li>
                  <img src={require("../Media/work-tgm-wire-01.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-tgm-wire-03.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-tgm-wire-02.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-tgm-wire-04.jpg")} alt="" />
                </li>
              </ul>
              <ul className="quarter">
                <li>
                  <img
                    src={require("../Media/work-tgm-wire-mob-01.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-wire-mob-03.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-wire-mob-02.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-wire-mob-04.jpg")}
                    alt=""
                  />
                </li>
              </ul>
            </section>
            <section className="example grid">
              <h5>Projects that are still live!</h5>
              <p>
                Unfortunately these are the only projects that are still live
                from my time at The Global Mail.
              </p>
              <ul>
                <li>
                  <a
                    href="https://tgm-archive.github.io/pharma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overlay">
                      <span>The Great Pill Pu$h</span>
                      <div
                        className="btn"
                        href="https://tgm-archive.github.io/pharma/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </div>
                    </div>
                    <img src={require("../Media/work-tgm-pharma.jpg")} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tgm-archive.github.io/bulga/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overlay">
                      <span>The Town That Wouldn’t Disappear</span>
                      <div
                        className="btn"
                        href="https://tgm-archive.github.io/bulga/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </div>
                    </div>
                    <img src={require("../Media/work-tgm-bulga.jpg")} alt="" />
                  </a>
                </li>
              </ul>
            </section>
            <section className="example grid">
              <h5>Party Lines</h5>
              <p>
                'Party Lines' attempted to look at the way politicians use
                language to frame certain topics. We took Hansard data and made
                it easy to compare the usage of certain words and phrases over
                time.
              </p>
              <ul>
                <li>
                  <img
                    src={require("../Media/work-tgm-partylines-01.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-partylines-02.jpg")}
                    alt=""
                  />
                </li>
              </ul>
            </section>
            <section className="example grid">
              <h5>Poli/talk</h5>
              <p>
                Expanding on 'Party Lines', the 'Poli/talk' project attempted to
                allow further investigation of Hansard data by making it easy
                for journalists and the public explore the words used by
                politicians in partliament. Unfortunately this never got beyond
                concept stage.
              </p>
              <ul>
                <li>
                  <img
                    src={require("../Media/work-tgm-politalk-01.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-politalk-02.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-politalk-03.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-politalk-04.jpg")}
                    alt=""
                  />
                </li>
              </ul>
            </section>
            <section className="example grid">
              <h5>Rock Art at Risk</h5>
              <p>
                'Rock Art at Risk' looked at the sites of indiginous rock art
                and overlayed that with data from mines and mining licenses.
              </p>

              <ul>
                <li>
                  <img
                    src={require("../Media/work-tgm-rockart-01.jpg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("../Media/work-tgm-rockart-02.jpg")}
                    alt=""
                  />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Page>
    </BodyClassName>
  );
}

export default WorkTGM;
