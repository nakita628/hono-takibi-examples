import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, ordersHandler, productsHandler, storesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customersHandler)
  .route('/', ordersHandler)
  .route('/', productsHandler)
  .route('/', storesHandler)

export default app
