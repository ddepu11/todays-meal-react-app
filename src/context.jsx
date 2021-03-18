import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [keyword, setKeyword] = useState("");

  return (
    <AppContext.Provider value={{ menu, setMenu, keyword, setKeyword }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
