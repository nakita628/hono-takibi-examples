import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  editsHandler,
  externaltransactionsHandler,
  generatedapksHandler,
  grantsHandler,
  inappproductsHandler,
  internalappsharingartifactsHandler,
  monetizationHandler,
  ordersHandler,
  purchasesHandler,
  reviewsHandler,
  systemapksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', internalappsharingartifactsHandler)
  .route('/', applicationsHandler)
  .route('/', editsHandler)
  .route('/', generatedapksHandler)
  .route('/', inappproductsHandler)
  .route('/', ordersHandler)
  .route('/', monetizationHandler)
  .route('/', purchasesHandler)
  .route('/', reviewsHandler)
  .route('/', systemapksHandler)
  .route('/', usersHandler)
  .route('/', externaltransactionsHandler)
  .route('/', grantsHandler)

export default app
