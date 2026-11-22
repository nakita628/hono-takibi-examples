import { OpenAPIHono } from '@hono/zod-openapi'
import { brandHandler, categoryHandler, productHandler, skuHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', brandHandler)
  .route('/', categoryHandler)
  .route('/', productHandler)
  .route('/', skuHandler)

export default app
