import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionConnectionHandler,
  actionsDatastoresHandler,
  agentHealthHandler,
  agentlessScanningHandler,
  agentObservabilityHandler,
  aiGatewayHandler,
  aiGuardHandler,
  annotationsHandler,
  anthropicUsageAndCostsIntegrationHandler,
  apiManagementHandler,
  apmHandler,
  apmRetentionFiltersHandler,
  apmTraceHandler,
  appBuilderHandler,
  applicationSecurityHandler,
  auditHandler,
  authNMappingsHandler,
  awsIntegrationHandler,
  awsLogsIntegrationHandler,
  bitsAIHandler,
  bitsSecurityAnalystHandler,
  caseManagementAttributeHandler,
  caseManagementHandler,
  caseManagementTypeHandler,
  changeManagementHandler,
  chatGPTEnterpriseIntegrationHandler,
  ciVisibilityGitHubAccountsHandler,
  ciVisibilityLogsHandler,
  ciVisibilityPipelinesHandler,
  ciVisibilityTestsHandler,
  claudeComplianceIntegrationHandler,
  cloudAuthenticationHandler,
  cloudCostManagementHandler,
  cloudflareIntegrationHandler,
  cloudNetworkMonitoringHandler,
  codeCoverageHandler,
  complianceHandler,
  confluentCloudHandler,
  containerImagesHandler,
  containersHandler,
  coreWeaveIntegrationHandler,
  csmAgentsHandler,
  csmCoverageAnalysisHandler,
  csmOwnershipHandler,
  csmSettingsHandler,
  csmThreatsHandler,
  customerOrgHandler,
  dashboardListsHandler,
  dashboardSecureEmbedHandler,
  dashboardsHandler,
  dashboardSharingHandler,
  databricksIntegrationHandler,
  dataDeletionHandler,
  dataObservabilityHandler,
  datasetsHandler,
  ddsqlHandler,
  deliveryPerformanceHandler,
  demHandler,
  deploymentGatesHandler,
  domainAllowlistHandler,
  downtimesHandler,
  elasticCloudIntegrationHandler,
  endUserDeviceMonitoringHandler,
  entityIntegrationConfigsHandler,
  entityRiskScoresHandler,
  errorTrackingHandler,
  eventsHandler,
  executionPolicyHandler,
  experimentsHandler,
  fastlyIntegrationHandler,
  featureFlagsHandler,
  fleetAutomationHandler,
  formsHandler,
  gcpIntegrationHandler,
  googleChatIntegrationHandler,
  governanceConsoleHandler,
  highAvailabilityMultiRegionHandler,
  identityProvidersHandler,
  incidentsHandler,
  integrationsHandler,
  ipAllowlistHandler,
  jiraIntegrationHandler,
  keyManagementHandler,
  logsArchiveSearchesHandler,
  logsArchivesHandler,
  logsCustomDestinationsHandler,
  logsHandler,
  logsMetricsHandler,
  logsRestrictionQueriesHandler,
  metricsHandler,
  microsoftTeamsIntegrationHandler,
  modelLabAPIHandler,
  monitorsHandler,
  nebiusCloudIntegrationHandler,
  networkDeviceMonitoringHandler,
  oAuth2ClientPublicHandler,
  observabilityPipelinesHandler,
  ociIntegrationHandler,
  oktaIntegrationHandler,
  onCallHandler,
  onCallPagingHandler,
  openAICodexIntegrationHandler,
  opsgenieIntegrationHandler,
  organizationsHandler,
  orgAuthorizedClientsHandler,
  orgConnectionsHandler,
  orgGroupsHandler,
  powerpackHandler,
  processesHandler,
  productAnalyticsHandler,
  productCatalogHandler,
  referenceTablesHandler,
  reportingAndSharingHandler,
  reportSchedulesHandler,
  restrictionPoliciesHandler,
  rolesHandler,
  rumAudienceManagementHandler,
  rumConfigHandler,
  rumHandler,
  rumInsightsHandler,
  rumManagedArchivesHandler,
  rumMetricsHandler,
  rumOperationsHandler,
  rumRecoveryHandler,
  rumRemoteConfigHandler,
  rumReplayHeatmapsHandler,
  rumReplayPlaylistsHandler,
  rumReplaySessionsHandler,
  rumReplayViewershipHandler,
  rumRetentionFiltersHandler,
  rumRetentionQuotasHandler,
  rumTeamsOwnershipHandler,
  scorecardsHandler,
  seatsHandler,
  securityMonitoringHandler,
  sensitiveDataScannerHandler,
  serviceAccountsHandler,
  serviceDefinitionHandler,
  serviceLevelObjectivesHandler,
  serviceNowIntegrationHandler,
  slackIntegrationHandler,
  snowflakeIntegrationHandler,
  softwareCatalogHandler,
  spansHandler,
  spansMetricsHandler,
  staticAnalysisHandler,
  statuspageIntegrationHandler,
  statusPagesHandler,
  stegadographyHandler,
  storageManagementHandler,
  syntheticsHandler,
  tagRulesHandler,
  teamsHandler,
  temporalCloudOpenMetricsIntegrationHandler,
  testOptimizationHandler,
  threatIntelligenceHandler,
  timeseriesAnomalyInvestigationsHandler,
  twilioIntegrationHandler,
  usageMeteringHandler,
  userAuthorizedClientsHandler,
  usersHandler,
  webhooksIntegrationHandler,
  webIntegrationsHandler,
  widgetsHandler,
  workflowAutomationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fleetAutomationHandler)
  .route('/', agentObservabilityHandler)
  .route('/', actionsDatastoresHandler)
  .route('/', actionConnectionHandler)
  .route('/', executionPolicyHandler)
  .route('/', agentHealthHandler)
  .route('/', agentlessScanningHandler)
  .route('/', aiGuardHandler)
  .route('/', deliveryPerformanceHandler)
  .route('/', annotationsHandler)
  .route('/', usersHandler)
  .route('/', keyManagementHandler)
  .route('/', apiManagementHandler)
  .route('/', spansMetricsHandler)
  .route('/', apmRetentionFiltersHandler)
  .route('/', apmHandler)
  .route('/', appBuilderHandler)
  .route('/', auditHandler)
  .route('/', authNMappingsHandler)
  .route('/', bitsAIHandler)
  .route('/', aiGatewayHandler)
  .route('/', caseManagementHandler)
  .route('/', caseManagementTypeHandler)
  .route('/', caseManagementAttributeHandler)
  .route('/', softwareCatalogHandler)
  .route('/', changeManagementHandler)
  .route('/', ciVisibilityGitHubAccountsHandler)
  .route('/', ciVisibilityPipelinesHandler)
  .route('/', testOptimizationHandler)
  .route('/', ciVisibilityTestsHandler)
  .route('/', ciVisibilityLogsHandler)
  .route('/', securityMonitoringHandler)
  .route('/', storageManagementHandler)
  .route('/', codeCoverageHandler)
  .route('/', complianceHandler)
  .route('/', containerImagesHandler)
  .route('/', containersHandler)
  .route('/', cloudCostManagementHandler)
  .route('/', usageMeteringHandler)
  .route('/', csmAgentsHandler)
  .route('/', csmCoverageAnalysisHandler)
  .route('/', csmOwnershipHandler)
  .route('/', csmSettingsHandler)
  .route('/', dashboardListsHandler)
  .route('/', dashboardSharingHandler)
  .route('/', dashboardSecureEmbedHandler)
  .route('/', dashboardsHandler)
  .route('/', dataObservabilityHandler)
  .route('/', datasetsHandler)
  .route('/', ddsqlHandler)
  .route('/', dataDeletionHandler)
  .route('/', demHandler)
  .route('/', deploymentGatesHandler)
  .route('/', domainAllowlistHandler)
  .route('/', downtimesHandler)
  .route('/', errorTrackingHandler)
  .route('/', endUserDeviceMonitoringHandler)
  .route('/', eventsHandler)
  .route('/', experimentsHandler)
  .route('/', featureFlagsHandler)
  .route('/', formsHandler)
  .route('/', organizationsHandler)
  .route('/', governanceConsoleHandler)
  .route('/', tagRulesHandler)
  .route('/', highAvailabilityMultiRegionHandler)
  .route('/', identityProvidersHandler)
  .route('/', entityIntegrationConfigsHandler)
  .route('/', incidentsHandler)
  .route('/', anthropicUsageAndCostsIntegrationHandler)
  .route('/', chatGPTEnterpriseIntegrationHandler)
  .route('/', claudeComplianceIntegrationHandler)
  .route('/', coreWeaveIntegrationHandler)
  .route('/', databricksIntegrationHandler)
  .route('/', elasticCloudIntegrationHandler)
  .route('/', nebiusCloudIntegrationHandler)
  .route('/', openAICodexIntegrationHandler)
  .route('/', snowflakeIntegrationHandler)
  .route('/', temporalCloudOpenMetricsIntegrationHandler)
  .route('/', twilioIntegrationHandler)
  .route('/', awsIntegrationHandler)
  .route('/', awsLogsIntegrationHandler)
  .route('/', gcpIntegrationHandler)
  .route('/', googleChatIntegrationHandler)
  .route('/', jiraIntegrationHandler)
  .route('/', microsoftTeamsIntegrationHandler)
  .route('/', ociIntegrationHandler)
  .route('/', opsgenieIntegrationHandler)
  .route('/', serviceNowIntegrationHandler)
  .route('/', slackIntegrationHandler)
  .route('/', statuspageIntegrationHandler)
  .route('/', webhooksIntegrationHandler)
  .route('/', integrationsHandler)
  .route('/', cloudflareIntegrationHandler)
  .route('/', confluentCloudHandler)
  .route('/', fastlyIntegrationHandler)
  .route('/', oktaIntegrationHandler)
  .route('/', ipAllowlistHandler)
  .route('/', logsHandler)
  .route('/', logsArchiveSearchesHandler)
  .route('/', logsArchivesHandler)
  .route('/', logsCustomDestinationsHandler)
  .route('/', logsMetricsHandler)
  .route('/', logsRestrictionQueriesHandler)
  .route('/', metricsHandler)
  .route('/', modelLabAPIHandler)
  .route('/', monitorsHandler)
  .route('/', networkDeviceMonitoringHandler)
  .route('/', cloudNetworkMonitoringHandler)
  .route('/', oAuth2ClientPublicHandler)
  .route('/', observabilityPipelinesHandler)
  .route('/', onCallHandler)
  .route('/', onCallPagingHandler)
  .route('/', customerOrgHandler)
  .route('/', orgAuthorizedClientsHandler)
  .route('/', orgConnectionsHandler)
  .route('/', orgGroupsHandler)
  .route('/', rolesHandler)
  .route('/', powerpackHandler)
  .route('/', processesHandler)
  .route('/', productAnalyticsHandler)
  .route('/', rumAudienceManagementHandler)
  .route('/', productCatalogHandler)
  .route('/', apmTraceHandler)
  .route('/', referenceTablesHandler)
  .route('/', applicationSecurityHandler)
  .route('/', csmThreatsHandler)
  .route('/', rumRemoteConfigHandler)
  .route('/', rumReplayHeatmapsHandler)
  .route('/', reportSchedulesHandler)
  .route('/', restrictionPoliciesHandler)
  .route('/', rumHandler)
  .route('/', rumRetentionFiltersHandler)
  .route('/', rumConfigHandler)
  .route('/', rumManagedArchivesHandler)
  .route('/', rumMetricsHandler)
  .route('/', rumRetentionQuotasHandler)
  .route('/', rumTeamsOwnershipHandler)
  .route('/', rumOperationsHandler)
  .route('/', rumInsightsHandler)
  .route('/', rumRecoveryHandler)
  .route('/', rumReplayPlaylistsHandler)
  .route('/', rumReplaySessionsHandler)
  .route('/', rumReplayViewershipHandler)
  .route('/', scorecardsHandler)
  .route('/', seatsHandler)
  .route('/', entityRiskScoresHandler)
  .route('/', threatIntelligenceHandler)
  .route('/', bitsSecurityAnalystHandler)
  .route('/', sensitiveDataScannerHandler)
  .route('/', serviceAccountsHandler)
  .route('/', serviceDefinitionHandler)
  .route('/', serviceLevelObjectivesHandler)
  .route('/', reportingAndSharingHandler)
  .route('/', spansHandler)
  .route('/', staticAnalysisHandler)
  .route('/', statusPagesHandler)
  .route('/', stegadographyHandler)
  .route('/', syntheticsHandler)
  .route('/', teamsHandler)
  .route('/', timeseriesAnomalyInvestigationsHandler)
  .route('/', userAuthorizedClientsHandler)
  .route('/', webIntegrationsHandler)
  .route('/', widgetsHandler)
  .route('/', cloudAuthenticationHandler)
  .route('/', workflowAutomationHandler)

export default app
