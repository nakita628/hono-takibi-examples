import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceHandler, configurationHandler, secretManagementHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', balanceHandler)
  .route('/', configurationHandler)
  .route('/', secretManagementHandler)

export default app
