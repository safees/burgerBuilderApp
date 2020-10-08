import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerbuilderapp-ad309.firebaseio.com/'
});

export default instance;