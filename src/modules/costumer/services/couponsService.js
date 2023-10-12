import { http } from 'src/services/config';

export default {

    listarDisponiveis: () => {
        return http.get('cupom-fiscal/serpro/disponivel')
    }
}