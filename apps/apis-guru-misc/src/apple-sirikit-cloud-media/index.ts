import { OpenAPIHono } from '@hono/zod-openapi'
import { configurationHandler, intentHandler, queuesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configurationHandler)
  .route('/', intentHandler)
  .route('/', queuesHandler)

export default app
