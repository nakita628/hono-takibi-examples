import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attemptsHandler,
  bookmarksHandler,
  bulkHandler,
  connectionsHandler,
  destinationsHandler,
  eventsHandler,
  integrationsHandler,
  issuesHandler,
  issueTriggersHandler,
  notificationsHandler,
  requestsHandler,
  sourcesHandler,
  teamsHandler,
  transformationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', issueTriggersHandler)
  .route('/', attemptsHandler)
  .route('/', bookmarksHandler)
  .route('/', destinationsHandler)
  .route('/', bulkHandler)
  .route('/', eventsHandler)
  .route('/', integrationsHandler)
  .route('/', issuesHandler)
  .route('/', requestsHandler)
  .route('/', sourcesHandler)
  .route('/', notificationsHandler)
  .route('/', teamsHandler)
  .route('/', transformationsHandler)
  .route('/', connectionsHandler)

export default app
