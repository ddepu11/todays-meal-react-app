import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useGlobalFetch = (url, id) => {
  let { keyword, setMenu, setLoading, setError } = useGlobalContext();

  async function fetchRequest() {
    setLoading(true);

    if (keyword === "") {
      keyword = "Chicken";
    }

    if (id !== null && id !== undefined) {
      keyword = id.toString();
    }

    try {
      const res = await fetch(url + keyword);
      const { meals } = await res.json();

      if (meals === null) {
        setMenu([]);
        setLoading(false);
        setError(true);
      } else {
        setMenu(meals);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMenu([]);
      setError(true);
    }
  }

  useEffect(() => fetchRequest(), [keyword]);
};

export { useGlobalFetch };
