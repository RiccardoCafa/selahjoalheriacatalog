import React, { useContext } from "react";
import { CatalogoContext } from "../../contexts/CatalogoContext";

import "./style.css";

function Catalog() {
  const { catalog } = useContext(CatalogoContext);

  return (
    <div className="container">
      {catalog === undefined || catalog.length === 0 ? (
        <div>
          <p>Ops! Não encontrei o que foi solicitado.</p>
        </div>
      ) : (
        catalog.map((image) => (
          <img
            className="catalog-img"
            src={image.default}
            alt="gostou? tira print e mande para o nosso whatsapp"
          ></img>
        ))
      )}
    </div>
  );
}

export default Catalog;
