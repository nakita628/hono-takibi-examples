import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AvatarSubjectRoute,
  getApiV1PermissionsListAllRoute,
  getApiV1RolesGetUsersInPublicRolesRoute,
  getApiV1RolesGetUsersInRoleRoute,
  getApiV1RolesListRoute,
  getApiV1RolesSyncRoute,
  getApiV1UsersAutocompleteRoute,
  getApiV1UsersCheckUsernameAvailabilityRoute,
  getApiV1UsersGetAvatarRoute,
  getApiV1UsersGetAvatarSuggestionRoute,
  getApiV1UsersGetPersonalAccessTokensRoute,
  getApiV1UsersGetPreferencesRoute,
  getApiV1UsersGetPresenceRoute,
  getApiV1UsersGetStatusRoute,
  getApiV1UsersGetUsernameSuggestionRoute,
  getApiV1UsersInfoRoute,
  getApiV1UsersListByStatusRoute,
  getApiV1UsersListRoute,
  getApiV1UsersListTeamsRoute,
  getApiV1UsersPresenceRoute,
  getApiV1UsersRequestDataDownloadRoute,
  postApiV1LdapSyncNowRoute,
  postApiV1LdapTestConnectionRoute,
  postApiV1LdapTestSearchRoute,
  postApiV1ModerationReportUserRoute,
  postApiV1PermissionsAddRoleRoute,
  postApiV1PermissionsRemoveRoleRoute,
  postApiV1PermissionsUpdateRoute,
  postApiV1RolesAddUserToRoleRoute,
  postApiV1RolesCreateRoute,
  postApiV1RolesDeleteRoute,
  postApiV1RolesRemoveUserFromRoleRoute,
  postApiV1RolesUpdateRoute,
  postApiV1SamlParseMetadataRoute,
  postApiV1SendInvitationEmailRoute,
  postApiV1UsersCreateRoute,
  postApiV1UsersCreateTokenRoute,
  postApiV1UsersDeactivateIdleRoute,
  postApiV1UsersDeleteOwnAccountRoute,
  postApiV1UsersDeleteRoute,
  postApiV1UsersForgotPasswordRoute,
  postApiV1UsersGeneratePersonalAccessTokenRoute,
  postApiV1UsersLogoutOtherClientsRoute,
  postApiV1UsersLogoutRoute,
  postApiV1UsersRegeneratePersonalAccessTokenRoute,
  postApiV1UsersRegisterRoute,
  postApiV1UsersRemoveOtherTokensRoute,
  postApiV1UsersRemovePersonalAccessTokenRoute,
  postApiV1UsersResetAvatarRoute,
  postApiV1UsersResetE2EKeyRoute,
  postApiV1UsersResetTOTPRoute,
  postApiV1UsersSendConfirmationEmailRoute,
  postApiV1UsersSendWelcomeEmailRoute,
  postApiV1UsersSetActiveStatusRoute,
  postApiV1UsersSetAvatarRoute,
  postApiV1UsersSetPreferencesRoute,
  postApiV1UsersSetStatusRoute,
  postApiV1UsersUpdateOwnBasicInfoRoute,
  postApiV1UsersUpdateRoute,
  postApiV1UsersVerifyEmailRoute,
} from './routes'
import {
  getApiV1AvatarSubjectRouteHandler,
  getApiV1PermissionsListAllRouteHandler,
  getApiV1RolesGetUsersInPublicRolesRouteHandler,
  getApiV1RolesGetUsersInRoleRouteHandler,
  getApiV1RolesListRouteHandler,
  getApiV1RolesSyncRouteHandler,
  getApiV1UsersAutocompleteRouteHandler,
  getApiV1UsersCheckUsernameAvailabilityRouteHandler,
  getApiV1UsersGetAvatarRouteHandler,
  getApiV1UsersGetAvatarSuggestionRouteHandler,
  getApiV1UsersGetPersonalAccessTokensRouteHandler,
  getApiV1UsersGetPreferencesRouteHandler,
  getApiV1UsersGetPresenceRouteHandler,
  getApiV1UsersGetStatusRouteHandler,
  getApiV1UsersGetUsernameSuggestionRouteHandler,
  getApiV1UsersInfoRouteHandler,
  getApiV1UsersListByStatusRouteHandler,
  getApiV1UsersListRouteHandler,
  getApiV1UsersListTeamsRouteHandler,
  getApiV1UsersPresenceRouteHandler,
  getApiV1UsersRequestDataDownloadRouteHandler,
  postApiV1LdapSyncNowRouteHandler,
  postApiV1LdapTestConnectionRouteHandler,
  postApiV1LdapTestSearchRouteHandler,
  postApiV1ModerationReportUserRouteHandler,
  postApiV1PermissionsAddRoleRouteHandler,
  postApiV1PermissionsRemoveRoleRouteHandler,
  postApiV1PermissionsUpdateRouteHandler,
  postApiV1RolesAddUserToRoleRouteHandler,
  postApiV1RolesCreateRouteHandler,
  postApiV1RolesDeleteRouteHandler,
  postApiV1RolesRemoveUserFromRoleRouteHandler,
  postApiV1RolesUpdateRouteHandler,
  postApiV1SamlParseMetadataRouteHandler,
  postApiV1SendInvitationEmailRouteHandler,
  postApiV1UsersCreateRouteHandler,
  postApiV1UsersCreateTokenRouteHandler,
  postApiV1UsersDeactivateIdleRouteHandler,
  postApiV1UsersDeleteOwnAccountRouteHandler,
  postApiV1UsersDeleteRouteHandler,
  postApiV1UsersForgotPasswordRouteHandler,
  postApiV1UsersGeneratePersonalAccessTokenRouteHandler,
  postApiV1UsersLogoutOtherClientsRouteHandler,
  postApiV1UsersLogoutRouteHandler,
  postApiV1UsersRegeneratePersonalAccessTokenRouteHandler,
  postApiV1UsersRegisterRouteHandler,
  postApiV1UsersRemoveOtherTokensRouteHandler,
  postApiV1UsersRemovePersonalAccessTokenRouteHandler,
  postApiV1UsersResetAvatarRouteHandler,
  postApiV1UsersResetE2EKeyRouteHandler,
  postApiV1UsersResetTOTPRouteHandler,
  postApiV1UsersSendConfirmationEmailRouteHandler,
  postApiV1UsersSendWelcomeEmailRouteHandler,
  postApiV1UsersSetActiveStatusRouteHandler,
  postApiV1UsersSetAvatarRouteHandler,
  postApiV1UsersSetPreferencesRouteHandler,
  postApiV1UsersSetStatusRouteHandler,
  postApiV1UsersUpdateOwnBasicInfoRouteHandler,
  postApiV1UsersUpdateRouteHandler,
  postApiV1UsersVerifyEmailRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1PermissionsListAllRoute, getApiV1PermissionsListAllRouteHandler)
  .openapi(postApiV1PermissionsUpdateRoute, postApiV1PermissionsUpdateRouteHandler)
  .openapi(postApiV1PermissionsAddRoleRoute, postApiV1PermissionsAddRoleRouteHandler)
  .openapi(postApiV1PermissionsRemoveRoleRoute, postApiV1PermissionsRemoveRoleRouteHandler)
  .openapi(postApiV1RolesCreateRoute, postApiV1RolesCreateRouteHandler)
  .openapi(postApiV1RolesUpdateRoute, postApiV1RolesUpdateRouteHandler)
  .openapi(postApiV1RolesAddUserToRoleRoute, postApiV1RolesAddUserToRoleRouteHandler)
  .openapi(getApiV1RolesGetUsersInRoleRoute, getApiV1RolesGetUsersInRoleRouteHandler)
  .openapi(getApiV1RolesListRoute, getApiV1RolesListRouteHandler)
  .openapi(getApiV1RolesSyncRoute, getApiV1RolesSyncRouteHandler)
  .openapi(postApiV1RolesDeleteRoute, postApiV1RolesDeleteRouteHandler)
  .openapi(postApiV1RolesRemoveUserFromRoleRoute, postApiV1RolesRemoveUserFromRoleRouteHandler)
  .openapi(getApiV1RolesGetUsersInPublicRolesRoute, getApiV1RolesGetUsersInPublicRolesRouteHandler)
  .openapi(postApiV1UsersCreateRoute, postApiV1UsersCreateRouteHandler)
  .openapi(postApiV1UsersRegisterRoute, postApiV1UsersRegisterRouteHandler)
  .openapi(postApiV1UsersUpdateRoute, postApiV1UsersUpdateRouteHandler)
  .openapi(postApiV1UsersUpdateOwnBasicInfoRoute, postApiV1UsersUpdateOwnBasicInfoRouteHandler)
  .openapi(getApiV1UsersInfoRoute, getApiV1UsersInfoRouteHandler)
  .openapi(getApiV1UsersListRoute, getApiV1UsersListRouteHandler)
  .openapi(postApiV1UsersSetAvatarRoute, postApiV1UsersSetAvatarRouteHandler)
  .openapi(getApiV1UsersGetAvatarRoute, getApiV1UsersGetAvatarRouteHandler)
  .openapi(postApiV1UsersResetAvatarRoute, postApiV1UsersResetAvatarRouteHandler)
  .openapi(postApiV1UsersSetStatusRoute, postApiV1UsersSetStatusRouteHandler)
  .openapi(getApiV1UsersGetStatusRoute, getApiV1UsersGetStatusRouteHandler)
  .openapi(postApiV1UsersSetActiveStatusRoute, postApiV1UsersSetActiveStatusRouteHandler)
  .openapi(postApiV1UsersDeactivateIdleRoute, postApiV1UsersDeactivateIdleRouteHandler)
  .openapi(getApiV1UsersGetPresenceRoute, getApiV1UsersGetPresenceRouteHandler)
  .openapi(getApiV1UsersPresenceRoute, getApiV1UsersPresenceRouteHandler)
  .openapi(postApiV1UsersDeleteRoute, postApiV1UsersDeleteRouteHandler)
  .openapi(postApiV1UsersDeleteOwnAccountRoute, postApiV1UsersDeleteOwnAccountRouteHandler)
  .openapi(postApiV1UsersCreateTokenRoute, postApiV1UsersCreateTokenRouteHandler)
  .openapi(getApiV1UsersGetPreferencesRoute, getApiV1UsersGetPreferencesRouteHandler)
  .openapi(postApiV1UsersSetPreferencesRoute, postApiV1UsersSetPreferencesRouteHandler)
  .openapi(postApiV1UsersForgotPasswordRoute, postApiV1UsersForgotPasswordRouteHandler)
  .openapi(getApiV1UsersGetUsernameSuggestionRoute, getApiV1UsersGetUsernameSuggestionRouteHandler)
  .openapi(getApiV1UsersGetAvatarSuggestionRoute, getApiV1UsersGetAvatarSuggestionRouteHandler)
  .openapi(
    getApiV1UsersCheckUsernameAvailabilityRoute,
    getApiV1UsersCheckUsernameAvailabilityRouteHandler,
  )
  .openapi(
    postApiV1UsersGeneratePersonalAccessTokenRoute,
    postApiV1UsersGeneratePersonalAccessTokenRouteHandler,
  )
  .openapi(
    postApiV1UsersRegeneratePersonalAccessTokenRoute,
    postApiV1UsersRegeneratePersonalAccessTokenRouteHandler,
  )
  .openapi(
    getApiV1UsersGetPersonalAccessTokensRoute,
    getApiV1UsersGetPersonalAccessTokensRouteHandler,
  )
  .openapi(
    postApiV1UsersRemovePersonalAccessTokenRoute,
    postApiV1UsersRemovePersonalAccessTokenRouteHandler,
  )
  .openapi(getApiV1UsersRequestDataDownloadRoute, getApiV1UsersRequestDataDownloadRouteHandler)
  .openapi(postApiV1UsersLogoutOtherClientsRoute, postApiV1UsersLogoutOtherClientsRouteHandler)
  .openapi(getApiV1UsersAutocompleteRoute, getApiV1UsersAutocompleteRouteHandler)
  .openapi(postApiV1UsersRemoveOtherTokensRoute, postApiV1UsersRemoveOtherTokensRouteHandler)
  .openapi(postApiV1UsersResetE2EKeyRoute, postApiV1UsersResetE2EKeyRouteHandler)
  .openapi(postApiV1UsersResetTOTPRoute, postApiV1UsersResetTOTPRouteHandler)
  .openapi(getApiV1UsersListTeamsRoute, getApiV1UsersListTeamsRouteHandler)
  .openapi(postApiV1ModerationReportUserRoute, postApiV1ModerationReportUserRouteHandler)
  .openapi(postApiV1UsersLogoutRoute, postApiV1UsersLogoutRouteHandler)
  .openapi(postApiV1LdapSyncNowRoute, postApiV1LdapSyncNowRouteHandler)
  .openapi(postApiV1LdapTestConnectionRoute, postApiV1LdapTestConnectionRouteHandler)
  .openapi(postApiV1LdapTestSearchRoute, postApiV1LdapTestSearchRouteHandler)
  .openapi(getApiV1AvatarSubjectRoute, getApiV1AvatarSubjectRouteHandler)
  .openapi(postApiV1UsersSendWelcomeEmailRoute, postApiV1UsersSendWelcomeEmailRouteHandler)
  .openapi(postApiV1SendInvitationEmailRoute, postApiV1SendInvitationEmailRouteHandler)
  .openapi(
    postApiV1UsersSendConfirmationEmailRoute,
    postApiV1UsersSendConfirmationEmailRouteHandler,
  )
  .openapi(postApiV1UsersVerifyEmailRoute, postApiV1UsersVerifyEmailRouteHandler)
  .openapi(getApiV1UsersListByStatusRoute, getApiV1UsersListByStatusRouteHandler)
  .openapi(postApiV1SamlParseMetadataRoute, postApiV1SamlParseMetadataRouteHandler)

export default app
