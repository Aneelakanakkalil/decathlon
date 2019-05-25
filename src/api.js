import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
    posts: {
        get: () => axios.get(`${BASE_URL}/posts`).then(res => res.data),
        delete: (id) => axios.delete(`${BASE_URL}/posts/${id}`).then(res => res.data),
        update: (id, data) => axios.patch(`${BASE_URL}/posts/${id}`, data).then(res => res.data),
    }
};