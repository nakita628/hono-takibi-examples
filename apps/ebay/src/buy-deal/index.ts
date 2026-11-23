import { OpenAPIHono } from '@hono/zod-openapi'
import { dealItemHandler, eventHandler, eventItemHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dealItemHandler)
  .route('/', eventHandler)
  .route('/', eventItemHandler)

export default app
