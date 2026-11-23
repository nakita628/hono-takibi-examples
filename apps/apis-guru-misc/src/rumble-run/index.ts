import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, exportHandler, orgHandler, releasesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', exportHandler)
  .route('/', orgHandler)
  .route('/', releasesHandler)

export default app
