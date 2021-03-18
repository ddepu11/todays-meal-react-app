import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalFetch } from "../useGlobalFetch";

export default function Meal() {
  const { id } = useParams();

  useGlobalFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`, id);

  return (
    <main className="hero">
      <h1>Meal</h1>
    </main>
  );
}
