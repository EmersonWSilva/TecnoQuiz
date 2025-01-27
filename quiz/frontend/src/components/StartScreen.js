import React from 'react';
import '../styles/StartScreen.css';

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen">
            <div className="start-container">
                <h1>Codi Quiz</h1>
                <p>
                    Bem-vindo ao Codi Quiz! <br />
                    Teste seus conhecimentos de desenvolvimento Full Stack.
                </p>
                <button onClick={onStart}>Iniciar Quiz</button>
            </div>
        </div>
    );
};

export default StartScreen;
