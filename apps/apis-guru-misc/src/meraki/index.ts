import { OpenAPIHono } from '@hono/zod-openapi'
import { devicesHandler, networksHandler, organizationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', devicesHandler)
  .route('/', networksHandler)
  .route('/', organizationsHandler)

export default app
