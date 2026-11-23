import { OpenAPIHono } from '@hono/zod-openapi'
import {
  disableUserHandler,
  enableUserHandler,
  loginHandler,
  registerHandler,
  serversHandler,
  serverSummariesHandler,
  usernameAvailableHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', disableUserHandler)
  .route('/', enableUserHandler)
  .route('/', loginHandler)
  .route('/', registerHandler)
  .route('/', serverSummariesHandler)
  .route('/', serversHandler)
  .route('/', usernameAvailableHandler)

export default app
