import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertsHandler,
  categoriesHandler,
  dutiesHandler,
  eventsHandler,
  prepaidHandler,
  scriptsHandler,
  subscriptionsHandler,
  teamsHandler,
  teamsMembershipsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alertsHandler)
  .route('/', categoriesHandler)
  .route('/', eventsHandler)
  .route('/', prepaidHandler)
  .route('/', scriptsHandler)
  .route('/', subscriptionsHandler)
  .route('/', teamsHandler)
  .route('/', dutiesHandler)
  .route('/', teamsMembershipsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
