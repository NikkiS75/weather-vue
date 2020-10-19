import axios  from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    params:{
        lat: 47.2364,
        lon: 39.7139,
        appid: '38f8955e44f8402434037d945959799c',
        units:'metric',
        lang: 'ru'
    }
});

export default instance;

