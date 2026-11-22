import { OpenAPIHono } from '@hono/zod-openapi'
import { aliasHandler, clickHandler, statisticsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aliasHandler)
  .route('/', clickHandler)
  .route('/', statisticsHandler)

export default app
