import { OpenAPIHono } from '@hono/zod-openapi'
import {
  characterDataHandler,
  classHandler,
  classLevelsHandler,
  classResourceListsHandler,
  commonHandler,
  equipmentHandler,
  featsHandler,
  featuresHandler,
  gameMechanicsHandler,
  monstersHandler,
  racesHandler,
  rulesHandler,
  spellsHandler,
  subclassesHandler,
  subracesHandler,
  traitsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', commonHandler)
  .route('/', characterDataHandler)
  .route('/', classHandler)
  .route('/', classResourceListsHandler)
  .route('/', classLevelsHandler)
  .route('/', gameMechanicsHandler)
  .route('/', equipmentHandler)
  .route('/', featsHandler)
  .route('/', featuresHandler)
  .route('/', monstersHandler)
  .route('/', racesHandler)
  .route('/', rulesHandler)
  .route('/', spellsHandler)
  .route('/', subclassesHandler)
  .route('/', subracesHandler)
  .route('/', traitsHandler)

export default app
