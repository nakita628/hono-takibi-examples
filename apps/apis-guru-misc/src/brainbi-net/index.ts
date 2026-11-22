import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  customersHandler,
  ordersHandler,
  pricingRulesHandler,
  productsHandler,
  seoHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productsHandler)
  .route('/', customersHandler)
  .route('/', apiHandler)
  .route('/', ordersHandler)
  .route('/', pricingRulesHandler)
  .route('/', seoHandler)

export default app
