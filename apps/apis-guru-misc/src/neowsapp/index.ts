import { OpenAPIHono } from '@hono/zod-openapi'
import { feedHandler, neoHandler, neosentryHandler, statsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', feedHandler)
  .route('/', neoHandler)
  .route('/', neosentryHandler)
  .route('/', statsHandler)

export default app
