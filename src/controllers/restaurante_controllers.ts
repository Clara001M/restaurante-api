import { type Request, type Response } from 'express'
import { AddRestauranteService } from '../services/cadastros/add_restaurante_service'
export class RestauranteController {
    async addRestaurante (request: Request, response: Response): Promise<Response> {
        const restauranteService = new AddRestauranteService()

        const {
          nomeCompleto, cnpj, email, senha,  
        contato, logradouro, bairro, cidade, confirmarSenha
} = request.body

        // // comparar senha
        // if (senha !== confirmarSenha) {
        //     throw new Error('Senha não confirmada')
     //   }

        const restaurante = await restauranteService.addRestaurante(nomeCompleto, cnpj, email,
           senha,  contato, logradouro, bairro, cidade, confirmarSenha)
        return response.json(restaurante)
    }
}