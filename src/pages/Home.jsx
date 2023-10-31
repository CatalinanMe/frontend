import React from "react";
import "./Home.css";
import img1 from "../images/Platanot.png";
import img2 from "../images/planeta.png";
import banner2 from "../images/Banner2.png";

export const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner2} alt="banner" />
        <div className="container1">
          <img src={img1} alt="imagen1" />
          <p>
            Aprende con nosotros la importancia del compostaje <br />
            ademas de como podría ayudarte en tu vida diaria reduciendo una
            cantidad significativa de basura en tu hogar <br />
            <a href="http://localhost:5173/Educacion">
              <button> ¡Quiero Aprender más! </button>
            </a>
          </p>
        </div>
        <br />
        <div className="container2">
          <img src={img2} alt="imagen2" />
          <p>
            Nuestro planeta es una gran comunidad, trabajemos en equipo para
            concientizar <br />
            <a href="http://localhost:5173/Comunidad">
              <button>Ir a la Comunidad </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
