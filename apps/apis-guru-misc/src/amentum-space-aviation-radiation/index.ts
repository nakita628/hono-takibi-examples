import { OpenAPIHono } from '@hono/zod-openapi'
import { cari7Handler, parmaHandler, routedoseHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cari7Handler)
  .route('/', parmaHandler)
  .route('/', routedoseHandler)

export default app
