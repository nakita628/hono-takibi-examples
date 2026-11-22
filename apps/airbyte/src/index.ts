import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actorDefinitionHandler,
  actorDefinitionVersionHandler,
  airbyteReleasesHandler,
  applicationsHandler,
  attemptHandler,
  auditLogsHandler,
  billingHandler,
  billingNotificationSettingsHandler,
  catalogHandler,
  commandHandler,
  connectionHandler,
  connectorBuilderAssistHandler,
  connectorBuilderProjectHandler,
  connectorDocumentationHandler,
  connectorRolloutHandler,
  dataplaneGroupHandler,
  dataplaneHandler,
  dataplanesHandler,
  dataWorkerAllocationHandler,
  declarativeSourceDefinitionsHandler,
  deploymentMetadataHandler,
  destinationDefinitionHandler,
  destinationDefinitionSpecificationHandler,
  destinationExecutionHandler,
  destinationHandler,
  destinationOauthHandler,
  diagnosticToolHandler,
  domainVerificationsHandler,
  entitlementsHandler,
  fusionConnectionBackfillHandler,
  fusionConnectionEnablementHandler,
  fusionDestinationEnablementHandler,
  fusionEnablementResolverHandler,
  fusionSearchHandler,
  fusionSourceEnablementHandler,
  fusionUsageHandler,
  groupHandler,
  groupPermissionHandler,
  healthHandler,
  instanceConfigurationHandler,
  jobRetryStatesHandler,
  jobsHandler,
  notificationsHandler,
  openapiHandler,
  operationHandler,
  organizationHandler,
  organizationPaymentConfigHandler,
  organizationSemanticSearchHandler,
  permissionHandler,
  privateLinkHandler,
  publicApplicationsHandler,
  publicConnectionsHandler,
  publicConnectorDefinitionsHandler,
  publicDataplanesHandler,
  publicDeclarativeSourceDefinitionsHandler,
  publicDestinationDefinitionsHandler,
  publicDestinationsHandler,
  publicGroupMembersHandler,
  publicGroupPermissionsHandler,
  publicGroupsHandler,
  publicHandler,
  publicHealthHandler,
  publicJobsHandler,
  publicOauthHandler,
  publicOrganizationsHandler,
  publicPermissionsHandler,
  publicRegionsHandler,
  publicRootHandler,
  publicSourceDefinitionsHandler,
  publicSourcesHandler,
  publicStreamsHandler,
  publicTagsHandler,
  publicUsersHandler,
  publicWorkspacesHandler,
  schedulerHandler,
  scimConfigHandler,
  scopedConfigurationHandler,
  secretsPersistenceConfigHandler,
  secretStorageHandler,
  serviceAccountsHandler,
  signalHandler,
  sourceDefinitionHandler,
  sourceDefinitionSpecificationHandler,
  sourceExecutionHandler,
  sourceHandler,
  sourceOauthHandler,
  ssoConfigHandler,
  stateHandler,
  streamStatusesHandler,
  tagHandler,
  userHandler,
  userInvitationHandler,
  webBackendHandler,
  workloadOutputHandler,
  workspaceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fusionSearchHandler)
  .route('/', fusionSourceEnablementHandler)
  .route('/', fusionDestinationEnablementHandler)
  .route('/', fusionConnectionEnablementHandler)
  .route('/', fusionEnablementResolverHandler)
  .route('/', fusionConnectionBackfillHandler)
  .route('/', workspaceHandler)
  .route('/', notificationsHandler)
  .route('/', sourceDefinitionHandler)
  .route('/', actorDefinitionVersionHandler)
  .route('/', sourceDefinitionSpecificationHandler)
  .route('/', actorDefinitionHandler)
  .route('/', declarativeSourceDefinitionsHandler)
  .route('/', connectorBuilderProjectHandler)
  .route('/', connectorBuilderAssistHandler)
  .route('/', connectorDocumentationHandler)
  .route('/', sourceHandler)
  .route('/', destinationExecutionHandler)
  .route('/', sourceExecutionHandler)
  .route('/', destinationHandler)
  .route('/', destinationDefinitionHandler)
  .route('/', destinationDefinitionSpecificationHandler)
  .route('/', connectionHandler)
  .route('/', stateHandler)
  .route('/', operationHandler)
  .route('/', schedulerHandler)
  .route('/', sourceOauthHandler)
  .route('/', destinationOauthHandler)
  .route('/', webBackendHandler)
  .route('/', jobsHandler)
  .route('/', userHandler)
  .route('/', permissionHandler)
  .route('/', secretsPersistenceConfigHandler)
  .route('/', secretStorageHandler)
  .route('/', healthHandler)
  .route('/', openapiHandler)
  .route('/', attemptHandler)
  .route('/', streamStatusesHandler)
  .route('/', instanceConfigurationHandler)
  .route('/', jobRetryStatesHandler)
  .route('/', billingHandler)
  .route('/', billingNotificationSettingsHandler)
  .route('/', organizationPaymentConfigHandler)
  .route('/', organizationHandler)
  .route('/', organizationSemanticSearchHandler)
  .route('/', groupHandler)
  .route('/', groupPermissionHandler)
  .route('/', domainVerificationsHandler)
  .route('/', deploymentMetadataHandler)
  .route('/', applicationsHandler)
  .route('/', scopedConfigurationHandler)
  .route('/', connectorRolloutHandler)
  .route('/', entitlementsHandler)
  .route('/', userInvitationHandler)
  .route('/', tagHandler)
  .route('/', diagnosticToolHandler)
  .route('/', signalHandler)
  .route('/', catalogHandler)
  .route('/', commandHandler)
  .route('/', workloadOutputHandler)
  .route('/', dataplaneGroupHandler)
  .route('/', dataWorkerAllocationHandler)
  .route('/', dataplaneHandler)
  .route('/', dataplanesHandler)
  .route('/', ssoConfigHandler)
  .route('/', scimConfigHandler)
  .route('/', auditLogsHandler)
  .route('/', publicRootHandler)
  .route('/', publicHealthHandler)
  .route('/', publicApplicationsHandler)
  .route('/', publicJobsHandler)
  .route('/', publicRegionsHandler)
  .route('/', publicDataplanesHandler)
  .route('/', publicConnectorDefinitionsHandler)
  .route('/', publicDeclarativeSourceDefinitionsHandler)
  .route('/', publicSourceDefinitionsHandler)
  .route('/', publicDestinationDefinitionsHandler)
  .route('/', publicSourcesHandler)
  .route('/', publicDestinationsHandler)
  .route('/', publicOauthHandler)
  .route('/', publicConnectionsHandler)
  .route('/', publicStreamsHandler)
  .route('/', publicWorkspacesHandler)
  .route('/', publicPermissionsHandler)
  .route('/', publicOrganizationsHandler)
  .route('/', publicUsersHandler)
  .route('/', publicGroupsHandler)
  .route('/', publicGroupMembersHandler)
  .route('/', publicGroupPermissionsHandler)
  .route('/', publicTagsHandler)
  .route('/', publicHandler)
  .route('/', serviceAccountsHandler)
  .route('/', airbyteReleasesHandler)
  .route('/', privateLinkHandler)
  .route('/', fusionUsageHandler)

export default app
