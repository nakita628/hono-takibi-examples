import { OpenAPIHono } from '@hono/zod-openapi'
import { holidaysHandler, infoHandler, provincesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', infoHandler)
  .route('/', holidaysHandler)
  .route('/', provincesHandler)

export default app
