import { OpenAPIHono } from '@hono/zod-openapi'
import { catalogHandler, entriesHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', catalogHandler)
  .route('/', entriesHandler)
  .route('/', projectsHandler)

export default app
