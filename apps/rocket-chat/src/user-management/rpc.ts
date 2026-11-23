import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1PermissionsListAll(
  args: InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['permissions.listAll'].$get(args, options))
}

export async function postApiV1PermissionsUpdate(
  args: InferRequestType<(typeof client.api.v1)['permissions.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['permissions.update'].$post(args, options))
}

export async function postApiV1PermissionsAddRole(
  args: InferRequestType<(typeof client.api.v1)['permissions.addRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['permissions.addRole'].$post(args, options))
}

export async function postApiV1PermissionsRemoveRole(
  args: InferRequestType<(typeof client.api.v1)['permissions.removeRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['permissions.removeRole'].$post(args, options))
}

export async function postApiV1RolesCreate(
  args: InferRequestType<(typeof client.api.v1)['roles.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.create'].$post(args, options))
}

export async function postApiV1RolesUpdate(
  args: InferRequestType<(typeof client.api.v1)['roles.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.update'].$post(args, options))
}

export async function postApiV1RolesAddUserToRole(
  args: InferRequestType<(typeof client.api.v1)['roles.addUserToRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.addUserToRole'].$post(args, options))
}

export async function getApiV1RolesGetUsersInRole(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.getUsersInRole'].$get(args, options))
}

export async function getApiV1RolesList(
  args: InferRequestType<(typeof client.api.v1)['roles.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.list'].$get(args, options))
}

export async function getApiV1RolesSync(
  args: InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.sync'].$get(args, options))
}

export async function postApiV1RolesDelete(
  args: InferRequestType<(typeof client.api.v1)['roles.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.delete'].$post(args, options))
}

export async function postApiV1RolesRemoveUserFromRole(
  args: InferRequestType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.removeUserFromRole'].$post(args, options))
}

export async function getApiV1RolesGetUsersInPublicRoles(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['roles.getUsersInPublicRoles'].$get(args, options))
}

export async function postApiV1UsersCreate(
  args: InferRequestType<(typeof client.api.v1)['users.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.create'].$post(args, options))
}

export async function postApiV1UsersRegister(
  args: InferRequestType<(typeof client.api.v1)['users.register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.register'].$post(args, options))
}

export async function postApiV1UsersUpdate(
  args: InferRequestType<(typeof client.api.v1)['users.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.update'].$post(args, options))
}

export async function postApiV1UsersUpdateOwnBasicInfo(
  args: InferRequestType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.updateOwnBasicInfo'].$post(args, options))
}

export async function getApiV1UsersInfo(
  args: InferRequestType<(typeof client.api.v1)['users.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.info'].$get(args, options))
}

export async function getApiV1UsersList(
  args: InferRequestType<(typeof client.api.v1)['users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.list'].$get(args, options))
}

export async function postApiV1UsersSetAvatar(
  args: InferRequestType<(typeof client.api.v1)['users.setAvatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.setAvatar'].$post(args, options))
}

export async function getApiV1UsersGetAvatar(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getAvatar'].$get(args, options))
}

export async function postApiV1UsersResetAvatar(
  args: InferRequestType<(typeof client.api.v1)['users.resetAvatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.resetAvatar'].$post(args, options))
}

export async function postApiV1UsersSetStatus(
  args: InferRequestType<(typeof client.api.v1)['users.setStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.setStatus'].$post(args, options))
}

export async function getApiV1UsersGetStatus(
  args: InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getStatus'].$get(args, options))
}

export async function postApiV1UsersSetActiveStatus(
  args: InferRequestType<(typeof client.api.v1)['users.setActiveStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.setActiveStatus'].$post(args, options))
}

export async function postApiV1UsersDeactivateIdle(
  args: InferRequestType<(typeof client.api.v1)['users.deactivateIdle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.deactivateIdle'].$post(args, options))
}

export async function getApiV1UsersGetPresence(
  args: InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getPresence'].$get(args, options))
}

export async function getApiV1UsersPresence(
  args: InferRequestType<(typeof client.api.v1)['users.presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.presence'].$get(args, options))
}

export async function postApiV1UsersDelete(
  args: InferRequestType<(typeof client.api.v1)['users.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.delete'].$post(args, options))
}

export async function postApiV1UsersDeleteOwnAccount(
  args: InferRequestType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.deleteOwnAccount'].$post(args, options))
}

export async function postApiV1UsersCreateToken(
  args: InferRequestType<(typeof client.api.v1)['users.createToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.createToken'].$post(args, options))
}

export async function getApiV1UsersGetPreferences(
  args: InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getPreferences'].$get(args, options))
}

export async function postApiV1UsersSetPreferences(
  args: InferRequestType<(typeof client.api.v1)['users.setPreferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.setPreferences'].$post(args, options))
}

export async function postApiV1UsersForgotPassword(
  args: InferRequestType<(typeof client.api.v1)['users.forgotPassword']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.forgotPassword'].$post(args, options))
}

export async function getApiV1UsersGetUsernameSuggestion(
  args: InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getUsernameSuggestion'].$get(args, options))
}

export async function getApiV1UsersGetAvatarSuggestion(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getAvatarSuggestion'].$get(args, options))
}

export async function getApiV1UsersCheckUsernameAvailability(
  args: InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.checkUsernameAvailability'].$get(args, options))
}

export async function postApiV1UsersGeneratePersonalAccessToken(
  args: InferRequestType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['users.generatePersonalAccessToken'].$post(args, options),
  )
}

export async function postApiV1UsersRegeneratePersonalAccessToken(
  args: InferRequestType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['users.regeneratePersonalAccessToken'].$post(args, options),
  )
}

export async function getApiV1UsersGetPersonalAccessTokens(
  args: InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.getPersonalAccessTokens'].$get(args, options))
}

export async function postApiV1UsersRemovePersonalAccessToken(
  args: InferRequestType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.removePersonalAccessToken'].$post(args, options))
}

export async function getApiV1UsersRequestDataDownload(
  args: InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.requestDataDownload'].$get(args, options))
}

export async function postApiV1UsersLogoutOtherClients(
  args: InferRequestType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.logoutOtherClients'].$post(args, options))
}

export async function getApiV1UsersAutocomplete(
  args: InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.autocomplete'].$get(args, options))
}

export async function postApiV1UsersRemoveOtherTokens(
  args: InferRequestType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.removeOtherTokens'].$post(args, options))
}

export async function postApiV1UsersResetE2EKey(
  args: InferRequestType<(typeof client.api.v1)['users.resetE2EKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.resetE2EKey'].$post(args, options))
}

export async function postApiV1UsersResetTOTP(
  args: InferRequestType<(typeof client.api.v1)['users.resetTOTP']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.resetTOTP'].$post(args, options))
}

export async function getApiV1UsersListTeams(
  args: InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.listTeams'].$get(args, options))
}

export async function postApiV1ModerationReportUser(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.reportUser'].$post(args, options))
}

export async function postApiV1UsersLogout(
  args: InferRequestType<(typeof client.api.v1)['users.logout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.logout'].$post(args, options))
}

export async function postApiV1LdapSyncNow(
  args: InferRequestType<(typeof client.api.v1)['ldap.syncNow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['ldap.syncNow'].$post(args, options))
}

export async function postApiV1LdapTestConnection(
  args: InferRequestType<(typeof client.api.v1)['ldap.testConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['ldap.testConnection'].$post(args, options))
}

export async function postApiV1LdapTestSearch(
  args: InferRequestType<(typeof client.api.v1)['ldap.testSearch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['ldap.testSearch'].$post(args, options))
}

export async function getApiV1AvatarSubject(
  args: InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.avatar[':subject'].$get(args, options))
}

export async function postApiV1UsersSendWelcomeEmail(
  args: InferRequestType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.sendWelcomeEmail'].$post(args, options))
}

export async function postApiV1SendInvitationEmail(
  args: InferRequestType<typeof client.api.v1.sendInvitationEmail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sendInvitationEmail.$post(args, options))
}

export async function postApiV1UsersSendConfirmationEmail(
  args: InferRequestType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.sendConfirmationEmail'].$post(args, options))
}

export async function postApiV1UsersVerifyEmail(
  args: InferRequestType<(typeof client.api.v1)['users.verifyEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.verifyEmail'].$post(args, options))
}

export async function getApiV1UsersListByStatus(
  args: InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.listByStatus'].$get(args, options))
}

export async function postApiV1SamlParseMetadata(
  args: InferRequestType<(typeof client.api.v1)['saml.parseMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['saml.parseMetadata'].$post(args, options))
}
