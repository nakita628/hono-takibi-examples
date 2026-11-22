import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWellKnownChangePassword(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['change-password'].$get(undefined, options))
}

export async function getWellKnownOryWebauthnJs(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known'].ory['webauthn.js'].$get(undefined, options))
}

export async function getAdminCourierMessages(
  args: InferRequestType<typeof client.admin.courier.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.courier.messages.$get(args, options))
}

export async function getAdminCourierMessagesId(
  args: InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.courier.messages[':id'].$get(args, options))
}

export async function getAdminIdentities(
  args: InferRequestType<typeof client.admin.identities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities.$get(args, options))
}

export async function postAdminIdentities(
  args: InferRequestType<typeof client.admin.identities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities.$post(args, options))
}

export async function patchAdminIdentities(
  args: InferRequestType<typeof client.admin.identities.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities.$patch(args, options))
}

export async function getAdminIdentitiesByExternalExternalID(
  args: InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities.by.external[':externalID'].$get(args, options))
}

export async function getAdminIdentitiesId(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].$get(args, options))
}

export async function putAdminIdentitiesId(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].$put(args, options))
}

export async function deleteAdminIdentitiesId(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].$delete(args, options))
}

export async function patchAdminIdentitiesId(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].$patch(args, options))
}

export async function deleteAdminIdentitiesIdCredentialsType(
  args: InferRequestType<
    (typeof client.admin.identities)[':id']['credentials'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.identities[':id'].credentials[':type'].$delete(args, options),
  )
}

export async function getAdminIdentitiesIdSessions(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].sessions.$get(args, options))
}

export async function deleteAdminIdentitiesIdSessions(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.identities[':id'].sessions.$delete(args, options))
}

export async function postAdminRecoveryCode(
  args: InferRequestType<typeof client.admin.recovery.code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.recovery.code.$post(args, options))
}

export async function postAdminRecoveryLink(
  args: InferRequestType<typeof client.admin.recovery.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.recovery.link.$post(args, options))
}

export async function getAdminSessions(
  args: InferRequestType<typeof client.admin.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sessions.$get(args, options))
}

export async function postAdminSessions(
  args: InferRequestType<typeof client.admin.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sessions.$post(args, options))
}

export async function getAdminSessionsId(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sessions[':id'].$get(args, options))
}

export async function deleteAdminSessionsId(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sessions[':id'].$delete(args, options))
}

export async function patchAdminSessionsIdExtend(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['extend']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sessions[':id'].extend.$patch(args, options))
}

export async function postAdminTestLoginFlows(
  args: InferRequestType<(typeof client.admin)['test-login-flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['test-login-flows'].$post(args, options))
}

export async function getHealthAlive(options?: ClientRequestOptions) {
  return await parseResponse(client.health.alive.$get(undefined, options))
}

export async function getHealthReady(options?: ClientRequestOptions) {
  return await parseResponse(client.health.ready.$get(undefined, options))
}

export async function getSchemas(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.$get(args, options))
}

export async function getSchemasId(
  args: InferRequestType<(typeof client.schemas)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':id'].$get(args, options))
}

export async function getSelfServiceErrors(
  args: InferRequestType<(typeof client)['self-service']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].errors.$get(args, options))
}

export async function getSelfServiceFedCmParameters(options?: ClientRequestOptions) {
  return await parseResponse(client['self-service']['fed-cm'].parameters.$get(undefined, options))
}

export async function postSelfServiceFedCmToken(
  args: InferRequestType<(typeof client)['self-service']['fed-cm']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service']['fed-cm'].token.$post(args, options))
}

export async function postSelfServiceLogin(
  args: InferRequestType<(typeof client)['self-service']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].login.$post(args, options))
}

export async function getSelfServiceLoginApi(
  args: InferRequestType<(typeof client)['self-service']['login']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].login.api.$get(args, options))
}

export async function getSelfServiceLoginBrowser(
  args: InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].login.browser.$get(args, options))
}

export async function getSelfServiceLoginFlows(
  args: InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].login.flows.$get(args, options))
}

export async function deleteSelfServiceLoginTest(
  args: InferRequestType<(typeof client)['self-service']['login']['test']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].login.test.$delete(args, options))
}

export async function getSelfServiceLogout(
  args: InferRequestType<(typeof client)['self-service']['logout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].logout.$get(args, options))
}

export async function deleteSelfServiceLogoutApi(
  args: InferRequestType<(typeof client)['self-service']['logout']['api']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].logout.api.$delete(args, options))
}

export async function getSelfServiceLogoutBrowser(
  args: InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].logout.browser.$get(args, options))
}

export async function postSelfServiceRecovery(
  args: InferRequestType<(typeof client)['self-service']['recovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].recovery.$post(args, options))
}

export async function getSelfServiceRecoveryApi(options?: ClientRequestOptions) {
  return await parseResponse(client['self-service'].recovery.api.$get(undefined, options))
}

export async function getSelfServiceRecoveryBrowser(
  args: InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].recovery.browser.$get(args, options))
}

export async function getSelfServiceRecoveryFlows(
  args: InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].recovery.flows.$get(args, options))
}

export async function postSelfServiceRegistration(
  args: InferRequestType<(typeof client)['self-service']['registration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].registration.$post(args, options))
}

export async function getSelfServiceRegistrationApi(
  args: InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].registration.api.$get(args, options))
}

export async function getSelfServiceRegistrationBrowser(
  args: InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].registration.browser.$get(args, options))
}

export async function getSelfServiceRegistrationFlows(
  args: InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].registration.flows.$get(args, options))
}

export async function postSelfServiceSettings(
  args: InferRequestType<(typeof client)['self-service']['settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].settings.$post(args, options))
}

export async function getSelfServiceSettingsApi(
  args: InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].settings.api.$get(args, options))
}

export async function getSelfServiceSettingsBrowser(
  args: InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].settings.browser.$get(args, options))
}

export async function getSelfServiceSettingsFlows(
  args: InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].settings.flows.$get(args, options))
}

export async function postSelfServiceVerification(
  args: InferRequestType<(typeof client)['self-service']['verification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].verification.$post(args, options))
}

export async function getSelfServiceVerificationApi(
  args: InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].verification.api.$get(args, options))
}

export async function getSelfServiceVerificationBrowser(
  args: InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].verification.browser.$get(args, options))
}

export async function getSelfServiceVerificationFlows(
  args: InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['self-service'].verification.flows.$get(args, options))
}

export async function getSessions(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$get(args, options))
}

export async function deleteSessions(
  args: InferRequestType<typeof client.sessions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$delete(args, options))
}

export async function getSessionsTokenExchange(
  args: InferRequestType<(typeof client.sessions)['token-exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions['token-exchange'].$get(args, options))
}

export async function getSessionsWhoami(
  args: InferRequestType<typeof client.sessions.whoami.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.whoami.$get(args, options))
}

export async function deleteSessionsId(
  args: InferRequestType<(typeof client.sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':id'].$delete(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
