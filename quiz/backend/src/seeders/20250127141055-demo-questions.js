'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Questions', [
            {
                question: 'Qual é a capital da França?',
                options: JSON.stringify(['Berlim', 'Madrid', 'Paris', 'Lisboa']),
                answer: 'Paris',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual é 2 + 2?',
                options: JSON.stringify(['3', '4', '5', '6']),
                answer: '4',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: 'Qual linguagem é usada no Node.js?',
                options: JSON.stringify(['Python', 'C#', 'JavaScript', 'Ruby']),
                answer: 'JavaScript',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Questions', null, {});
    },
};
