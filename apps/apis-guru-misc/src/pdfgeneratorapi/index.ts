import { OpenAPIHono } from '@hono/zod-openapi'
import { documentsHandler, templatesHandler, workspacesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', templatesHandler)
  .route('/', documentsHandler)
  .route('/', workspacesHandler)

export default app
