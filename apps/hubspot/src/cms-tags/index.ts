import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, batchHandler, multiLanguageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', batchHandler)
  .route('/', multiLanguageHandler)

export default app
