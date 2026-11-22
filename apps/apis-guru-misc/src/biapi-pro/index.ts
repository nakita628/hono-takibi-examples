import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administrationHandler,
  authenticationHandler,
  banksHandler,
  connectionsHandler,
  pfmHandler,
  timelineHandler,
  usersManagementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', banksHandler)
  .route('/', authenticationHandler)
  .route('/', pfmHandler)
  .route('/', connectionsHandler)
  .route('/', administrationHandler)
  .route('/', timelineHandler)
  .route('/', usersManagementHandler)

export default app
