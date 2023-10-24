import { type Router } from 'express'
import { RestauranteController } from '../controllers/restaurante_controllers'

const restauranteController = new RestauranteController()

export default (router: Router): void => {
  router.post('/restaurantes/registrar', restauranteController.addRestaurante)
}