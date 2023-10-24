import { type Router } from 'express'
import { CandidatoController } from '../controllers/cadastro_controller'

const candidatoController = new CandidatoController()

export default (router: Router): void => {
  router.post('/candidatos/registrar', candidatoController.addCandidato)
}
