import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalFetch } from "../useGlobalFetch";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
export default function Meal() {
  const { id } = useParams();
  useGlobalFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`, id);
  const { menu, loading } = useGlobalContext();

  const { strMealThumb, strInstructions, strArea, strCategory } =
    loading === false && menu[0];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="hero one-meal">
          <img src={strMealThumb} alt="" />
          <div className="details">
            <div className="flex c common">
              <h1>Category:</h1>
              <span>{strCategory}</span>
            </div>

            <div className="flex a common">
              <h1>Area:</h1>
              <span>{strArea}</span>
            </div>

            <div className="flex l common">
              <h1>Instruction:</h1>
              <span>{strInstructions}</span>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
