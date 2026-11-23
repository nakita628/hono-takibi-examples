import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  consumptionHistoryHandler,
  organizationsHandler,
  projectsHandler,
  regionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeysHandler)
  .route('/', projectsHandler)
  .route('/', consumptionHistoryHandler)
  .route('/', organizationsHandler)
  .route('/', regionsHandler)
  .route('/', usersHandler)

export default app
