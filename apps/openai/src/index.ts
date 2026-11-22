import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  assistantsHandler,
  audioHandler,
  auditLogsHandler,
  batchHandler,
  certificatesHandler,
  chatHandler,
  chatkitHandler,
  completionsHandler,
  containersHandler,
  contentProvenanceChecksHandler,
  conversationsHandler,
  dataRetentionHandler,
  decisionsHandler,
  embeddingsHandler,
  evalsHandler,
  filesHandler,
  fineTuningHandler,
  groupOrganizationRoleAssignmentsHandler,
  groupsHandler,
  groupUsersHandler,
  hostedToolsHandler,
  imagesHandler,
  invitesHandler,
  liveHandler,
  modelsHandler,
  moderationsHandler,
  organizationHandler,
  projectGroupRoleAssignmentsHandler,
  projectGroupsHandler,
  projectsHandler,
  projectUserRoleAssignmentsHandler,
  realtimeHandler,
  responsesHandler,
  rolesHandler,
  safetyHandler,
  skillsHandler,
  spendAlertsHandler,
  uploadsHandler,
  usageHandler,
  userOrganizationRoleAssignmentsHandler,
  usersHandler,
  vaultsHandler,
  vectorStoresHandler,
  videosHandler,
  webhookEndpointsHandler,
  webhookEventTypesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assistantsHandler)
  .route('/', audioHandler)
  .route('/', batchHandler)
  .route('/', chatHandler)
  .route('/', completionsHandler)
  .route('/', containersHandler)
  .route('/', conversationsHandler)
  .route('/', embeddingsHandler)
  .route('/', evalsHandler)
  .route('/', filesHandler)
  .route('/', fineTuningHandler)
  .route('/', imagesHandler)
  .route('/', liveHandler)
  .route('/', modelsHandler)
  .route('/', moderationsHandler)
  .route('/', organizationHandler)
  .route('/', auditLogsHandler)
  .route('/', certificatesHandler)
  .route('/', usageHandler)
  .route('/', dataRetentionHandler)
  .route('/', groupsHandler)
  .route('/', groupOrganizationRoleAssignmentsHandler)
  .route('/', groupUsersHandler)
  .route('/', invitesHandler)
  .route('/', projectsHandler)
  .route('/', projectGroupsHandler)
  .route('/', hostedToolsHandler)
  .route('/', spendAlertsHandler)
  .route('/', rolesHandler)
  .route('/', usersHandler)
  .route('/', userOrganizationRoleAssignmentsHandler)
  .route('/', projectGroupRoleAssignmentsHandler)
  .route('/', projectUserRoleAssignmentsHandler)
  .route('/', realtimeHandler)
  .route('/', responsesHandler)
  .route('/', uploadsHandler)
  .route('/', vectorStoresHandler)
  .route('/', safetyHandler)
  .route('/', contentProvenanceChecksHandler)
  .route('/', videosHandler)
  .route('/', skillsHandler)
  .route('/', chatkitHandler)
  .route('/', decisionsHandler)
  .route('/', agentsHandler)
  .route('/', vaultsHandler)
  .route('/', webhookEndpointsHandler)
  .route('/', webhookEventTypesHandler)

export default app
