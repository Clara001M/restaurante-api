import { Router } from 'express'
import { ReservaControllers } from 'src/controllers/reserva_controllers'

const reservaController = new ReservaControllers()
export default (router: Router): void => {
  router.post('/reservas', reservaController.addReserva)
}
