import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessRequestsHandler,
  accessTokensHandler,
  activeContextHandler,
  advancedSearchRolloutHandler,
  agentsHandler,
  alertManagementHandler,
  analyticsHandler,
  applicationsHandler,
  approvalRulesHandler,
  attestationsHandler,
  auditEventsHandler,
  authnHandler,
  avatarsHandler,
  awardEmojiHandler,
  badgesHandler,
  batchedBackgroundMigrationsHandler,
  batchedBackgroundOperationsHandler,
  boardsHandler,
  branchesHandler,
  broadcastMessagesHandler,
  ciCatalogHandler,
  ciJobsHandler,
  ciLintHandler,
  ciResourceGroupsHandler,
  ciRunnersHandler,
  ciTriggersHandler,
  ciVariablesHandler,
  clusterAgentsHandler,
  clustersHandler,
  codeReviewAnalyticsHandler,
  codeSearchHandler,
  codeSuggestionsHandler,
  commitsHandler,
  commitStatusesHandler,
  compliancePolicySettingsHandler,
  containerRegistryHandler,
  customAttributesHandler,
  databaseDictionaryHandler,
  dataManagementHandler,
  dependencyManagementHandler,
  dependencyProxyHandler,
  deployResourcesHandler,
  discussionsHandler,
  doraMetricsHandler,
  draftNotesHandler,
  enterpriseUsersHandler,
  environmentsHandler,
  epicsHandler,
  errorTrackingHandler,
  eventsHandler,
  experimentsHandler,
  externalStatusChecksHandler,
  featureFlagsHandler,
  featuresHandler,
  filesHandler,
  freezePeriodsHandler,
  geoHandler,
  gitLabDuoHandler,
  gitLabDuoWorkflowsHandler,
  gitLabPagesHandler,
  glqlHandler,
  groupApplicationsHandler,
  groupCredentialsInventoryHandler,
  groupImportAndExportHandler,
  groupsHandler,
  hooksHandler,
  importsHandler,
  instanceHandler,
  integrationsHandler,
  invitationsHandler,
  issuesHandler,
  iterationsHandler,
  jiraConnectSubscriptionsHandler,
  jiraForgeInstallationHandler,
  jiraForgeSubscriptionsHandler,
  jiraForgeUserDelegationHandler,
  jobArtifactsHandler,
  jobsHandler,
  keysHandler,
  knowledgeGraphHandler,
  labelsHandler,
  ldapHandler,
  licensesHandler,
  markdownHandler,
  mcpHandler,
  memberRolesHandler,
  membersHandler,
  mergeRequestApprovalsHandler,
  mergeRequestsHandler,
  mergeTrainsHandler,
  metadataHandler,
  metricImagesHandler,
  metricsHandler,
  migrationsHandler,
  milestonesHandler,
  mlModelRegistryHandler,
  mlOpsHandler,
  mobilePushSubscriptionsHandler,
  namespacesHandler,
  notesHandler,
  notificationSettingsHandler,
  offlineTransfersHandler,
  orbitHandler,
  organizationsHandler,
  packagesCargoHandler,
  packagesComposerHandler,
  packagesConanHandler,
  packagesDebianHandler,
  packagesHandler,
  packagesHelmHandler,
  packagesNPMHandler,
  packagesNuGetHandler,
  packagesPyPiHandler,
  packagesRPMHandler,
  packagesRubyGemHandler,
  pipelineSchedulesHandler,
  pipelinesHandler,
  planLimitsHandler,
  projectAliasHandler,
  projectApprovalsHandler,
  projectGoogleCloudIntegrationHandler,
  projectImportHandler,
  projectMirrorsHandler,
  projectsHandler,
  projectsJobTokenScopeHandler,
  projectSnapshotsHandler,
  projectTemplatesHandler,
  projectTopicsHandler,
  protectedBranchesHandler,
  protectedEnvironmentsHandler,
  protectedTagsHandler,
  providerIdentitiesHandler,
  pushRulesHandler,
  releasesHandler,
  remoteMirrorsHandler,
  repositoriesHandler,
  resourceEventsHandler,
  resourceSubscriptionsHandler,
  rolloutsHandler,
  runnerControllersHandler,
  runnerControllerTokensHandler,
  runnersHandler,
  samlGroupLinksHandler,
  searchHandler,
  secureFilesHandler,
  securityScansHandler,
  serviceAccountsHandler,
  sidekiqHandler,
  snippetsHandler,
  softwareCompositionAnalysisHandler,
  storageMovesHandler,
  submodulesHandler,
  suggestionsHandler,
  tagsHandler,
  templatesHandler,
  terraformHandler,
  toDosHandler,
  tokenExchangeHandler,
  unleashHandler,
  usageDataHandler,
  usersHandler,
  vsCodeHandler,
  vulnerabilitiesHandler,
  webCommitsHandler,
  wikisHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', rolloutsHandler)
  .route('/', orbitHandler)
  .route('/', softwareCompositionAnalysisHandler)
  .route('/', compliancePolicySettingsHandler)
  .route('/', securityScansHandler)
  .route('/', gitLabDuoHandler)
  .route('/', tokenExchangeHandler)
  .route('/', codeSuggestionsHandler)
  .route('/', searchHandler)
  .route('/', projectsHandler)
  .route('/', gitLabDuoWorkflowsHandler)
  .route('/', enterpriseUsersHandler)
  .route('/', dependencyManagementHandler)
  .route('/', protectedBranchesHandler)
  .route('/', storageMovesHandler)
  .route('/', iterationsHandler)
  .route('/', samlGroupLinksHandler)
  .route('/', resourceEventsHandler)
  .route('/', protectedEnvironmentsHandler)
  .route('/', analyticsHandler)
  .route('/', codeReviewAnalyticsHandler)
  .route('/', projectAliasHandler)
  .route('/', mergeRequestApprovalsHandler)
  .route('/', vulnerabilitiesHandler)
  .route('/', projectGoogleCloudIntegrationHandler)
  .route('/', projectApprovalsHandler)
  .route('/', licensesHandler)
  .route('/', groupCredentialsInventoryHandler)
  .route('/', mergeRequestsHandler)
  .route('/', hooksHandler)
  .route('/', providerIdentitiesHandler)
  .route('/', memberRolesHandler)
  .route('/', mergeTrainsHandler)
  .route('/', pushRulesHandler)
  .route('/', projectMirrorsHandler)
  .route('/', ldapHandler)
  .route('/', geoHandler)
  .route('/', experimentsHandler)
  .route('/', advancedSearchRolloutHandler)
  .route('/', epicsHandler)
  .route('/', dependencyProxyHandler)
  .route('/', doraMetricsHandler)
  .route('/', approvalRulesHandler)
  .route('/', externalStatusChecksHandler)
  .route('/', groupsHandler)
  .route('/', clusterAgentsHandler)
  .route('/', runnerControllerTokensHandler)
  .route('/', runnerControllersHandler)
  .route('/', auditEventsHandler)
  .route('/', dataManagementHandler)
  .route('/', knowledgeGraphHandler)
  .route('/', codeSearchHandler)
  .route('/', activeContextHandler)
  .route('/', boardsHandler)
  .route('/', mlOpsHandler)
  .route('/', vsCodeHandler)
  .route('/', customAttributesHandler)
  .route('/', usersHandler)
  .route('/', deployResourcesHandler)
  .route('/', keysHandler)
  .route('/', accessTokensHandler)
  .route('/', avatarsHandler)
  .route('/', applicationsHandler)
  .route('/', toDosHandler)
  .route('/', templatesHandler)
  .route('/', resourceSubscriptionsHandler)
  .route('/', sidekiqHandler)
  .route('/', instanceHandler)
  .route('/', serviceAccountsHandler)
  .route('/', milestonesHandler)
  .route('/', notificationSettingsHandler)
  .route('/', notesHandler)
  .route('/', mcpHandler)
  .route('/', labelsHandler)
  .route('/', discussionsHandler)
  .route('/', wikisHandler)
  .route('/', webCommitsHandler)
  .route('/', usageDataHandler)
  .route('/', metricsHandler)
  .route('/', unleashHandler)
  .route('/', projectTopicsHandler)
  .route('/', terraformHandler)
  .route('/', tagsHandler)
  .route('/', attestationsHandler)
  .route('/', suggestionsHandler)
  .route('/', submodulesHandler)
  .route('/', snippetsHandler)
  .route('/', packagesRubyGemHandler)
  .route('/', packagesRPMHandler)
  .route('/', repositoriesHandler)
  .route('/', remoteMirrorsHandler)
  .route('/', releasesHandler)
  .route('/', packagesPyPiHandler)
  .route('/', protectedTagsHandler)
  .route('/', projectTemplatesHandler)
  .route('/', projectSnapshotsHandler)
  .route('/', packagesHandler)
  .route('/', projectsJobTokenScopeHandler)
  .route('/', projectImportHandler)
  .route('/', eventsHandler)
  .route('/', packagesDebianHandler)
  .route('/', containerRegistryHandler)
  .route('/', clustersHandler)
  .route('/', gitLabPagesHandler)
  .route('/', organizationsHandler)
  .route('/', offlineTransfersHandler)
  .route('/', packagesNuGetHandler)
  .route('/', packagesNPMHandler)
  .route('/', namespacesHandler)
  .route('/', mobilePushSubscriptionsHandler)
  .route('/', mlModelRegistryHandler)
  .route('/', metadataHandler)
  .route('/', membersHandler)
  .route('/', markdownHandler)
  .route('/', ciLintHandler)
  .route('/', issuesHandler)
  .route('/', metricImagesHandler)
  .route('/', invitationsHandler)
  .route('/', jiraForgeSubscriptionsHandler)
  .route('/', jiraForgeUserDelegationHandler)
  .route('/', jiraForgeInstallationHandler)
  .route('/', jiraConnectSubscriptionsHandler)
  .route('/', integrationsHandler)
  .route('/', importsHandler)
  .route('/', packagesHelmHandler)
  .route('/', glqlHandler)
  .route('/', ciVariablesHandler)
  .route('/', groupImportAndExportHandler)
  .route('/', groupApplicationsHandler)
  .route('/', freezePeriodsHandler)
  .route('/', filesHandler)
  .route('/', featuresHandler)
  .route('/', featureFlagsHandler)
  .route('/', errorTrackingHandler)
  .route('/', environmentsHandler)
  .route('/', draftNotesHandler)
  .route('/', databaseDictionaryHandler)
  .route('/', packagesConanHandler)
  .route('/', packagesComposerHandler)
  .route('/', commitStatusesHandler)
  .route('/', commitsHandler)
  .route('/', packagesCargoHandler)
  .route('/', ciTriggersHandler)
  .route('/', pipelinesHandler)
  .route('/', pipelineSchedulesHandler)
  .route('/', secureFilesHandler)
  .route('/', runnersHandler)
  .route('/', ciRunnersHandler)
  .route('/', jobsHandler)
  .route('/', ciResourceGroupsHandler)
  .route('/', ciJobsHandler)
  .route('/', agentsHandler)
  .route('/', jobArtifactsHandler)
  .route('/', ciCatalogHandler)
  .route('/', branchesHandler)
  .route('/', badgesHandler)
  .route('/', awardEmojiHandler)
  .route('/', authnHandler)
  .route('/', alertManagementHandler)
  .route('/', planLimitsHandler)
  .route('/', migrationsHandler)
  .route('/', broadcastMessagesHandler)
  .route('/', batchedBackgroundOperationsHandler)
  .route('/', batchedBackgroundMigrationsHandler)
  .route('/', accessRequestsHandler)

export default app
