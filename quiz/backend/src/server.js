const express = require('express');
const cors = require('cors');
const db = require('./models');
const questionRoutes = require('./routes/questionRoutes'); // Importa as rotas

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON enviado no body das requisições

// Usa as rotas
app.use('/', questionRoutes);

// Inicia o servidor
const PORT = 5000;
app.listen(PORT, async () => {
    try {
        await db.sequelize.authenticate(); // Testa conexão com o banco
        console.log('Conexão com o banco de dados bem-sucedida.');
        console.log(`Servidor rodando na porta ${PORT}`);
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
});
