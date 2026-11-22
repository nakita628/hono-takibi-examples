import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attemptsHandler,
  bookmarksHandler,
  bulkRetryEventsHandler,
  bulkRetryIgnoredEventsHandler,
  bulkRetryRequestsHandler,
  connectionsHandler,
  destinationsHandler,
  eventsHandler,
  integrationsHandler,
  issuesHandler,
  issueTriggersHandler,
  notificationsHandler,
  requestsHandler,
  sourcesHandler,
  transformationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', issueTriggersHandler)
  .route('/', attemptsHandler)
  .route('/', bookmarksHandler)
  .route('/', destinationsHandler)
  .route('/', bulkRetryEventsHandler)
  .route('/', eventsHandler)
  .route('/', bulkRetryIgnoredEventsHandler)
  .route('/', integrationsHandler)
  .route('/', issuesHandler)
  .route('/', requestsHandler)
  .route('/', bulkRetryRequestsHandler)
  .route('/', sourcesHandler)
  .route('/', notificationsHandler)
  .route('/', transformationsHandler)
  .route('/', connectionsHandler)

export default app
