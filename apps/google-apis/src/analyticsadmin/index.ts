import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, accountSummariesHandler, propertiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountSummariesHandler)
  .route('/', accountsHandler)
  .route('/', propertiesHandler)

export default app
