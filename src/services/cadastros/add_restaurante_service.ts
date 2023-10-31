import { AppDataSource } from '@config/app_data_source'
import { Restaurante } from 'src/models/restaurante'

export class AddRestauranteService {
    async addRestaurante (nomeCompleto: string, cnpj: string, email: string, senha: string,  
        contato: string, logradouro: string, bairro: string, cidade: string, confirmarSenha: string): Promise<Restaurante> {
            const restauranteRepository = AppDataSource.getRepository(Restaurante)
            const restaurante = restauranteRepository.create({ nomeCompleto, cnpj, email, senha,  
                contato, logradouro, bairro, cidade })
            const restauranteDB = await restauranteRepository.save(restaurante)
            return restauranteDB
        }
}