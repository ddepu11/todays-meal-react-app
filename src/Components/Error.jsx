import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Error() {
  const { setError } = useGlobalContext();

  return (
    <section className="error">
      <h1>Error 404!! The page you have requested is not Found!</h1>
      <Link to="/" className="home-btn" onClick={() => setError(false)}>
        Go Back Home
      </Link>
    </section>
  );
}
