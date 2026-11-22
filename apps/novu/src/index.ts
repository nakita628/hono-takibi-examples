import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityHandler,
  agentsHandler,
  channelConnectionsHandler,
  channelEndpointsHandler,
  contextsHandler,
  domainsHandler,
  environmentsHandler,
  environmentVariablesHandler,
  eventsHandler,
  integrationsHandler,
  layoutsHandler,
  messagesHandler,
  notificationsHandler,
  subscribersHandler,
  topicsHandler,
  translationsHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', environmentsHandler)
  .route('/', eventsHandler)
  .route('/', notificationsHandler)
  .route('/', agentsHandler)
  .route('/', domainsHandler)
  .route('/', integrationsHandler)
  .route('/', contextsHandler)
  .route('/', subscribersHandler)
  .route('/', layoutsHandler)
  .route('/', messagesHandler)
  .route('/', topicsHandler)
  .route('/', environmentVariablesHandler)
  .route('/', workflowsHandler)
  .route('/', channelConnectionsHandler)
  .route('/', channelEndpointsHandler)
  .route('/', translationsHandler)
  .route('/', activityHandler)

export default app
