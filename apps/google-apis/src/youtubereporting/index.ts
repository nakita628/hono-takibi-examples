import { OpenAPIHono } from '@hono/zod-openapi'
import { jobsHandler, mediaHandler, reportTypesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', jobsHandler)
  .route('/', mediaHandler)
  .route('/', reportTypesHandler)

export default app
