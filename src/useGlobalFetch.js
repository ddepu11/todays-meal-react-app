import { useEffect } from "react";
import { useGlobalContext } from "./context";
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

const useGlobalFetch = () => {
  let { keyword } = useGlobalContext();
  const { setMenu } = useGlobalContext();

  async function fetchRequest() {
    if (keyword === "") {
      keyword = "Chicken";
    }
    try {
      const res = await fetch(url + keyword);
      const { meals } = await res.json();
      console.log(meals);
      setMenu(meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => fetchRequest(), [keyword]);

  return useGlobalContext();
};

export { useGlobalFetch };
