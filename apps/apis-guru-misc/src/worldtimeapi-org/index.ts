import { OpenAPIHono } from '@hono/zod-openapi'
import { ipHandler, ipTxtHandler, timezoneHandler, timezoneTxtHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ipHandler)
  .route('/', ipTxtHandler)
  .route('/', timezoneHandler)
  .route('/', timezoneTxtHandler)

export default app
