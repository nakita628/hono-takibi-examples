import { OpenAPIHono } from '@hono/zod-openapi'
import { divisionsHandler, electionsHandler, representativesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', divisionsHandler)
  .route('/', electionsHandler)
  .route('/', representativesHandler)

export default app
