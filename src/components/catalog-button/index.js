import React, { useState } from "react";
import "./style.css";

function CatalogButton(props) {
  const [showTitle, setShowTitle] = useState(false);

  function onEnter() {
    setShowTitle(true);
  }

  function onExit() {
    setShowTitle(false);
  }

  return (
    <div className="butao-catalog-container">
      <button
        width="100%"
        className="butao-catalog"
        onMouseEnter={() => onEnter()}
        onMouseLeave={() => onExit()}
      >
        <img src={props.image}></img>
      </button>
      <p className="subtitle">{props.name}</p>
    </div>
  );
}

export default CatalogButton;
