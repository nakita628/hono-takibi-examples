import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, retainedMessageHandler, thingsHandler, topicsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', thingsHandler)
  .route('/', retainedMessageHandler)
  .route('/', apiHandler)
  .route('/', topicsHandler)

export default app
