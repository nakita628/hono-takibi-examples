import { OpenAPIHono } from '@hono/zod-openapi'
import { callbackHandler, connectorPlatformRegionsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', callbackHandler)
  .route('/', connectorPlatformRegionsHandler)
  .route('/', projectsHandler)

export default app
