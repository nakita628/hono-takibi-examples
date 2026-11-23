import { OpenAPIHono } from '@hono/zod-openapi'
import { contentHandler, documentHandler, searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', contentHandler)
  .route('/', documentHandler)
  .route('/', searchHandler)

export default app
