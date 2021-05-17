import React, { useState, useEffect, createContext } from "react";
import logo from "../../assets/logo.png";
import "./style.css";

import CatalogButton from "../../components/catalog-button/index";

import aneis from "../../assets/catalog-icons/aneis.jpg";
import brincos from "../../assets/catalog-icons/brincos.jpg";
import colares from "../../assets/catalog-icons/colares.jpg";
import pingentes from "../../assets/catalog-icons/pingentes.png";
import pratas from "../../assets/catalog-icons/pratas.jpg";
import pulseiras from "../../assets/catalog-icons/pulseiras.jpg";
import tornozeleiras from "../../assets/catalog-icons/tornozeleiras.jpg";

function importAll(r) {
  return r.keys().map(r);
}

function Home() {
  const MyContext = createContext({});
  const [aneisCatalog, setAneisCatalog] = useState([]);
  const [colaresCatalog, setColaresCatalog] = useState([]);
  const [brincosCatalog, setBrincosCatalog] = useState([]);
  const [pingentesCatalog, setPingentesCatalog] = useState([]);
  const [pratasCatalog, setPratasCatalog] = useState([]);
  const [pulseirasCatalog, setPulseirasCatalog] = useState([]);
  const [tornozeleirasCatalog, setTornozeleirasCatalog] = useState([]);

  useEffect(() => {
    var aneis = importAll(
      require.context(
        `../../assets/catalog/aneis/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var colares = importAll(
      require.context(
        `../../assets/catalog/colares/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var brincos = importAll(
      require.context(
        `../../assets/catalog/brincos/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var pingentes = importAll(
      require.context(
        `../../assets/catalog/pingentes/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var pratas = importAll(
      require.context(
        `../../assets/catalog/pratas/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var pulseiras = importAll(
      require.context(
        `../../assets/catalog/pulseiras/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    var tornozeleiras = importAll(
      require.context(
        `../../assets/catalog/tornozeleiras/`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    setAneisCatalog(aneis);
    setBrincosCatalog(brincos);
    setColaresCatalog(colares);
    setPingentesCatalog(pingentes);
    setPratasCatalog(pratas);
    setPulseirasCatalog(pulseiras);
    setTornozeleirasCatalog(tornozeleiras);
  }, []);

  return (
    <div className="container">
      <h1
        className="title"
        style={{ marginTop: "3rem", marginBottom: ".4rem" }}
      >
        Catálogo
      </h1>
      <h1 className="title" style={{ marginTop: ".4rem" }}>
        SELAH
      </h1>
      <img className="logo" src={logo} alt="selah"></img>
      <p
        style={{
          fontFamily: "Newsreader",
          marginTop: "2rem",
          fontSize: "1.1rem",
        }}
      >
        Seja bem-vinda ao nosso catálogo!
      </p>
      <div className="container-butoes">
        <CatalogButton
          image={aneis}
          name="ANÉIS"
          catalog={aneisCatalog}
        ></CatalogButton>
        <CatalogButton
          image={brincos}
          name="BRINCOS"
          catalog={brincosCatalog}
        ></CatalogButton>
        <CatalogButton
          image={colares}
          name="COLARES"
          catalog={colaresCatalog}
        ></CatalogButton>
        <CatalogButton
          image={pingentes}
          name="PINGENTES"
          catalog={pingentesCatalog}
        ></CatalogButton>
        <CatalogButton
          image={pratas}
          name="PRATAS"
          catalog={pratasCatalog}
        ></CatalogButton>
        <CatalogButton
          image={pulseiras}
          name="PULSEIRAS"
          catalog={pulseirasCatalog}
        ></CatalogButton>
        <CatalogButton
          image={tornozeleiras}
          name="TORNOZELEIRAS"
          catalog={tornozeleirasCatalog}
        ></CatalogButton>
      </div>
      <div
        style={{
          background: "black",
          width: "90%",
          height: "1px",
          marginTop: "3.5rem",
        }}
      ></div>
      <footer style={{ marginBottom: "1rem" }}>
        <p style={{ fontFamily: "Newsreader" }}>
          2021 Selah Joalheria. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
