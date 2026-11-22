import { OpenAPIHono } from '@hono/zod-openapi'
import { alarmsHandler, detectorsHandler, inputsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alarmsHandler)
  .route('/', detectorsHandler)
  .route('/', inputsHandler)

export default app
