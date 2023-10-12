import { http } from 'src/services/config';

export default {

    listar: () => {
        return http.get('solicitacao-cashback')
    },
    registrar: (codigoCupom) => {
        return http.post(`solicitacao-cashback/cupom-fiscal/${codigoCupom}`, null,
        { headers : {
            'loginCliente': '123'
        }})
    },
    deletar: (id) => {
        return http.delete(`solicitacao-cashback/${id}`)
    },
    consultar: (id) => {
        return http.get(`solicitacao-cashback/${id}`)
    }

}