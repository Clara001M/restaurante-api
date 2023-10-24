import { AppDataSource } from '@config/app_data_source'
import { Reserva } from 'src/models/reserva'

export class AddReservaService {
    async addReserva (nomeCompleto: string, dataHora: Date, whatsapp: string,
        numeroPessoas: number, ocasiaoEspecial: string): Promise<Reserva> {
            const reservaRepository = AppDataSource.getRepository(Reserva)
            const reserva = reservaRepository.create({ nomeCompleto, dataHora, numeroPessoas, whatsapp, ocasiaoEspecial })
            const reservaDB = await reservaRepository.save(reserva)
            return reservaDB
        }
}
