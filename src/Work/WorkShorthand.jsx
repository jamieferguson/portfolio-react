import React from "react";
import { Link, Route } from "react-router-dom";
import BodyClassName from "react-body-classname";

import Page from "../Components/Page";
import Footer from "../Components/Footer";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const WorkShorthand = () => (
  <BodyClassName className="shorthand">
    <Page>
      <Route component={ScrollToTop} />
      <main className="work shorthand">
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
          <header className="sub">
            <div className="Header--inner">
              <h1>Shorthand</h1>
              <h2>
                Product Design <span>/ 2014-</span>
              </h2>
              <div id="skills">
                {/* <h5>Primary skills used</h5> */}
                <ul>
                  <li>Ideation</li>
                  <li>Prototyping</li>
                  <li>UI Design</li>
                  <li>UI Development (SCSS)</li>
                </ul>
              </div>
            </div>
            <div className="background-wrapper">
              <div className="background-image" />
            </div>
          </header>

          <section id="intro">
            <p>
              <a
                href="http://shorthand.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shorthand
              </a>{" "}
              is a Brisbane based start-up who develops webapps allowing
              professional storytellers to easily publish stunning editorial
              features with zero development.
            </p>
            <p>
              Initially my role was Project Designer where I was the design lead
              for all client projects. I would be involved from initial pitch
              stage, then developing the 'theme' as well as wireframing and
              designing any custom features as required.
            </p>
            <p>
              I then transitioned to work as part of the product team as Product
              Designer on developing new features and improvements. Eventually
              becoming Design Director, I worked closely with all parts of the
              business - development, support, sales and management.
            </p>
            <p>
              And as it is a small team I was involved in a broad range of
              activities - from client support through to product strategy.
            </p>
          </section>

          <section className="example grid">
            <h5>Shorthand - Main App screens</h5>
            <p>
              The Shorthand app has two main 'views' - the dashboard, where all
              stories and collections live, and the editor where the user can
              create their stories.
            </p>
            <ul>
              <li className="example-full">
                <img
                  src={require("../Media/work-sh-dash-01.jpg")}
                  alt="The Shorthand dashboard"
                />
              </li>
              {/* <li>
                <img src={require("../Media/work-sh-dash-02.jpg")} alt="Team Settings panel" />
              </li> */}
              <li className="example-full">
                <img
                  src={require("../Media/work-sh-editor-01.jpg")}
                  alt="The Shorthand editor"
                />
              </li>
              {/* <li>
                <img src={require("../Media/work-sh-editor-02.jpg")} alt="Responsive preview feature in the Shorthand editor" />
              </li> */}
            </ul>
          </section>

          <section className="example grid">
            <h5>Shorthand - UI examples</h5>
            <p>
              The primary concern when designing anything for the Shorthand app
              was simplicity. Where possible it should feel familiar or at least
              be as self-explanitory as possible. We believed the user should
              never feel overwhelmed with too many options up front so we
              focussed heavily on only showing extra options at the appropriate
              times.
            </p>
            <ul>
              <li>
                <img
                  src={require("../Media/work-sh-ui-03.jpg")}
                  alt="Text block options in the Shorthand editor"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-ui-04.jpg")}
                  alt="Text styling options in the Shorthand editor"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-ui-05.jpg")}
                  alt="A close-up of some section settings UI"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-ui-06.jpg")}
                  alt="Manage Story Collaborators panel in the Shorthand editor"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-ui-01.jpg")}
                  alt="Manage Story Collaborators panel on the Shorthand dashboard"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-ui-02.jpg")}
                  alt="Leader View option enabled on the Shorthand dashboard"
                />
              </li>
            </ul>
          </section>

          <section className="example grid">
            <h5>Shorthand - Some mocks & concepts</h5>
            <p>
              Some examples of the many mocks & rough concepts that I did at
              Shorthand. The ideation process varied depending on the feature.
              Some started as prototypes directly in the browser, some were more
              the standard prototypes using Photoshop, Figma or Invision, and
              others started as rough concept 'sketches' or storyboards.
            </p>
            <p>
              As I worked alongside the developers directly in the codebase, we
              tried to get from initial concept to a working prototype (that
              'felt' real) as rapidly as possible.
            </p>
            <ul>
              <li>
                <img
                  src={require("../Media/work-sh-mock-01.jpg")}
                  alt="Shorthand Social - tweet scheduler UI"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-mock-02.jpg")}
                  alt="Shorthand Social - dashboard mockup"
                />
              </li>
              <li className="example-full">
                <img
                  src={require("../Media/work-sh-concept-02.jpg")}
                  alt="Shorthand Social - An initial mockup of the tweet previewer"
                />
              </li>
              <li>
                <img
                  src={require("../Media/work-sh-concept-01.jpg")}
                  alt="Shorthand Social - Published story UI"
                />
              </li>

              <li>
                <img
                  src={require("../Media/work-sh-concept-03.jpg")}
                  alt="Shorthand Social - An initial mockup of the tweet previewer"
                />
              </li>
            </ul>
          </section>

          {/* <section className="example grid">
            <h5>Shorthand Social - Various screens</h5>
            <ul>
              <li>
                <img src={require("../Media/work-sh-social-01.jpg")} alt="Shorthand Social - tweet scheduler UI" />
              </li>
              <li>
                <img src={require("../Media/work-sh-social-03.jpg")} alt="Shorthand Social - dashboard mockup" />
              </li>
              <li>
                <img src={require("../Media/work-sh-social-02.jpg")} alt="Shorthand Social - Published story UI" />
              </li>
              <li>
                <img src={require("../Media/work-sh-social-04.jpg")} alt="Shorthand Social - An initial mockup of the tweet previewer" />
              </li>
            </ul>

            <p>'Shorthand Social' was a fairly short lived app that was similar to the main Shorthand app but focussed on letting more casual storytellers easily create and share their stories.</p>
            <p>The main concept behind it was that the story could be automatically shared (initially via a series tweets) over a set period of time.</p>
          </section> */}
        </div>
        <Footer />
      </main>
    </Page>
  </BodyClassName>
);

export default WorkShorthand;
