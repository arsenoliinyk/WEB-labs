import React, { createContext, useEffect, useState } from "react";
import helicoptersApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [helicopterTypes, setHelicopterTypes] = useState([]);
  const [filters, setFilters] = useState([]);
  const [helicopters, setHelicopters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    helicoptersApi
      .getHelicopterTypes()
      .then(({ data }) => setHelicopterTypes(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    helicoptersApi
      .getHelicopters(filters)
      .then(({ data }) => {
        setHelicopters(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filters]);

  return (
    <GlobalContext.Provider
      value={{
        helicopters,
        searchKeyword,
        filters,
        isLoading,
        helicopterTypes,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
