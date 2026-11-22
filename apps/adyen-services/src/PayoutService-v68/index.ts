import { OpenAPIHono } from '@hono/zod-openapi'
import { initializationHandler, instantPayoutsHandler, reviewingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', reviewingHandler)
  .route('/', instantPayoutsHandler)
  .route('/', initializationHandler)

export default app
