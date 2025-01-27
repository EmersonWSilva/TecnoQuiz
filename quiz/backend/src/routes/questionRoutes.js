const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Define as rotas e associa aos controladores
router.get('/quiz', questionController.getAllQuestions); // Rota para obter perguntas
router.post('/quiz', questionController.calculateScore); // Rota para enviar respostas

module.exports = router;
