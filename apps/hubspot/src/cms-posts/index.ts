import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, batchHandler, multiLanguageHandler, revisionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', batchHandler)
  .route('/', multiLanguageHandler)
  .route('/', revisionsHandler)

export default app
