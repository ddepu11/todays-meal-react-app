import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

export default function Home() {
  const { setKeyword } = useGlobalContext();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setKeyword(inputRef.current.value.trim().toUpperCase());
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search Meal" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
