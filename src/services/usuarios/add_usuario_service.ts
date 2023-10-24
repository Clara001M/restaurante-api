import { AppDataSource } from '../../config/app_data_source'
import { Usuario } from "src/models/usuario"

export class AddUsuarioService {
    async add (email: string, senha: string,): Promise<Usuario> {
        const usuarioRepository = AppDataSource.getRepository(Usuario)
        const usuario = usuarioRepository.create({ email, senha })
        const usuarioDB = await usuarioRepository.save(usuario)
        return usuarioDB
    }
}