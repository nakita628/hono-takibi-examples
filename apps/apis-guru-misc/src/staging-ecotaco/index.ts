import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accountsHandler,
  addressesHandler,
  catchementAreasHandler,
  creditCardsHandler,
  productsHandler,
  promotionalCodesHandler,
  ridesHandler,
  ridesPagePagePerPagePerPageHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', accountsHandler)
  .route('/', addressesHandler)
  .route('/', catchementAreasHandler)
  .route('/', creditCardsHandler)
  .route('/', productsHandler)
  .route('/', promotionalCodesHandler)
  .route('/', ridesHandler)
  .route('/', ridesPagePagePerPagePerPageHandler)
  .route('/', versionHandler)

export default app
