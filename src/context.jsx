import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("Chicken");
  const [error, setError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        keyword,
        setKeyword,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
