import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useGlobalFetch = (url, id) => {
  let { keyword } = useGlobalContext();
  const { setMenu } = useGlobalContext();

  async function fetchRequest() {
    if (keyword === "") {
      keyword = "Chicken";
    }

    if (id !== null && id !== undefined) {
      keyword = id.toString();
    }

    try {
      const res = await fetch(url + keyword);
      const { meals } = await res.json();
      console.log(meals);
      meals === null ? setMenu([]) : setMenu(meals);
    } catch (error) {
      console.log(error);
      setMenu([]);
    }
  }

  useEffect(() => fetchRequest(), [keyword]);

  return useGlobalContext();
};

export { useGlobalFetch };
