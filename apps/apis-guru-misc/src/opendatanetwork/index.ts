import { OpenAPIHono } from '@hono/zod-openapi'
import { dataHandler, entityHandler, searchHandler, suggestHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataHandler)
  .route('/', entityHandler)
  .route('/', searchHandler)
  .route('/', suggestHandler)

export default app
