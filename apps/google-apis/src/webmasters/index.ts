import { OpenAPIHono } from '@hono/zod-openapi'
import { searchanalyticsHandler, sitemapsHandler, sitesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', sitesHandler)
  .route('/', searchanalyticsHandler)
  .route('/', sitemapsHandler)

export default app
