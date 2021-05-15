import React from "react";
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

function Home() {
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
      <img className="logo" src={logo}></img>
      <div className="container-butoes">
        <CatalogButton image={aneis} name="aneis"></CatalogButton>
        <CatalogButton image={brincos} name="brincos"></CatalogButton>
        <CatalogButton image={colares} name="colares"></CatalogButton>
        <CatalogButton image={pingentes} name="pingentes"></CatalogButton>
        <CatalogButton image={pratas} name="pratas"></CatalogButton>
        <CatalogButton image={pulseiras} name="pulseiras"></CatalogButton>
        <CatalogButton
          image={tornozeleiras}
          name="tornozeleiras"
        ></CatalogButton>
      </div>
    </div>
  );
}

export default Home;
