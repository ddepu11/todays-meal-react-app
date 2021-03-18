import React from "react";

export default function Home() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search Meal" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
