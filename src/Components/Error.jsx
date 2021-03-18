import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <h1>Sorry 404!! The page you have requested is not Found!</h1>
      <Link className="home-btn" to="/">
        Go Back Home
      </Link>
    </section>
  );
}
