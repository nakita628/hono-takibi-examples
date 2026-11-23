import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  authHandler,
  edgeHandler,
  healthHandler,
  inviteHandler,
  readyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', readyHandler)
  .route('/', healthHandler)
  .route('/', inviteHandler)
  .route('/', authHandler)
  .route('/', edgeHandler)

export default app
