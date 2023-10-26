import React from "react";
import img1 from "../images/Us.png";
import "./SobreNosotrosSection.css";
import cata from "../images/cat-cata.jpg";
import cris from "../images/cat-cris.jpeg";
import dani from "../images/cat-dani.jpg";
import fran from "../images/cat-fran.jpg";
import pau from "../images/cat-paula.png";
export default function SobreNosotrosSection() {
  return (
    <div className="containerUs">
      <div className="bannerus" id="B-us">
        <img src={img1} alt="imagen1" />
      </div>
      <p>
        Somos un grupo de 5 personas apasionadas por el compostaje y la
        sostenibilidad. <br /> Cada uno aportó una perpectiva unica y
        habilidades distinas para llevar acabo esta app web <br /> que fue
        creada con mucha dedicación y esfuerzo, para formar una nueva
        generación.
      </p>
      <section>
        <div className="ContainerTarjetas">
          <img src={cris} alt="Cris" />
          <img src={cata} alt="Cata" />
          <img src={dani} alt="Dani" />
          <img src={fran} alt="Fran" />
          <img src={pau} alt="Pau" />
        </div>
      </section>
    </div>
  );
}
