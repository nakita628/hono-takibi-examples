import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adressesHandler,
  catchementAreasHandler,
  creditCardsHandler,
  ecoTaCoAPIRootHandler,
  productsHandler,
  promotionalCodesHandler,
  ridesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ecoTaCoAPIRootHandler)
  .route('/', accountsHandler)
  .route('/', adressesHandler)
  .route('/', catchementAreasHandler)
  .route('/', creditCardsHandler)
  .route('/', productsHandler)
  .route('/', promotionalCodesHandler)
  .route('/', ridesHandler)

export default app
