import { OpenAPIHono } from '@hono/zod-openapi'
import { appsHandler, artifactsHandler, tagsHandler, webhooksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', webhooksHandler)
  .route('/', artifactsHandler)
  .route('/', tagsHandler)

export default app
