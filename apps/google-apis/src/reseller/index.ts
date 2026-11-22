import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, resellernotifyHandler, subscriptionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customersHandler)
  .route('/', subscriptionsHandler)
  .route('/', resellernotifyHandler)

export default app
