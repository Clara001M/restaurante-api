import { type Request, type Response } from 'express'
import { AddUsuarioService } from '../services/usuarios/add_usuario_service'
import { AddRestauranteService } from '../services/cadastros/add_restaurante_service'

export class RestauranteController {
    async addRestaurante (request: Request, response: Response): Promise<Response> {
        const usuarioService = new AddUsuarioService()
        const restauranteService = new AddRestauranteService()

        const {
            nomeCompleto, cnpj, email, contato, logradouro, bairro, cidade, cep, senha, confirmarSenha
} = request.body

        // comparar senha
        if (senha !== confirmarSenha) {
            throw new Error('Senha não confirmada')
        }

        const usuario = await usuarioService.add(email, senha)
        const restaurante = await restauranteService.addRestaurante(nomeCompleto, cnpj, email, contato,
            logradouro, bairro, cidade, cep)
        return response.json(restaurante)
    }
}