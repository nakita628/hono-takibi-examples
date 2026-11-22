import { OpenAPIHono } from '@hono/zod-openapi'
import { listsFormatHandler, listsHandler, reviewsFormatHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', listsFormatHandler)
  .route('/', listsHandler)
  .route('/', reviewsFormatHandler)

export default app
