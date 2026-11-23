import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, clusterHandler, namespacesHandler, systemInfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', clusterHandler)
  .route('/', namespacesHandler)
  .route('/', systemInfoHandler)

export default app
