'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Questions', [
            {
                question: 'Qual comando é usado para iniciar um novo projeto Node.js?',
                options: JSON.stringify(['npm start', 'npm init', 'node new', 'npm create']),
                answer: 'npm init',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual é a função principal do Express.js?',
                options: JSON.stringify([
                    'Criar interfaces gráficas',
                    'Gerenciar o banco de dados',
                    'Construir servidores e APIs',
                    'Executar tarefas em segundo plano',
                ]),
                answer: 'Construir servidores e APIs',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual comando é usado para criar um projeto React?',
                options: JSON.stringify([
                    'npm create-react',
                    'npx create-react-app',
                    'npm init react',
                    'node react-init',
                ]),
                answer: 'npx create-react-app',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Em React, qual hook é usado para gerenciar estado em um componente funcional?',
                options: JSON.stringify(['useEffect', 'useState', 'useRef', 'useContext']),
                answer: 'useState',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual é o método HTTP usado para atualizar dados em uma API REST?',
                options: JSON.stringify(['GET', 'POST', 'PUT', 'DELETE']),
                answer: 'PUT',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual biblioteca é amplamente usada para fazer requisições HTTP no Node.js?',
                options: JSON.stringify(['Express', 'Axios', 'React', 'Redux']),
                answer: 'Axios',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'No React, onde você normalmente define o estado inicial de um componente?',
                options: JSON.stringify([
                    'No constructor',
                    'No método render',
                    'Usando o hook useState',
                    'No arquivo App.js',
                ]),
                answer: 'Usando o hook useState',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Em Node.js, qual módulo é usado para manipular o sistema de arquivos?',
                options: JSON.stringify(['fs', 'path', 'os', 'http']),
                answer: 'fs',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual comando é usado para instalar dependências em um projeto Node.js?',
                options: JSON.stringify(['node install', 'npm install', 'npm start', 'node add']),
                answer: 'npm install',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual é o propósito do arquivo package.json em um projeto Node.js?',
                options: JSON.stringify([
                    'Definir os estilos da aplicação',
                    'Armazenar dados do banco de dados',
                    'Listar as dependências e informações do projeto',
                    'Executar o servidor',
                ]),
                answer: 'Listar as dependências e informações do projeto',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Questions', null, {});
    },
};
