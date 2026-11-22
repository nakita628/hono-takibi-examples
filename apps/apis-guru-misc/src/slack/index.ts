import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminAppsApprovedHandler,
  adminAppsHandler,
  adminAppsRequestsHandler,
  adminAppsRestrictedHandler,
  adminConversationsEkmHandler,
  adminConversationsHandler,
  adminConversationsRestrictAccessHandler,
  adminEmojiHandler,
  adminInviteRequestsApprovedHandler,
  adminInviteRequestsDeniedHandler,
  adminInviteRequestsHandler,
  adminTeamsAdminsHandler,
  adminTeamsHandler,
  adminTeamsOwnersHandler,
  adminTeamsSettingsHandler,
  adminUsergroupsHandler,
  adminUsersHandler,
  adminUsersSessionHandler,
  apiHandler,
  appsEventAuthorizationsHandler,
  appsHandler,
  appsPermissionsHandler,
  appsPermissionsResourcesHandler,
  appsPermissionsScopesHandler,
  appsPermissionsUsersHandler,
  authHandler,
  botsHandler,
  callsHandler,
  callsParticipantsHandler,
  chatHandler,
  chatScheduledMessagesHandler,
  conversationsHandler,
  dialogHandler,
  dndHandler,
  emojiHandler,
  filesCommentsHandler,
  filesHandler,
  filesRemoteHandler,
  migrationHandler,
  oauthHandler,
  oauthV2Handler,
  pinsHandler,
  reactionsHandler,
  remindersHandler,
  rtmHandler,
  searchHandler,
  starsHandler,
  teamHandler,
  teamProfileHandler,
  usergroupsHandler,
  usergroupsUsersHandler,
  usersHandler,
  usersProfileHandler,
  viewsHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminAppsHandler)
  .route('/', adminAppsApprovedHandler)
  .route('/', adminAppsRequestsHandler)
  .route('/', adminAppsRestrictedHandler)
  .route('/', adminConversationsHandler)
  .route('/', adminConversationsEkmHandler)
  .route('/', adminConversationsRestrictAccessHandler)
  .route('/', adminEmojiHandler)
  .route('/', adminInviteRequestsHandler)
  .route('/', adminInviteRequestsApprovedHandler)
  .route('/', adminInviteRequestsDeniedHandler)
  .route('/', adminTeamsAdminsHandler)
  .route('/', adminTeamsHandler)
  .route('/', adminTeamsOwnersHandler)
  .route('/', adminTeamsSettingsHandler)
  .route('/', adminUsergroupsHandler)
  .route('/', adminUsersHandler)
  .route('/', adminUsersSessionHandler)
  .route('/', apiHandler)
  .route('/', appsEventAuthorizationsHandler)
  .route('/', appsPermissionsHandler)
  .route('/', appsPermissionsResourcesHandler)
  .route('/', appsPermissionsScopesHandler)
  .route('/', appsPermissionsUsersHandler)
  .route('/', appsHandler)
  .route('/', authHandler)
  .route('/', botsHandler)
  .route('/', callsHandler)
  .route('/', callsParticipantsHandler)
  .route('/', chatHandler)
  .route('/', chatScheduledMessagesHandler)
  .route('/', conversationsHandler)
  .route('/', dialogHandler)
  .route('/', dndHandler)
  .route('/', emojiHandler)
  .route('/', filesCommentsHandler)
  .route('/', filesHandler)
  .route('/', filesRemoteHandler)
  .route('/', migrationHandler)
  .route('/', oauthHandler)
  .route('/', oauthV2Handler)
  .route('/', pinsHandler)
  .route('/', reactionsHandler)
  .route('/', remindersHandler)
  .route('/', rtmHandler)
  .route('/', searchHandler)
  .route('/', starsHandler)
  .route('/', teamHandler)
  .route('/', teamProfileHandler)
  .route('/', usergroupsHandler)
  .route('/', usergroupsUsersHandler)
  .route('/', usersHandler)
  .route('/', usersProfileHandler)
  .route('/', viewsHandler)
  .route('/', workflowsHandler)

export default app
