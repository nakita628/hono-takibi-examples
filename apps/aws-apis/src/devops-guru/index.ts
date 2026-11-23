import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  anomaliesHandler,
  channelsHandler,
  costEstimationHandler,
  eventsHandler,
  eventSourcesHandler,
  feedbackHandler,
  insightsHandler,
  listLogAnomaliesHandler,
  monitoredResourcesHandler,
  organizationHandler,
  recommendationsHandler,
  resourceCollectionsHandler,
  serviceIntegrationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', insightsHandler)
  .route('/', accountsHandler)
  .route('/', anomaliesHandler)
  .route('/', eventSourcesHandler)
  .route('/', feedbackHandler)
  .route('/', organizationHandler)
  .route('/', serviceIntegrationsHandler)
  .route('/', costEstimationHandler)
  .route('/', resourceCollectionsHandler)
  .route('/', listLogAnomaliesHandler)
  .route('/', eventsHandler)
  .route('/', monitoredResourcesHandler)
  .route('/', recommendationsHandler)

export default app
