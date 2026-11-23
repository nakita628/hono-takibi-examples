import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, listsHandler, namesHandler, swatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', listsHandler)
  .route('/', namesHandler)
  .route('/', swatchHandler)

export default app
