import { OpenAPIHono } from '@hono/zod-openapi'
import { facilitiesHandler, idsHandler, nearbyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', facilitiesHandler)
  .route('/', idsHandler)
  .route('/', nearbyHandler)

export default app
