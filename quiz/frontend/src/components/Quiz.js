import React, { useState, useEffect } from 'react';
import { fetchQuestions, submitAnswers } from '../services/api';
import '../styles/Quiz.css';

const Quiz = ({ onFinish }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const loadQuestions = async () => {
            const data = await fetchQuestions();
            setQuestions(data);
            setAnswers(new Array(data.length).fill(null));
        };
        loadQuestions();
    }, []);

    const handleAnswerChange = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleSubmit = async () => {
        const data = await submitAnswers(answers);
        onFinish(data);
    };

    if (questions.length === 0) {
        return <p>Carregando perguntas...</p>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz">
            <div className="quiz-container">
                <h1>{`Pergunta ${currentQuestionIndex + 1} de ${questions.length}`}</h1>
                <div className="question">
                    <h2>{currentQuestion.question}</h2>
                </div>
                <div className="options">
                    {currentQuestion.options.map((option) => (
                        <label key={option} className="option">
                            <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={option}
                                checked={answers[currentQuestionIndex] === option}
                                onChange={() => handleAnswerChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="navigation">
                    <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                        Anterior
                    </button>
                    {currentQuestionIndex === questions.length - 1 ? (
                        <button onClick={handleSubmit}>Enviar Respostas</button>
                    ) : (
                        <button onClick={handleNext}>Próxima</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
