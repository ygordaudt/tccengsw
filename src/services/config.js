import axios from "axios";
import { Loading } from 'quasar'

export const http = axios.create({
    baseURL: 'https://tccengsw-api-production.up.railway.app/api'
})

http.interceptors.request.use((config) => {
    Loading.show();
    return config;
});
  
http.interceptors.response.use(
    (response) => {
        Loading.hide();
        return response;
    },
    (error) => {
        Loading.hide();
        return Promise.reject(error);
    }
);