import { OpenAPIHono } from '@hono/zod-openapi'
import { processesHandler, projectsHandler, scriptsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', processesHandler)
  .route('/', projectsHandler)
  .route('/', scriptsHandler)

export default app
