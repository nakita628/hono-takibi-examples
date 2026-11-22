import { OpenAPIHono } from '@hono/zod-openapi'
import { hashesHandler, projectsHandler, threatListsHandler, urisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hashesHandler)
  .route('/', threatListsHandler)
  .route('/', urisHandler)
  .route('/', projectsHandler)

export default app
