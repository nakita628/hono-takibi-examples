import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, downloadHandler, feedsHandler, staticHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', staticHandler)
  .route('/', downloadHandler)
  .route('/', feedsHandler)
  .route('/', apiHandler)

export default app
