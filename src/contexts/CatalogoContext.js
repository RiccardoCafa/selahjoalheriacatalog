import React, { createContext, useState } from "react";

export const CatalogoContext = createContext({});

export function CatalogoProvider({ children }) {
  const [catalog, setCatalog] = useState([]);

  console.log(catalog);
  return (
    <CatalogoContext.Provider value={{ catalog, setCatalog }}>
      {children}
    </CatalogoContext.Provider>
  );
}
