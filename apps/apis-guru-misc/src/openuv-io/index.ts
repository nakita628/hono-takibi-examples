import { OpenAPIHono } from '@hono/zod-openapi'
import { forecastHandler, protectionHandler, uvHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', forecastHandler)
  .route('/', protectionHandler)
  .route('/', uvHandler)

export default app
