import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CatalogoContext } from "../../contexts/CatalogoContext";
import { Icon, Menu } from "semantic-ui-react";

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
    <div>
      <Menu fixed="top" icon="labeled">
        <Menu.Item name="house" onClick={() => goHome()}>
          <Icon name="home"></Icon>
          Home
        </Menu.Item>
      </Menu>
      <div className="container">
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
    </div>
  );
}

export default Catalog;
