import { OpenAPIHono } from '@hono/zod-openapi'
import { userHandler, workspacesHandler, workspaceSlugHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', userHandler)
  .route('/', workspacesHandler)
  .route('/', workspaceSlugHandler)

export default app
