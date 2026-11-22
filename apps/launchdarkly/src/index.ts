import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokensHandler,
  accountMembersHandler,
  accountUsageBetaHandler,
  adaptiveTriggersHandler,
  agentControlHandler,
  announcementsHandler,
  applicationsBetaHandler,
  approvalsBetaHandler,
  approvalsHandler,
  auditLogHandler,
  codeReferencesHandler,
  contextSettingsHandler,
  contextsHandler,
  customRolesHandler,
  dataExportDestinationsHandler,
  environmentReleasePlansBetaHandler,
  environmentReleasesBetaHandler,
  environmentsHandler,
  experimentsHandler,
  featureFlagsBetaHandler,
  featureFlagsHandler,
  flagImportConfigurationsBetaHandler,
  flagLinksBetaHandler,
  flagReleasePlansBetaHandler,
  flagTriggersHandler,
  followFlagsHandler,
  holdoutsHandler,
  insightsChartsBetaHandler,
  insightsDeploymentsBetaHandler,
  insightsFlagEventsBetaHandler,
  insightsPullRequestsBetaHandler,
  insightsRepositoriesBetaHandler,
  insightsScoresBetaHandler,
  integrationAuditLogSubscriptionsHandler,
  integrationDeliveryConfigurationsBetaHandler,
  integrationsBetaHandler,
  ipAllowlistBetaHandler,
  layersHandler,
  metricsBetaHandler,
  metricsHandler,
  oAuth2ClientsHandler,
  otherHandler,
  persistentStoreIntegrationsBetaHandler,
  projectsHandler,
  relayProxyConfigurationsHandler,
  releasePipelinesDeprecatedHandler,
  scheduledChangesHandler,
  sdkKeysBetaHandler,
  segmentsHandler,
  tagsHandler,
  teamsBetaHandler,
  teamsHandler,
  userSettingsHandler,
  usersHandler,
  viewsHandler,
  webhooksHandler,
  workflowsHandler,
  workflowTemplatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', otherHandler)
  .route('/', relayProxyConfigurationsHandler)
  .route('/', applicationsBetaHandler)
  .route('/', approvalsHandler)
  .route('/', approvalsBetaHandler)
  .route('/', auditLogHandler)
  .route('/', codeReferencesHandler)
  .route('/', dataExportDestinationsHandler)
  .route('/', flagLinksBetaHandler)
  .route('/', featureFlagsHandler)
  .route('/', featureFlagsBetaHandler)
  .route('/', flagTriggersHandler)
  .route('/', releasePipelinesDeprecatedHandler)
  .route('/', persistentStoreIntegrationsBetaHandler)
  .route('/', integrationDeliveryConfigurationsBetaHandler)
  .route('/', flagImportConfigurationsBetaHandler)
  .route('/', integrationsBetaHandler)
  .route('/', integrationAuditLogSubscriptionsHandler)
  .route('/', accountMembersHandler)
  .route('/', metricsHandler)
  .route('/', oAuth2ClientsHandler)
  .route('/', projectsHandler)
  .route('/', contextsHandler)
  .route('/', environmentsHandler)
  .route('/', contextSettingsHandler)
  .route('/', experimentsHandler)
  .route('/', followFlagsHandler)
  .route('/', holdoutsHandler)
  .route('/', segmentsHandler)
  .route('/', scheduledChangesHandler)
  .route('/', workflowsHandler)
  .route('/', layersHandler)
  .route('/', metricsBetaHandler)
  .route('/', customRolesHandler)
  .route('/', teamsHandler)
  .route('/', teamsBetaHandler)
  .route('/', workflowTemplatesHandler)
  .route('/', accessTokensHandler)
  .route('/', accountUsageBetaHandler)
  .route('/', usersHandler)
  .route('/', userSettingsHandler)
  .route('/', webhooksHandler)
  .route('/', tagsHandler)
  .route('/', agentControlHandler)
  .route('/', announcementsHandler)
  .route('/', viewsHandler)
  .route('/', environmentReleasesBetaHandler)
  .route('/', environmentReleasePlansBetaHandler)
  .route('/', flagReleasePlansBetaHandler)
  .route('/', ipAllowlistBetaHandler)
  .route('/', sdkKeysBetaHandler)
  .route('/', adaptiveTriggersHandler)
  .route('/', insightsChartsBetaHandler)
  .route('/', insightsDeploymentsBetaHandler)
  .route('/', insightsFlagEventsBetaHandler)
  .route('/', insightsScoresBetaHandler)
  .route('/', insightsPullRequestsBetaHandler)
  .route('/', insightsRepositoriesBetaHandler)

export default app
