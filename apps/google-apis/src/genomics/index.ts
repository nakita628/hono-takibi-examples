import { OpenAPIHono } from '@hono/zod-openapi'
import { pipelinesHandler, projectsHandler, workersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', pipelinesHandler)
  .route('/', workersHandler)
  .route('/', projectsHandler)

export default app
