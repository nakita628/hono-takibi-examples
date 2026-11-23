import { OpenAPIHono } from '@hono/zod-openapi'
import { readHandler, recognizeTextHandler, textOperationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', readHandler)
  .route('/', recognizeTextHandler)
  .route('/', textOperationsHandler)

export default app
