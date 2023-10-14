import axios from "axios";
import { Loading } from 'quasar'
import { showNegative } from "src/support/helpers/notification";

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
        showNegative(error.response.data || 'Ocorreu um erro na requisição.',)
        return Promise.reject(error);
    }
);