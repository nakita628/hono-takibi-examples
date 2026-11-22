import { OpenAPIHono } from '@hono/zod-openapi'
import { connectionsHandler, consumersHandler, logsHandler, sessionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', connectionsHandler)
  .route('/', consumersHandler)
  .route('/', logsHandler)
  .route('/', sessionsHandler)

export default app
