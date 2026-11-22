import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, captionsHandler, jobsHandler, transcriptHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', jobsHandler)
  .route('/', captionsHandler)
  .route('/', transcriptHandler)

export default app
