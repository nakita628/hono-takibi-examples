import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  organizationsHandler,
  projectsHandler,
  seerHandler,
  sentryAppInstallationsHandler,
  sentryAppsHandler,
  teamsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', organizationsHandler)
  .route('/', projectsHandler)
  .route('/', seerHandler)
  .route('/', sentryAppInstallationsHandler)
  .route('/', sentryAppsHandler)
  .route('/', teamsHandler)
  .route('/', usersHandler)

export default app
