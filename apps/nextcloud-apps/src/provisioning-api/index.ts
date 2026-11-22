import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appConfigHandler,
  appsHandler,
  groupsHandler,
  preferencesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', groupsHandler)
  .route('/', usersHandler)
  .route('/', appConfigHandler)
  .route('/', preferencesHandler)

export default app
