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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1PermissionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsAddRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsRemoveRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesAddUserToRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesGetUsersInRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RolesRemoveUserFromRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesGetUsersInPublicRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUpdateOwnBasicInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSetAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersResetAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSetActiveStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersDeactivateIdleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersDeleteOwnAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersCreateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSetPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetUsernameSuggestionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetAvatarSuggestionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersCheckUsernameAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersGeneratePersonalAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRegeneratePersonalAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersGetPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRemovePersonalAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRequestDataDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersLogoutOtherClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRemoveOtherTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersResetE2EKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersResetTOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersListTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationReportUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LdapSyncNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LdapTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LdapTestSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AvatarSubjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSendWelcomeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SendInvitationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersSendConfirmationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersListByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SamlParseMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
