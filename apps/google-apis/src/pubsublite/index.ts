import { OpenAPIHono } from '@hono/zod-openapi'
import { adminHandler, cursorHandler, topicStatsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', cursorHandler)
  .route('/', topicStatsHandler)

export default app
