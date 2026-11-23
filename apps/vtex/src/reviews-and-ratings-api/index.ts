import { OpenAPIHono } from '@hono/zod-openapi'
import { ratingHandler, reviewHandler, reviewsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ratingHandler)
  .route('/', reviewHandler)
  .route('/', reviewsHandler)

export default app
