import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bankAccountsHandler,
  currenciesHandler,
  documentBlocksHandler,
  documentsHandler,
  organizationHandler,
  partnersHandler,
  productsHandler,
  utilsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bankAccountsHandler)
  .route('/', currenciesHandler)
  .route('/', documentBlocksHandler)
  .route('/', documentsHandler)
  .route('/', organizationHandler)
  .route('/', partnersHandler)
  .route('/', productsHandler)
  .route('/', utilsHandler)

export default app
