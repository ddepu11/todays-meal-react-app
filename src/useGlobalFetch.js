import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useGlobalFetch = (url, id) => {
  let { keyword } = useGlobalContext();
  const { setMenu, setLoading } = useGlobalContext();

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

      console.log(meals);

      if (meals === null) {
        setMenu([]);
      } else {
        setMenu(meals);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMenu([]);
    }
  }

  useEffect(() => fetchRequest(), [keyword]);
};

export { useGlobalFetch };
