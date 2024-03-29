import React from "react";
import { Route } from "react-router-dom";
import Page from "../Components/Page";
import Footer from "../Components/Footer";
import WorkNav from "../Components/WorkNav";
import WorkFooter from "../Components/WorkFooter";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} alt="" />
    </picture>
  );
};

function WorkAus() {
  return (
    <div className="aus">
      <Page>
        <Route component={ScrollToTop} />
        <WorkNav />
        <article className="work">
          <header className="sub ">
            <div className="Header--inner">
              <h1>The Australian</h1>
              <h2>
                Data Vis & Editorial Design <span>/ 2011-2012</span>
              </h2>
              <div id="skills">
                <ul>
                  <li>Ideation</li>
                  <li>Editorial Design</li>
                  <li>UI Design</li>
                  <li>Data Visualisation</li>
                </ul>
              </div>
            </div>
            <div className="background-wrapper">
              <div className="background-image" />
            </div>
          </header>
          <section id="intro">
            <p>
              As the lead digital designer I was in charge of designing all
              editorial features for The Australian's digital products.
            </p>
            <p>
              This included the usual day-to-day work of designing templates and
              standard editorial features, as well as larger project-based
              features.
            </p>
            <p>
              The most interesting projects were data visualiation oriented,
              especially the 'Your School' project that looked at NAPLAN data
              and made it easy to compare various schools.
            </p>
          </section>

          <section className="example grid">
            <h3>Your School</h3>
            <p>
              'Your School' was the first project of it's kind in Australia that
              took all the available NAPLAN data and made it easy to rank and
              compare schools. Unfortunately this tool is no longer live.
            </p>
            <ul>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-01.webp")}
                  fallback={require("../Media/work-aus-yourschool-01.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-02.webp")}
                  fallback={require("../Media/work-aus-yourschool-02.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-02a.webp")}
                  fallback={require("../Media/work-aus-yourschool-02a.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-04.webp")}
                  fallback={require("../Media/work-aus-yourschool-04.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-05.webp")}
                  fallback={require("../Media/work-aus-yourschool-05.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-yourschool-06.webp")}
                  fallback={require("../Media/work-aus-yourschool-06.jpg")}
                  alt=""
                />
              </li>
            </ul>
          </section>
          <section className="example grid">
            <h3>Federal Election 2013 - Homepage</h3>
            <p>
              With politics being at the core of The Australian's remit, federal
              elections are one of the most important events that they cover. I
              was in charge of designing the election tools for the site
              homepage.
            </p>
            <ul>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-election-01.webp")}
                  fallback={require("../Media/work-aus-election-01.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-election-02.webp")}
                  fallback={require("../Media/work-aus-election-02.jpg")}
                  alt=""
                />
              </li>
            </ul>
          </section>
          <section className="example grid">
            <h3>Federal Election 2013 - App</h3>
            <p>
              The main feature we built for the election was an app that allowed
              you to view live election data for any seat in the country.
            </p>
            <ul>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-01.webp")}
                  fallback={require("../Media/work-aus-electionapp-01.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-02.webp")}
                  fallback={require("../Media/work-aus-electionapp-02.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-03.webp")}
                  fallback={require("../Media/work-aus-electionapp-03.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-04.webp")}
                  fallback={require("../Media/work-aus-electionapp-04.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-05.webp")}
                  fallback={require("../Media/work-aus-electionapp-05.jpg")}
                  alt=""
                />
              </li>
              <li>
                <ImgWithFallback
                  src={require("../Media/work-aus-electionapp-06.webp")}
                  fallback={require("../Media/work-aus-electionapp-06.jpg")}
                  alt=""
                />
              </li>
            </ul>
          </section>
        </article>
        <WorkFooter />
        <Footer />
      </Page>
    </div>
  );
}

export default WorkAus;
