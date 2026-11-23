import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cardsHandler,
  categoriesHandler,
  dexIdsHandler,
  energyTypesHandler,
  hpHandler,
  illustratorsHandler,
  raritiesHandler,
  regulationMarksHandler,
  retreatsHandler,
  seriesHandler,
  setsHandler,
  stagesHandler,
  suffixesHandler,
  trainerTypesHandler,
  typesHandler,
  variantsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cardsHandler)
  .route('/', categoriesHandler)
  .route('/', dexIdsHandler)
  .route('/', energyTypesHandler)
  .route('/', hpHandler)
  .route('/', illustratorsHandler)
  .route('/', raritiesHandler)
  .route('/', regulationMarksHandler)
  .route('/', retreatsHandler)
  .route('/', seriesHandler)
  .route('/', setsHandler)
  .route('/', stagesHandler)
  .route('/', suffixesHandler)
  .route('/', trainerTypesHandler)
  .route('/', typesHandler)
  .route('/', variantsHandler)

export default app
