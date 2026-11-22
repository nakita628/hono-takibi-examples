import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentConfigsHandler,
  agentInsightsEnrollmentHandler,
  agentInsightsHandler,
  agentInsightsJobsHandler,
  alertsHandler,
  annotationQueuesHandler,
  assertionResultsHandler,
  attachmentsHandler,
  automationRuleEvaluatorsHandler,
  chatCompletionsHandler,
  checkHandler,
  dashboardSavedQueriesHandler,
  dashboardsHandler,
  datasetsHandler,
  environmentsHandler,
  experimentsHandler,
  feedbackDefinitionsHandler,
  guardrailPoliciesHandler,
  guardrailsHandler,
  insightsViewsHandler,
  isAliveHandler,
  llmModelsHandler,
  llmProviderKeyHandler,
  manualEvaluationHandler,
  mcpoAuthHandler,
  ollamaHandler,
  ollieStateHandler,
  openTelemetryIngestionHandler,
  optimizationsHandler,
  pairingHandler,
  projectsHandler,
  promptsHandler,
  redirectHandler,
  reportFailuresHandler,
  reportsHandler,
  retentionRulesHandler,
  runnersHandler,
  serviceTogglesHandler,
  spansHandler,
  systemAnalyticsQueriesHandler,
  systemUsageHandler,
  tracesHandler,
  welcomeWizardHandler,
  workspacePermissionsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mcpoAuthHandler)
  .route('/', agentInsightsEnrollmentHandler)
  .route('/', systemAnalyticsQueriesHandler)
  .route('/', dashboardSavedQueriesHandler)
  .route('/', systemUsageHandler)
  .route('/', agentConfigsHandler)
  .route('/', agentInsightsJobsHandler)
  .route('/', agentInsightsHandler)
  .route('/', alertsHandler)
  .route('/', annotationQueuesHandler)
  .route('/', assertionResultsHandler)
  .route('/', attachmentsHandler)
  .route('/', checkHandler)
  .route('/', automationRuleEvaluatorsHandler)
  .route('/', chatCompletionsHandler)
  .route('/', dashboardsHandler)
  .route('/', datasetsHandler)
  .route('/', environmentsHandler)
  .route('/', experimentsHandler)
  .route('/', feedbackDefinitionsHandler)
  .route('/', guardrailPoliciesHandler)
  .route('/', guardrailsHandler)
  .route('/', insightsViewsHandler)
  .route('/', llmModelsHandler)
  .route('/', llmProviderKeyHandler)
  .route('/', runnersHandler)
  .route('/', manualEvaluationHandler)
  .route('/', ollamaHandler)
  .route('/', ollieStateHandler)
  .route('/', openTelemetryIngestionHandler)
  .route('/', optimizationsHandler)
  .route('/', pairingHandler)
  .route('/', projectsHandler)
  .route('/', promptsHandler)
  .route('/', reportFailuresHandler)
  .route('/', reportsHandler)
  .route('/', retentionRulesHandler)
  .route('/', serviceTogglesHandler)
  .route('/', spansHandler)
  .route('/', tracesHandler)
  .route('/', welcomeWizardHandler)
  .route('/', workspacePermissionsHandler)
  .route('/', workspacesHandler)
  .route('/', redirectHandler)
  .route('/', isAliveHandler)

export default app
