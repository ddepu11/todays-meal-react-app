import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { useGlobalFetch } from "../useGlobalFetch";
let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

export default function Home() {
  useGlobalFetch(url);
  const { setKeyword, menu } = useGlobalContext();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setKeyword(inputRef.current.value.trim().toUpperCase());
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className="hero">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search Meal" />
        <button type="submit">Search</button>
      </form>
      <section className="meals grid">
        {menu.map((item, index) => {
          const { idMeal, strMeal, strMealThumb } = item;
          return (
            <Link to={`/meal/${idMeal}`} key={index} className="meal card">
              <img src={strMealThumb} alt={strMeal} />
              <p>{strMeal}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
