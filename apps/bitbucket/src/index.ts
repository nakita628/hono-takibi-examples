import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonHandler,
  hookEventsHandler,
  repositoriesHandler,
  snippetsHandler,
  teamsHandler,
  userHandler,
  usersHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addonHandler)
  .route('/', hookEventsHandler)
  .route('/', repositoriesHandler)
  .route('/', snippetsHandler)
  .route('/', teamsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', workspacesHandler)

export default app
