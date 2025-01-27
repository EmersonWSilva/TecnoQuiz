import React, { useState, useEffect } from 'react';
import { fetchQuestions, submitAnswers } from '../services/api';
import '../styles/Quiz.css';


const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [results, setResults] = useState(null);

    useEffect(() => {
        const loadQuestions = async () => {
            const data = await fetchQuestions();
            setQuestions(data);
            setAnswers(new Array(data.length).fill(null));
        };
        loadQuestions();
    }, []);

    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = async () => {
        const data = await submitAnswers(answers);
        setResults(data);
    };

    if (results) {
        return (
            <div className="results">
                <h1>Resultados</h1>
                <p>Total de perguntas: {results.totalQuestions}</p>
                <p>Acertos: {results.correctAnswers}</p>
                <p>Percentual de acertos: {results.percentage}%</p>
            </div>
        );
    }

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {questions.map((q, index) => (
                <div key={q.id} className="question">
                    <h2>{q.question}</h2>
                    {q.options.map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                onChange={() => handleAnswerChange(index, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Enviar Respostas</button>
        </div>
    );
};

export default Quiz;
