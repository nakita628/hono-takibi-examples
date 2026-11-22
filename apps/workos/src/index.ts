import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminPortalHandler,
  agentsBlueprintsHandler,
  agentsBlueprintsTokensHandler,
  agentsInstancesHandler,
  agentsRegistrationsHandler,
  agentsSessionsHandler,
  apiKeysHandler,
  applicationClientSecretsHandler,
  applicationsHandler,
  auditLogsHandler,
  authorizationHandler,
  clientHandler,
  connectionsHandler,
  directoriesHandler,
  directoryGroupsHandler,
  directoryUsersHandler,
  eventsHandler,
  featureFlagsHandler,
  featureFlagsTargetsHandler,
  groupsHandler,
  multiFactorAuthChallengesHandler,
  multiFactorAuthHandler,
  organizationDomainsHandler,
  organizationsApiKeysHandler,
  organizationsAuthorizedApplicationsHandler,
  organizationsDataProvidersHandler,
  organizationsFeatureFlagsHandler,
  organizationsHandler,
  organizationsItContactsHandler,
  permissionsHandler,
  pipesHandler,
  pipesProviderHandler,
  platformTeamsHandler,
  radarHandler,
  ssoHandler,
  userManagementAuthenticationHandler,
  userManagementAuthkitOauthResourcesHandler,
  userManagementCorsOriginsHandler,
  userManagementDataProvidersHandler,
  userManagementInvitationsHandler,
  userManagementJwtTemplateHandler,
  userManagementMagicAuthHandler,
  userManagementMultiFactorAuthenticationHandler,
  userManagementOrganizationMembershipGroupsHandler,
  userManagementOrganizationMembershipHandler,
  userManagementRedirectUrisHandler,
  userManagementSessionTokensHandler,
  userManagementUsersAuthorizedApplicationsHandler,
  userManagementUsersFeatureFlagsHandler,
  userManagementUsersHandler,
  userManagementWaitlistsHandler,
  vaultHandler,
  webhooksHandler,
  widgetsHandler,
  workosConnectHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agentsBlueprintsHandler)
  .route('/', agentsBlueprintsTokensHandler)
  .route('/', agentsRegistrationsHandler)
  .route('/', agentsInstancesHandler)
  .route('/', agentsSessionsHandler)
  .route('/', apiKeysHandler)
  .route('/', auditLogsHandler)
  .route('/', multiFactorAuthChallengesHandler)
  .route('/', multiFactorAuthHandler)
  .route('/', workosConnectHandler)
  .route('/', authorizationHandler)
  .route('/', permissionsHandler)
  .route('/', clientHandler)
  .route('/', applicationsHandler)
  .route('/', applicationClientSecretsHandler)
  .route('/', connectionsHandler)
  .route('/', pipesHandler)
  .route('/', directoriesHandler)
  .route('/', directoryGroupsHandler)
  .route('/', directoryUsersHandler)
  .route('/', eventsHandler)
  .route('/', featureFlagsHandler)
  .route('/', featureFlagsTargetsHandler)
  .route('/', organizationDomainsHandler)
  .route('/', organizationsHandler)
  .route('/', organizationsApiKeysHandler)
  .route('/', pipesProviderHandler)
  .route('/', organizationsFeatureFlagsHandler)
  .route('/', groupsHandler)
  .route('/', organizationsAuthorizedApplicationsHandler)
  .route('/', organizationsDataProvidersHandler)
  .route('/', organizationsItContactsHandler)
  .route('/', platformTeamsHandler)
  .route('/', adminPortalHandler)
  .route('/', radarHandler)
  .route('/', ssoHandler)
  .route('/', userManagementSessionTokensHandler)
  .route('/', userManagementAuthenticationHandler)
  .route('/', userManagementAuthkitOauthResourcesHandler)
  .route('/', userManagementCorsOriginsHandler)
  .route('/', userManagementUsersHandler)
  .route('/', userManagementInvitationsHandler)
  .route('/', userManagementJwtTemplateHandler)
  .route('/', userManagementMagicAuthHandler)
  .route('/', userManagementOrganizationMembershipHandler)
  .route('/', userManagementOrganizationMembershipGroupsHandler)
  .route('/', userManagementRedirectUrisHandler)
  .route('/', userManagementUsersFeatureFlagsHandler)
  .route('/', userManagementUsersAuthorizedApplicationsHandler)
  .route('/', userManagementDataProvidersHandler)
  .route('/', userManagementMultiFactorAuthenticationHandler)
  .route('/', userManagementWaitlistsHandler)
  .route('/', vaultHandler)
  .route('/', webhooksHandler)
  .route('/', widgetsHandler)

export default app
