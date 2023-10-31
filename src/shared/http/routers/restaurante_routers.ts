import { type Router } from 'express'
import { RestauranteController } from 'src/controllers/restaurante_controllers'
const candidatoController = new RestauranteController()

export default (router: Router): void => {
  router.post('/restaurante/registrar', candidatoController.addRestaurante)
}