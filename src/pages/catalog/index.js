import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CatalogoContext } from "../../contexts/CatalogoContext";
import { Button, Icon } from "semantic-ui-react";

import "./style.css";

function Catalog() {
  let history = useHistory();
  const { catalog } = useContext(CatalogoContext);

  useEffect(() => {
    if (catalog.length === 0) {
      history.push("/");
    }
  });

  function goHome() {
    history.push("/");
  }

  return (
    <div className="container">
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyItems: "left",
          alignContent: "flex-start",
          width: "100%",
          paddingLeft: "1.5rem",
        }}
      >
        <Button icon basic labelPosition="left" onClick={() => goHome()}>
          <Icon name="home" />
          Voltar
        </Button>
      </div>
      {catalog === undefined || catalog.length === 0 ? (
        <div>
          <p>Ops! Não encontrei o que foi solicitado.</p>
        </div>
      ) : (
        catalog.map((image, key) => (
          <img
            className="catalog-img"
            src={image.default}
            key={key}
            alt="gostou? tira print e mande para o nosso whatsapp"
          ></img>
        ))
      )}
    </div>
  );
}

export default Catalog;
