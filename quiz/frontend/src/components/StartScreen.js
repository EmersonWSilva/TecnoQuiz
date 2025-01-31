import React from 'react';
import '../styles/StartScreen.css';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-container">
        <img
          src="/tecnoQuizLogo.webp"
          alt="Tecno Quiz Logo"
          className="logo"
        />
        <p>
          Bem-vindo ao Tecno Quiz! <br />
          Teste seus conhecimentos de Desenvolvimento Full Stack.
        </p>
        <button onClick={onStart}>Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default StartScreen;
