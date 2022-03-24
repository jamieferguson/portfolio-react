import React from "react";
import { Route } from "react-router-dom";
import WorkNav from "../Components/WorkNav";
import WorkFooter from "../Components/WorkFooter";
import Page from "../Components/Page";
import Footer from "../Components/Footer";

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

const WorkShorthand = () => (
  <div className="shorthand">
    <Page>
      <Route component={ScrollToTop} />
      <WorkNav />
      <article className="work">
        <header className="sub">
          <div className="Header--inner">
            <h1>Shorthand</h1>
            <h2>
              Product Design <span>/ 2014-</span>
            </h2>
            <div id="skills">
              <ul>
                <li>Ideation</li>
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
            I joined Shorthand just before the product went into a closed Beta
            phase.
          </p>
          <p>
            In my initial role as <strong>Project Designer</strong> I worked
            with customers to help design and build their stories in what was
            still just a very basic tool. I fed back learnings to the
            engineering team in order to help them prioritise features.
          </p>
          <p>
            As the tool evolved I moved into the{" "}
            <strong>Product Designer</strong> role where I helped to
            conceptualise, design & build new features for the product. As part
            of what was still a very small team I was also involved in strategy
            and support.
          </p>
          <p>
            I was invited to join the fledgling executive team whereupon I was
            given the fancy title of <strong>Director of Design</strong>, and
            was the Design & UX voice at the table when discussing company and
            product strategy.
          </p>
          <p>
            As the company grew I was able to start building out the Design & UX
            function. My first hire was a UX Researcher, soon followed by a
            Product Designer. Together we built out a more consistent, informed
            product design process that has enabled us to move from a scrappy
            bunch of individual contributors to a more cohesive unit within the
            Product team.
          </p>
        </section>

        <section className="example grid">
          <h3>Shorthand - Main App screens</h3>
          <p>
            The Shorthand app has two main 'views' - the dashboard, where all
            stories and collections live, and the editor where the user can
            create their stories.
          </p>
          <ul>
            <li className="example-full">
              <ImgWithFallback
                src={require("../Media/work-sh-dash-01.webp")}
                fallback={require("../Media/work-sh-dash-01.jpg")}
                alt="The Shorthand dashboard"
              />
            </li>
            <li className="example-full">
              <ImgWithFallback
                src={require("../Media/work-sh-editor-01.webp")}
                fallback={require("../Media/work-sh-editor-01.jpg")}
                alt="The Shorthand editor"
              />
            </li>
          </ul>
        </section>

        <section className="example grid">
          <h3>Shorthand - UI examples</h3>
          <p>
            The primary concern when designing anything for the Shorthand app
            was simplicity. Where possible it should feel familiar or at least
            be as self-explanitory as possible. We believed the user should
            never feel overwhelmed with too many options up front so we focussed
            heavily on only showing extra options at the appropriate times.
          </p>
          <p>
            Time and again, when asked for feedback about why customers chose
            Shorthand it was due to the ease of use in producing engaging and
            successful stories.
          </p>
          <ul>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-03.webp")}
                fallback={require("../Media/work-sh-ui-03.jpg")}
                alt="Text block options in the Shorthand editor"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-04.webp")}
                fallback={require("../Media/work-sh-ui-04.jpg")}
                alt="Text styling options in the Shorthand editor"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-05.webp")}
                fallback={require("../Media/work-sh-ui-05.jpg")}
                alt="A close-up of some section settings UI"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-06.webp")}
                fallback={require("../Media/work-sh-ui-06.jpg")}
                alt="Manage Story Collaborators panel in the Shorthand editor"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-07.webp")}
                fallback={require("../Media/work-sh-ui-07.jpg")}
                alt="Media panel in the Shorthand editor"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-ui-02.webp")}
                fallback={require("../Media/work-sh-ui-02.jpg")}
                alt="Scrollpoints Highlight Editor UI"
              />
            </li>
          </ul>
        </section>

        <section className="example grid">
          <h3>Shorthand - Some mocks & concepts</h3>
          <p>
            Some examples of the many mocks & rough concepts that I've done
            while at Shorthand.
          </p>
          <p>
            The ideation process varies depending on the needs of the feature.
            Some start as prototypes directly in the browser, some are more
            conventional prototypes using a tool such as Figma, and others start
            as rough concept 'sketches' or storyboards.
          </p>
          <p>
            One thing I advocate strongly for is getting a rough concept{" "}
            <em>in the browser</em> as quickly as possible which gives us a feel
            for how something could work. This is then iterated upon in close
            collaboration with the engineers and validated through user testing
            and feedback.
          </p>
          <ul>
            <li className="example-full">
              <ImgWithFallback
                src={require("../Media/work-sh-scrollpoints.webp")}
                fallback={require("../Media/work-sh-scrollpoints.jpg")}
                alt="Initial concepts for Scrollpoints section"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-mock-01.webp")}
                fallback={require("../Media/work-sh-mock-01.jpg")}
                alt="Multi-select mockup"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-mock-02.webp")}
                fallback={require("../Media/work-sh-mock-02.jpg")}
                alt="Initial concepts for map based section"
              />
            </li>
            <li className="example-full">
              <ImgWithFallback
                src={require("../Media/work-sh-projects.webp")}
                fallback={require("../Media/work-sh-projects.jpg")}
                alt="Example of Figma spaghetti for a larger redesign project"
              />
            </li>
            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-home.webp")}
                fallback={require("../Media/work-sh-home.jpg")}
                alt="Concepts for Shorthand homepage"
              />
            </li>

            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-commenting.webp")}
                fallback={require("../Media/work-sh-commenting.jpg")}
                alt="Early concepts for commenting in the Shorthand editor"
              />
            </li>

            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-concept-01.webp")}
                fallback={require("../Media/work-sh-concept-01.jpg")}
                alt="Concepts for section thumbnail rework"
              />
            </li>

            <li>
              <ImgWithFallback
                src={require("../Media/work-sh-concept-03.webp")}
                fallback={require("../Media/work-sh-concept-03.jpg")}
                alt="Concepts for publishing rework"
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

export default WorkShorthand;
