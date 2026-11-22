import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  apiKeysHandler,
  archiveHandler,
  assetsHandler,
  eventsHandler,
  findingsHandler,
  frameworksHandler,
  integrationsHandler,
  jiraCloudIntegrationHandler,
  jiraServerIntegrationHandler,
  labelsHandler,
  loginHandler,
  passwordResetHandler,
  planHandler,
  scansHandler,
  scheduledHandler,
  siteHandler,
  slackIntegrationHandler,
  statisticsHandler,
  targetsHandler,
  usersHandler,
  vulnerabilitiesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', loginHandler)
  .route('/', passwordResetHandler)
  .route('/', eventsHandler)
  .route('/', frameworksHandler)
  .route('/', integrationsHandler)
  .route('/', jiraCloudIntegrationHandler)
  .route('/', jiraServerIntegrationHandler)
  .route('/', apiKeysHandler)
  .route('/', labelsHandler)
  .route('/', planHandler)
  .route('/', usersHandler)
  .route('/', targetsHandler)
  .route('/', archiveHandler)
  .route('/', statisticsHandler)
  .route('/', scansHandler)
  .route('/', scheduledHandler)
  .route('/', assetsHandler)
  .route('/', findingsHandler)
  .route('/', slackIntegrationHandler)
  .route('/', siteHandler)
  .route('/', vulnerabilitiesHandler)

export default app
