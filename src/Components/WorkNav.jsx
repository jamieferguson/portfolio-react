import React from "react";
import { Link } from "react-router-dom";

function WorkNav() {
  return (
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
  );
}

export default WorkNav;
