import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BqLqQ_4lYJ3EJ4sGm3Ag5m6qOGD-F57xWLJISQxsX0U'
    }
});