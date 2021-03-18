import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

export default function Home() {
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
            <div key={index} className="meal card">
              <img src={strMealThumb} alt={strMeal} />
              <p>{strMeal}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
