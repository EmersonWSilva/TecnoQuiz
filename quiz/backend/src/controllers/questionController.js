const db = require('../models'); // Importa os modelos

// Função para buscar todas as perguntas
const getAllQuestions = async (req, res) => {
    try {
        const questions = await db.Question.findAll();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar perguntas.' });
    }
};

// Função para calcular pontuação
const calculateScore = async (req, res) => {
    const { answers } = req.body;
    try {
        const questions = await db.Question.findAll();
        let score = 0;

        answers.forEach((answer, index) => {
            if (questions[index].answer === answer) score++;
        });

        res.json({
            totalQuestions: questions.length,
            correctAnswers: score,
            percentage: ((score / questions.length) * 100).toFixed(2),
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao processar respostas.' });
    }
};

module.exports = { getAllQuestions, calculateScore };
