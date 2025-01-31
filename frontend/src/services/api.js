import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // URL do backend
});

export const fetchQuestions = async () => {
    const response = await api.get('/quiz');
    return response.data;
};

export const submitAnswers = async (answers) => {
    const response = await api.post('/quiz', { answers });
    return response.data;
};

export default api;
