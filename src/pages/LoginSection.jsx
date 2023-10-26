import React, { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ILsLl4VGSh8Bj9br6WTdlakyPIootfo",
  authDomain: "compostemos-b45e5.firebaseapp.com",
  projectId: "compostemos-b45e5",
  storageBucket: "compostemos-b45e5.appspot.com",
  messagingSenderId: "768123855682",
  appId: "1:768123855682:web:7b8205c14c807484585edb",
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Crea una instancia de GoogleAuthProvider
const provider = new GoogleAuthProvider();

// Define el componente LoginSection
export const LoginSection = () => {
  const handleLoginWithGoogle = async () => {
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Aquí puedes manejar la información del usuario autenticado con Google (user)
      console.log("Usuario autenticado:", user);
    } catch (error) {
      // Manejo de errores
      console.error("Error de autenticación con Google:", error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleLoginWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};
