import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useGlobalFetch = (url, id) => {
  let {
    keyword,
    setMenu,
    setLoading,
    setError,
    setKeyword,
  } = useGlobalContext();

  async function fetchRequest() {
    setLoading(true);
    setError(false);

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

      if (meals === null) {
        setMenu([]);
        setLoading(false);
        setError(true);
        setKeyword("");
      } else {
        setLoading(false);
        setError(false);
        setMenu(meals);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      setMenu([]);
      setKeyword("");
    }
  }

  useEffect(() => fetchRequest(), [keyword]);
};

export { useGlobalFetch };
