import { OpenAPIHono } from '@hono/zod-openapi'
import { analysisHandler, projectHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectHandler)
  .route('/', analysisHandler)
  .route('/', userHandler)

export default app
