import { OpenAPIHono } from '@hono/zod-openapi'
import { functionHandler, internalHandler, systemHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', internalHandler)
  .route('/', systemHandler)
  .route('/', functionHandler)

export default app
