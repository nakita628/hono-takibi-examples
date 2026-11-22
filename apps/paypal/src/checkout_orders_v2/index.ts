import { OpenAPIHono } from '@hono/zod-openapi'
import { externalcallbackHandler, ordersHandler, trackersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ordersHandler)
  .route('/', trackersHandler)
  .route('/', externalcallbackHandler)

export default app
