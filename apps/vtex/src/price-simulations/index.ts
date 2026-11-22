import { OpenAPIHono } from '@hono/zod-openapi'
import { customPricesHandler, priceAssociationHandler, sessionManagementHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', priceAssociationHandler)
  .route('/', customPricesHandler)
  .route('/', sessionManagementHandler)

export default app
