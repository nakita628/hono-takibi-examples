import { OpenAPIHono } from '@hono/zod-openapi'
import {
  annotationQueuesHandler,
  blobStorageIntegrationsHandler,
  commentsHandler,
  datasetItemsHandler,
  datasetsHandler,
  evaluationRulesHandler,
  evaluatorsHandler,
  experimentsHandler,
  feedbackHandler,
  healthHandler,
  llmConnectionsHandler,
  mediaHandler,
  metricsHandler,
  modelsHandler,
  observationsHandler,
  opentelemetryHandler,
  organizationsHandler,
  projectsHandler,
  promptsHandler,
  promptVersionHandler,
  scimHandler,
  scoreConfigsHandler,
  scoresHandler,
  skillsHandler,
  traceHandler,
  unstableBillableUnitsHandler,
  unstableDashboardsHandler,
  unstableDashboardWidgetsHandler,
  unstableTopicsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', annotationQueuesHandler)
  .route('/', blobStorageIntegrationsHandler)
  .route('/', commentsHandler)
  .route('/', datasetItemsHandler)
  .route('/', datasetsHandler)
  .route('/', evaluationRulesHandler)
  .route('/', evaluatorsHandler)
  .route('/', experimentsHandler)
  .route('/', feedbackHandler)
  .route('/', healthHandler)
  .route('/', llmConnectionsHandler)
  .route('/', mediaHandler)
  .route('/', metricsHandler)
  .route('/', modelsHandler)
  .route('/', observationsHandler)
  .route('/', opentelemetryHandler)
  .route('/', organizationsHandler)
  .route('/', projectsHandler)
  .route('/', promptVersionHandler)
  .route('/', promptsHandler)
  .route('/', scimHandler)
  .route('/', scoreConfigsHandler)
  .route('/', scoresHandler)
  .route('/', skillsHandler)
  .route('/', traceHandler)
  .route('/', unstableBillableUnitsHandler)
  .route('/', unstableDashboardWidgetsHandler)
  .route('/', unstableDashboardsHandler)
  .route('/', unstableTopicsHandler)

export default app
