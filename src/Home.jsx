import React from "react";
import { Route } from "react-router-dom";

import Nav from "./Components/Nav";
import WorkList from "./Components/WorkList";
import Page from "./Components/Page";
import Footer from "./Components/Footer";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Home = () => (
  <div className="home">
    <Page>
      <Route component={ScrollToTop} />
      <Nav />
      <header>
        <div className="Header--inner">
          <h1>Jamie Ferguson</h1>
          <h2>
            Product Designer{" "}
            <span className="location">/ Sydney, Australia</span>
          </h2>
        </div>
      </header>
      <section id="work">
        <WorkList />
      </section>
      <Footer />
    </Page>
  </div>
);

export default Home;
