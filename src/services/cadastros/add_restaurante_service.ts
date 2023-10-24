import { AppDataSource } from '../../config/app_data_source'
import { Restaurante } from '../../models/restaurante'
import { type Usuario } from '../../models/usuario'

export class AddRestauranteService {
    async addRestaurante (nomeCompleto: string, cnpj: string, email: string, contato: string, logradouro: string, bairro: string, cidade: string, cep: string ): Promise<Restaurante> {
            const restauranteRepository = AppDataSource.getRepository(Restaurante)
            const restaurante = restauranteRepository.create({ nomeCompleto, cnpj, email, contato, logradouro, bairro, cidade, cep })
            const restauranteDB = await restauranteRepository.save(restaurante)
            return restauranteDB
        }
}