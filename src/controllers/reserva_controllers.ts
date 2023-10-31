import { Request, Response } from 'express'
import { AddReservaService } from 'src/services/reserva_services'

export class ReservaControllers {
    async addReserva (request: Request, response: Response): Promise<Response> {
        const reservaService = new AddReservaService()
        const { nomeCompleto, dataHora, numeroPessoas, whatsapp, ocasiaoEspecial } = request.body
        const reserva = await reservaService.addReserva(nomeCompleto, dataHora, numeroPessoas, whatsapp, ocasiaoEspecial)
        return response.json(reserva)
    }
}
