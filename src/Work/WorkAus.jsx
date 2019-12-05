import React from "react";
import { Link, Route } from "react-router-dom";
import Page from "../Components/Page";
import BodyClassName from "react-body-classname";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function WorkAus() {
  return (
    <BodyClassName className="aus">
      <Page>
        <Route component={ScrollToTop} />
        <div className="work aus">
          <nav className="work-nav">
            <Link
              className="btn"
              to={{
                pathname: "/",
                state: { prev: false }
              }}
            >
              Home
            </Link>
          </nav>
          <div className="work-container">
            <header className="sub ">
              <div className="Header--inner">
                <h1>The Australian</h1>
                <h2>
                  Editorial Design & Data Visualiation <span>/ 2011</span>
                </h2>
              </div>
              <div className="background-wrapper">
                <div className="background-image" />
              </div>
            </header>
            <section id="intro">
              <p>As the lead digital designer I was in charge of designing all editorial features for The Australian's digital products.</p>
              <p>This included the usual day-to-day work of designing templates and standard editorial features, as well as larger project-based features.</p>
              <p>The most interesting projects were data visualiation oriented, especially the 'Your School' project that looked at NAPLAN data and made it easy to compare various schools.</p>
            </section>
            <section id="skills">
              <h5>Primary skills used</h5>
              <ul>
                <li>Ideation</li>
                <li>Editorial Design</li>
                <li>Data Visualisation</li>
                <li>UI Design</li>
              </ul>
            </section>
            <section className="example grid">
              <h5>Your School</h5>
              <ul>
                <li>
                  <img src={require("../Media/work-aus-yourschool-01.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-yourschool-02.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-yourschool-02a.jpg")} alt="" />
                </li>
                {/* <li>
                  <img src={require("../Media/work-aus-yourschool-03.jpg")} alt="" />
                </li> */}
                <li>
                  <img src={require("../Media/work-aus-yourschool-04.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-yourschool-05.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-yourschool-06.jpg")} alt="" />
                </li>
              </ul>
              <p>'Your School' was the first project of it's kind in Australia that took all the available NAPLAN data and made it easy to rank and compare schools. Unfortunately this tool is no longer live.</p>
            </section>
            <section className="example grid">
              <h5>Federal Election 2013 - Homepage</h5>
              <ul>
                <li>
                  <img src={require("../Media/work-aus-election-01.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-election-02.jpg")} alt="" />
                </li>
              </ul>
              <p>With politics being at the core of The Australian's remit, federal elections are one of the most important events that they cover. I was in charge of designing the election tools for the site homepage.</p>
            </section>
            <section className="example grid">
              <h5>Federal Election 2013 - App</h5>
              <ul>
                <li>
                  <img src={require("../Media/work-aus-electionapp-01.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-electionapp-02.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-electionapp-03.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-electionapp-04.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-electionapp-05.jpg")} alt="" />
                </li>
                <li>
                  <img src={require("../Media/work-aus-electionapp-06.jpg")} alt="" />
                </li>
              </ul>
              <p>The main feature we built for the election was an app that allowed you to view live election data for any seat in the country.</p>
            </section>
          </div>
        </div>
      </Page>
    </BodyClassName>
  );
}

export default WorkAus;
