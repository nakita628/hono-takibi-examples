import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTrackingHandler,
  activityFeedHandler,
  aiModelAPIKeysHandler,
  aiModelRateLimitsHandler,
  alertConfigurationsHandler,
  alertsHandler,
  atlasSearchHandler,
  auditingHandler,
  awsClustersDNSHandler,
  cloudBackupsHandler,
  cloudMigrationServiceHandler,
  cloudProviderAccessHandler,
  clusterOutageSimulationHandler,
  clustersHandler,
  collectionLevelMetricsHandler,
  customDatabaseRolesHandler,
  databaseUsersHandler,
  dataFederationHandler,
  encryptionAtRestUsingCustomerKeyManagementHandler,
  ephemeralClustersHandler,
  eventsHandler,
  federatedAuthenticationHandler,
  flexClustersHandler,
  flexRestoreJobsHandler,
  flexSnapshotsHandler,
  globalClustersHandler,
  invoicesHandler,
  ldapConfigurationHandler,
  legacyBackupHandler,
  limitDescriptionHandler,
  maintenanceWindowsHandler,
  metricIntegrationsHandler,
  mongoDBCloudUsersHandler,
  monitoringAndLogsHandler,
  networkPeeringHandler,
  onlineArchiveHandler,
  organizationsHandler,
  overloadProtectionSimulationHandler,
  performanceAdvisorHandler,
  privateEndpointServicesHandler,
  programmaticAPIKeysHandler,
  projectIPAccessListHandler,
  projectsHandler,
  pushBasedLogExportHandler,
  querySamplingHandler,
  queryShapeInsightsHandler,
  rateLimitingHandler,
  remoteMCPConfigurationsHandler,
  resourcePoliciesHandler,
  rollingIndexHandler,
  rootHandler,
  sandboxHandler,
  serverlessInstancesHandler,
  serverlessPrivateEndpointsHandler,
  serviceAccountsHandler,
  shardingInsightsHandler,
  shardingRecommendationsHandler,
  shardKeyAnalyzerHandler,
  standbyLinksHandler,
  streamsHandler,
  teamsHandler,
  thirdPartyIntegrationsHandler,
  x509AuthenticationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', rootHandler)
  .route('/', alertConfigurationsHandler)
  .route('/', clustersHandler)
  .route('/', limitDescriptionHandler)
  .route('/', eventsHandler)
  .route('/', federatedAuthenticationHandler)
  .route('/', projectsHandler)
  .route('/', projectIPAccessListHandler)
  .route('/', activityFeedHandler)
  .route('/', aiModelRateLimitsHandler)
  .route('/', aiModelAPIKeysHandler)
  .route('/', alertsHandler)
  .route('/', programmaticAPIKeysHandler)
  .route('/', auditingHandler)
  .route('/', awsClustersDNSHandler)
  .route('/', cloudBackupsHandler)
  .route('/', cloudProviderAccessHandler)
  .route('/', collectionLevelMetricsHandler)
  .route('/', legacyBackupHandler)
  .route('/', atlasSearchHandler)
  .route('/', globalClustersHandler)
  .route('/', rollingIndexHandler)
  .route('/', onlineArchiveHandler)
  .route('/', clusterOutageSimulationHandler)
  .route('/', overloadProtectionSimulationHandler)
  .route('/', performanceAdvisorHandler)
  .route('/', querySamplingHandler)
  .route('/', queryShapeInsightsHandler)
  .route('/', shardKeyAnalyzerHandler)
  .route('/', shardingInsightsHandler)
  .route('/', shardingRecommendationsHandler)
  .route('/', monitoringAndLogsHandler)
  .route('/', networkPeeringHandler)
  .route('/', customDatabaseRolesHandler)
  .route('/', dataFederationHandler)
  .route('/', databaseUsersHandler)
  .route('/', x509AuthenticationHandler)
  .route('/', accessTrackingHandler)
  .route('/', encryptionAtRestUsingCustomerKeyManagementHandler)
  .route('/', flexClustersHandler)
  .route('/', flexSnapshotsHandler)
  .route('/', flexRestoreJobsHandler)
  .route('/', thirdPartyIntegrationsHandler)
  .route('/', cloudMigrationServiceHandler)
  .route('/', pushBasedLogExportHandler)
  .route('/', maintenanceWindowsHandler)
  .route('/', remoteMCPConfigurationsHandler)
  .route('/', metricIntegrationsHandler)
  .route('/', privateEndpointServicesHandler)
  .route('/', serverlessPrivateEndpointsHandler)
  .route('/', sandboxHandler)
  .route('/', serverlessInstancesHandler)
  .route('/', serviceAccountsHandler)
  .route('/', standbyLinksHandler)
  .route('/', streamsHandler)
  .route('/', teamsHandler)
  .route('/', ldapConfigurationHandler)
  .route('/', mongoDBCloudUsersHandler)
  .route('/', organizationsHandler)
  .route('/', invoicesHandler)
  .route('/', resourcePoliciesHandler)
  .route('/', rateLimitingHandler)
  .route('/', ephemeralClustersHandler)

export default app
