import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import '../styles/ResultsScreen.css';

// Registrar elementos necessários
ChartJS.register(ArcElement, Tooltip, Legend);

const ResultsScreen = ({ results, onRestart }) => {
    // Configuração dos dados para o gráfico de pizza
    const data = {
        labels: ['Acertos', 'Erros'],
        datasets: [
            {
                data: [results.correctAnswers, results.totalQuestions - results.correctAnswers],
                backgroundColor: ['#8e44ad', '#2c3e50'], // Roxo para acertos, tom escuro para erros
                hoverBackgroundColor: ['#9b59b6', '#34495e'], // Cores mais claras ao passar o mouse
            },
        ],
    };

    return (
        <div className="results-screen">
            <div className="results-container">
                <h1>Resultados</h1>
                <div className="chart-container">
                    <Pie data={data} />
                </div>
                <div className="legend-container">
                    <p>
                        <span className="legend-item legend-correct">Acertos</span>: {results.correctAnswers}
                    </p>
                    <p>
                        <span className="legend-item legend-wrong">Erros</span>: {results.totalQuestions - results.correctAnswers}
                    </p>
                </div>
                <p>Total de perguntas: {results.totalQuestions}</p>
                <p>Percentual de acertos: {results.percentage}%</p>
                <button onClick={onRestart}>Reiniciar Quiz</button>
            </div>
        </div>
    );
};

export default ResultsScreen;
