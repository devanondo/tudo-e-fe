import axios from 'axios';
import { getCookies } from './cookie';

const AUTH_TOKEN = getCookies('tudo__coo__kie');

const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

apiInstance.defaults.headers.common['authorization'] = AUTH_TOKEN;

export default apiInstance;
