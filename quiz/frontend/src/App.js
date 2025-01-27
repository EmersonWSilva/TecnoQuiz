import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('start'); // Controle da tela atual
    const [results, setResults] = useState(null); // Resultados do quiz

    const startQuiz = () => {
        setCurrentScreen('quiz'); // Vai para o quiz
    };

    const finishQuiz = (quizResults) => {
        setResults(quizResults); // Salva os resultados
        setCurrentScreen('results'); // Vai para a tela de resultados
    };

    const restartQuiz = () => {
        setResults(null); // Limpa os resultados
        setCurrentScreen('start'); // Volta para a tela inicial
    };

    return (
        <div>
            {currentScreen === 'start' && <StartScreen onStart={startQuiz} />}
            {currentScreen === 'quiz' && <Quiz onFinish={finishQuiz} />}
            {currentScreen === 'results' && (
                <ResultsScreen results={results} onRestart={restartQuiz} />
            )}
        </div>
    );
};

export default App;
