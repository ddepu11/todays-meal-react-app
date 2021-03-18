import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link, Redirect } from "react-router-dom";
import { useGlobalFetch } from "../useGlobalFetch";
import Loading from "./Loading";
import Error from "./Error";

let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

export default function Home() {
  useGlobalFetch(url);
  const { setKeyword, menu, loading, error, setError } = useGlobalContext();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setKeyword(inputRef.current.value.trim().toUpperCase());
  }

  useEffect(() => {
    setError(false);
    // setTimeout(() => {
    //   inputRef.current.focus();
    // }, 2000);
  }, []);

  return (
    <>
      {error === true ? (
        <Redirect to="/error" />
      ) : (
        <main className="hero">
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Search Meal" />
            <button type="submit">Search</button>
          </form>
          <section className="meals grid">
            {loading ? (
              <Loading />
            ) : (
              menu.map((item, index) => {
                const { idMeal, strMeal, strMealThumb } = item;
                return (
                  <Link
                    to={`/meal/${idMeal}`}
                    key={index}
                    className="meal card"
                  >
                    <img src={strMealThumb} alt={strMeal} />
                    <p>{strMeal}</p>
                  </Link>
                );
              })
            )}
          </section>
        </main>
      )}
    </>
  );
}
