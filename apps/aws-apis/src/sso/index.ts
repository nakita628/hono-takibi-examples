import { OpenAPIHono } from '@hono/zod-openapi'
import { assignmentHandler, federationHandler, logoutXAmzSsoBearerTokenHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', federationHandler)
  .route('/', assignmentHandler)
  .route('/', logoutXAmzSsoBearerTokenHandler)

export default app
