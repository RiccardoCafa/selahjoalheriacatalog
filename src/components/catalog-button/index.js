import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CatalogoContext } from "../../contexts/CatalogoContext";
import "./style.css";

function CatalogButton(props) {
  let history = useHistory();
  const { setCatalog } = useContext(CatalogoContext);

  function goToCatolg() {
    console.log(props.catalog);
    setCatalog(props.catalog);
    history.push("/catalog/");
  }

  return (
    <div className="butao-catalog-container">
      <button
        width="100%"
        className="butao-catalog"
        onClick={() => goToCatolg()}
      >
        <img src={props.image} alt="clica para acessar o catalogo"></img>
      </button>
      <p className="subtitle">{props.name}</p>
    </div>
  );
}

export default CatalogButton;
