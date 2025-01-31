import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';

const App = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [results, setResults] = useState(null);

    const handleQuizFinish = (quizResults) => {
        setResults(quizResults);
        setIsQuizStarted(false);
    };

    const handleRestart = () => {
        setResults(null);
        setIsQuizStarted(false);
    };

    if (results) {
        return <ResultsScreen results={results} onRestart={handleRestart} />;
    }

    return (
        <div>
            {isQuizStarted ? (
                <Quiz onFinish={handleQuizFinish} />
            ) : (
                <StartScreen onStart={() => setIsQuizStarted(true)} />
            )}
        </div>
    );
};

export default App;
