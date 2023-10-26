import React from "react";
import "./Home.css";
import banner from "../images/bannerDEF.png";
import img1 from "../images/Platanot.png";
import img2 from "../images/planeta.png";

export const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="banner" />
        <h1>Bienvenido a Mi Sitio Web</h1>
        <p>Descubre todo lo que tenemos para ofrecerte.</p>
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
