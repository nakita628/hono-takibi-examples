import { OpenAPIHono } from '@hono/zod-openapi'
import { analyseHandler, createHandler, manageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', manageHandler)
  .route('/', createHandler)
  .route('/', analyseHandler)

export default app
