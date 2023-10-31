import { type Request, type Response } from 'express'
import { AddUsuarioService } from '../services/usuarios/add_usuario_service'

export class CandidatoController {
    async addCandidato (request: Request, response: Response): Promise<Response> {
        const usuarioService = new AddUsuarioService()
        const {
 apelido, email, senha, confirmarSenha,
            nomeCompleto, cpf, whatsapp, sexo, dataNascimento
} = request.body

        // comparar senha
        if (senha !== confirmarSenha) {
            throw new Error('Senha não confirmada')
        }

        const usuario = await usuarioService.add(apelido, email, senha)
        const candidato = await usuarioService.addUsuario(nomeCompleto, cpf, whatsapp, dataNascimento,
            sexo, usuario)
        return response.json(candidato)
    }
}
