import { OpenAPIHono } from '@hono/zod-openapi'
import { getFullPricingHandler, getPrefixPricingHandler, getPricingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getFullPricingHandler)
  .route('/', getPrefixPricingHandler)
  .route('/', getPricingHandler)

export default app
