import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminAppsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.apps.index.$get(undefined, options))
}

export async function getAdminFileIndex(
  args: InferRequestType<typeof client.admin.file.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.file.index.$get(args, options))
}

export async function postAdminFileIndex(
  args: InferRequestType<typeof client.admin.file.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.file.index.$post(args, options))
}

export async function deleteAdminFileIndex(
  args: InferRequestType<typeof client.admin.file.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.file.index.$delete(args, options))
}

export async function getAdminFileUsedByIndex(
  args: InferRequestType<typeof client.admin.file.used_by.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.file.used_by.index.$get(args, options))
}

export async function getAdminModelsIndex(
  args: InferRequestType<typeof client.admin.models.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.models.index.$get(args, options))
}

export async function getAdminSettingsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.settings.index.$get(undefined, options))
}

export async function putAdminSettingsIndex(
  args: InferRequestType<typeof client.admin.settings.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.settings.index.$put(args, options))
}

export async function patchAdminSettingsIndex(
  args: InferRequestType<typeof client.admin.settings.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.settings.index.$patch(args, options))
}

export async function getAdminSystemIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.system.index.$get(undefined, options))
}

export async function postAdminSystemIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.system.index.$post(undefined, options))
}

export async function getAdminVersionIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.version.index.$get(undefined, options))
}

export async function getAdminVersionHistoryIndex(
  args: InferRequestType<typeof client.admin.version.history.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.version.history.index.$get(args, options))
}

export async function getAdminVersionHistoryIdIndex(
  args: InferRequestType<(typeof client.admin.version.history)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.version.history[':id'].index.$get(args, options))
}

export async function getAgentsAgentsIndex(
  args: InferRequestType<typeof client.agents.agents.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents.index.$get(args, options))
}

export async function postAgentsAgentsIndex(
  args: InferRequestType<typeof client.agents.agents.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents.index.$post(args, options))
}

export async function getAgentsAgentsIdIndex(
  args: InferRequestType<(typeof client.agents.agents)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents[':id'].index.$get(args, options))
}

export async function putAgentsAgentsIdIndex(
  args: InferRequestType<(typeof client.agents.agents)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents[':id'].index.$put(args, options))
}

export async function deleteAgentsAgentsIdIndex(
  args: InferRequestType<(typeof client.agents.agents)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents[':id'].index.$delete(args, options))
}

export async function patchAgentsAgentsIdIndex(
  args: InferRequestType<(typeof client.agents.agents)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.agents[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminAllIndex(
  args: InferRequestType<typeof client.authenticators.admin.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.all.index.$get(args, options))
}

export async function getAuthenticatorsAdminDuoIndex(
  args: InferRequestType<typeof client.authenticators.admin.duo.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo.index.$get(args, options))
}

export async function postAuthenticatorsAdminDuoIndex(
  args: InferRequestType<typeof client.authenticators.admin.duo.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo.index.$post(args, options))
}

export async function getAuthenticatorsAdminDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.duo)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.duo)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.duo)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsAdminDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.duo)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.duo[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminEmailIndex(
  args: InferRequestType<typeof client.authenticators.admin.email.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email.index.$get(args, options))
}

export async function postAuthenticatorsAdminEmailIndex(
  args: InferRequestType<typeof client.authenticators.admin.email.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email.index.$post(args, options))
}

export async function getAuthenticatorsAdminEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.email)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.email)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.email)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsAdminEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.email)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.email[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminEndpointIndex(
  args: InferRequestType<typeof client.authenticators.admin.endpoint.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.endpoint.index.$get(args, options))
}

export async function postAuthenticatorsAdminEndpointIndex(
  args: InferRequestType<typeof client.authenticators.admin.endpoint.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.endpoint.index.$post(args, options))
}

export async function getAuthenticatorsAdminEndpointUuidIndex(
  args: InferRequestType<(typeof client.authenticators.admin.endpoint)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.endpoint[':uuid'].index.$get(args, options),
  )
}

export async function putAuthenticatorsAdminEndpointUuidIndex(
  args: InferRequestType<(typeof client.authenticators.admin.endpoint)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.endpoint[':uuid'].index.$put(args, options),
  )
}

export async function deleteAuthenticatorsAdminEndpointUuidIndex(
  args: InferRequestType<
    (typeof client.authenticators.admin.endpoint)[':uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.endpoint[':uuid'].index.$delete(args, options),
  )
}

export async function patchAuthenticatorsAdminEndpointUuidIndex(
  args: InferRequestType<(typeof client.authenticators.admin.endpoint)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.endpoint[':uuid'].index.$patch(args, options),
  )
}

export async function getAuthenticatorsAdminSmsIndex(
  args: InferRequestType<typeof client.authenticators.admin.sms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms.index.$get(args, options))
}

export async function postAuthenticatorsAdminSmsIndex(
  args: InferRequestType<typeof client.authenticators.admin.sms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms.index.$post(args, options))
}

export async function getAuthenticatorsAdminSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.sms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.sms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.sms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsAdminSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.sms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.sms[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminStaticIndex(
  args: InferRequestType<typeof client.authenticators.admin.static.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static.index.$get(args, options))
}

export async function postAuthenticatorsAdminStaticIndex(
  args: InferRequestType<typeof client.authenticators.admin.static.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static.index.$post(args, options))
}

export async function getAuthenticatorsAdminStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.static)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.static)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.static)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsAdminStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.static)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.static[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminTotpIndex(
  args: InferRequestType<typeof client.authenticators.admin.totp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp.index.$get(args, options))
}

export async function postAuthenticatorsAdminTotpIndex(
  args: InferRequestType<typeof client.authenticators.admin.totp.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp.index.$post(args, options))
}

export async function getAuthenticatorsAdminTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.totp)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.totp)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.totp)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsAdminTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.totp)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.totp[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsAdminWebauthnIndex(
  args: InferRequestType<typeof client.authenticators.admin.webauthn.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.webauthn.index.$get(args, options))
}

export async function postAuthenticatorsAdminWebauthnIndex(
  args: InferRequestType<typeof client.authenticators.admin.webauthn.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.webauthn.index.$post(args, options))
}

export async function getAuthenticatorsAdminWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.webauthn)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.webauthn[':id'].index.$get(args, options))
}

export async function putAuthenticatorsAdminWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.webauthn)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.admin.webauthn[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsAdminWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.webauthn)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.webauthn[':id'].index.$delete(args, options),
  )
}

export async function patchAuthenticatorsAdminWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.admin.webauthn)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.admin.webauthn[':id'].index.$patch(args, options),
  )
}

export async function getAuthenticatorsAllIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.authenticators.all.index.$get(undefined, options))
}

export async function getAuthenticatorsDuoIndex(
  args: InferRequestType<typeof client.authenticators.duo.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo.index.$get(args, options))
}

export async function getAuthenticatorsDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.duo)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo[':id'].index.$get(args, options))
}

export async function putAuthenticatorsDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.duo)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.duo)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsDuoIdIndex(
  args: InferRequestType<(typeof client.authenticators.duo)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsDuoIdUsedByIndex(
  args: InferRequestType<(typeof client.authenticators.duo)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.duo[':id'].used_by.index.$get(args, options))
}

export async function getAuthenticatorsEmailIndex(
  args: InferRequestType<typeof client.authenticators.email.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email.index.$get(args, options))
}

export async function getAuthenticatorsEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.email)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email[':id'].index.$get(args, options))
}

export async function putAuthenticatorsEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.email)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.email)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsEmailIdIndex(
  args: InferRequestType<(typeof client.authenticators.email)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsEmailIdUsedByIndex(
  args: InferRequestType<(typeof client.authenticators.email)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.email[':id'].used_by.index.$get(args, options))
}

export async function getAuthenticatorsEndpointIndex(
  args: InferRequestType<typeof client.authenticators.endpoint.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.endpoint.index.$get(args, options))
}

export async function getAuthenticatorsEndpointUuidIndex(
  args: InferRequestType<(typeof client.authenticators.endpoint)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.endpoint[':uuid'].index.$get(args, options))
}

export async function getAuthenticatorsEndpointUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.authenticators.endpoint)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.endpoint[':uuid'].used_by.index.$get(args, options),
  )
}

export async function postAuthenticatorsPasswordIdLockIndex(
  args: InferRequestType<(typeof client.authenticators.password)[':id']['lock']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.password[':id'].lock.index.$post(args, options))
}

export async function postAuthenticatorsPasswordIdUnlockIndex(
  args: InferRequestType<
    (typeof client.authenticators.password)[':id']['unlock']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.password[':id'].unlock.index.$post(args, options),
  )
}

export async function getAuthenticatorsSmsIndex(
  args: InferRequestType<typeof client.authenticators.sms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms.index.$get(args, options))
}

export async function getAuthenticatorsSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.sms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms[':id'].index.$get(args, options))
}

export async function putAuthenticatorsSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.sms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.sms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsSmsIdIndex(
  args: InferRequestType<(typeof client.authenticators.sms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsSmsIdUsedByIndex(
  args: InferRequestType<(typeof client.authenticators.sms)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.sms[':id'].used_by.index.$get(args, options))
}

export async function getAuthenticatorsStaticIndex(
  args: InferRequestType<typeof client.authenticators.static.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static.index.$get(args, options))
}

export async function getAuthenticatorsStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.static)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static[':id'].index.$get(args, options))
}

export async function putAuthenticatorsStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.static)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.static)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsStaticIdIndex(
  args: InferRequestType<(typeof client.authenticators.static)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsStaticIdUsedByIndex(
  args: InferRequestType<(typeof client.authenticators.static)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.static[':id'].used_by.index.$get(args, options))
}

export async function getAuthenticatorsTotpIndex(
  args: InferRequestType<typeof client.authenticators.totp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp.index.$get(args, options))
}

export async function getAuthenticatorsTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.totp)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp[':id'].index.$get(args, options))
}

export async function putAuthenticatorsTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.totp)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.totp)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsTotpIdIndex(
  args: InferRequestType<(typeof client.authenticators.totp)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsTotpIdUsedByIndex(
  args: InferRequestType<(typeof client.authenticators.totp)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.totp[':id'].used_by.index.$get(args, options))
}

export async function getAuthenticatorsWebauthnIndex(
  args: InferRequestType<typeof client.authenticators.webauthn.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.webauthn.index.$get(args, options))
}

export async function getAuthenticatorsWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.webauthn)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.webauthn[':id'].index.$get(args, options))
}

export async function putAuthenticatorsWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.webauthn)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.webauthn[':id'].index.$put(args, options))
}

export async function deleteAuthenticatorsWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.webauthn)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.webauthn[':id'].index.$delete(args, options))
}

export async function patchAuthenticatorsWebauthnIdIndex(
  args: InferRequestType<(typeof client.authenticators.webauthn)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.webauthn[':id'].index.$patch(args, options))
}

export async function getAuthenticatorsWebauthnIdUsedByIndex(
  args: InferRequestType<
    (typeof client.authenticators.webauthn)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authenticators.webauthn[':id'].used_by.index.$get(args, options),
  )
}

export async function getCoreApplicationEntitlementsIndex(
  args: InferRequestType<typeof client.core.application_entitlements.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.application_entitlements.index.$get(args, options))
}

export async function postCoreApplicationEntitlementsIndex(
  args: InferRequestType<typeof client.core.application_entitlements.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.application_entitlements.index.$post(args, options))
}

export async function getCoreApplicationEntitlementsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.core.application_entitlements)[':pbm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements[':pbm_uuid'].index.$get(args, options),
  )
}

export async function putCoreApplicationEntitlementsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.core.application_entitlements)[':pbm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements[':pbm_uuid'].index.$put(args, options),
  )
}

export async function deleteCoreApplicationEntitlementsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.core.application_entitlements)[':pbm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements[':pbm_uuid'].index.$delete(args, options),
  )
}

export async function patchCoreApplicationEntitlementsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.core.application_entitlements)[':pbm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements[':pbm_uuid'].index.$patch(args, options),
  )
}

export async function getCoreApplicationEntitlementsPbmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.core.application_entitlements)[':pbm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements[':pbm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getCoreApplicationEntitlementsRequestableIndex(
  args: InferRequestType<typeof client.core.application_entitlements.requestable.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.application_entitlements.requestable.index.$get(args, options),
  )
}

export async function getCoreApplicationsIndex(
  args: InferRequestType<typeof client.core.applications.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications.index.$get(args, options))
}

export async function postCoreApplicationsIndex(
  args: InferRequestType<typeof client.core.applications.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications.index.$post(args, options))
}

export async function getCoreApplicationsSlugIndex(
  args: InferRequestType<(typeof client.core.applications)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications[':slug'].index.$get(args, options))
}

export async function putCoreApplicationsSlugIndex(
  args: InferRequestType<(typeof client.core.applications)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications[':slug'].index.$put(args, options))
}

export async function deleteCoreApplicationsSlugIndex(
  args: InferRequestType<(typeof client.core.applications)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications[':slug'].index.$delete(args, options))
}

export async function patchCoreApplicationsSlugIndex(
  args: InferRequestType<(typeof client.core.applications)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications[':slug'].index.$patch(args, options))
}

export async function getCoreApplicationsSlugCheckAccessIndex(
  args: InferRequestType<
    (typeof client.core.applications)[':slug']['check_access']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.applications[':slug'].check_access.index.$get(args, options),
  )
}

export async function getCoreApplicationsSlugUsedByIndex(
  args: InferRequestType<(typeof client.core.applications)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications[':slug'].used_by.index.$get(args, options))
}

export async function getCoreApplicationsAccessibleIndex(
  args: InferRequestType<(typeof client.core.applications)['@accessible']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications['@accessible'].index.$get(args, options))
}

export async function getCoreApplicationsRequestableIndex(
  args: InferRequestType<typeof client.core.applications.requestable.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.applications.requestable.index.$get(args, options))
}

export async function getCoreAuthenticatedSessionsIndex(
  args: InferRequestType<typeof client.core.authenticated_sessions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.authenticated_sessions.index.$get(args, options))
}

export async function getCoreAuthenticatedSessionsUuidIndex(
  args: InferRequestType<(typeof client.core.authenticated_sessions)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.authenticated_sessions[':uuid'].index.$get(args, options))
}

export async function deleteCoreAuthenticatedSessionsUuidIndex(
  args: InferRequestType<(typeof client.core.authenticated_sessions)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.authenticated_sessions[':uuid'].index.$delete(args, options),
  )
}

export async function getCoreAuthenticatedSessionsUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.core.authenticated_sessions)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.authenticated_sessions[':uuid'].used_by.index.$get(args, options),
  )
}

export async function deleteCoreAuthenticatedSessionsBulkDeleteIndex(
  args: InferRequestType<typeof client.core.authenticated_sessions.bulk_delete.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.authenticated_sessions.bulk_delete.index.$delete(args, options),
  )
}

export async function getCoreBrandsIndex(
  args: InferRequestType<typeof client.core.brands.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands.index.$get(args, options))
}

export async function postCoreBrandsIndex(
  args: InferRequestType<typeof client.core.brands.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands.index.$post(args, options))
}

export async function getCoreBrandsBrandUuidIndex(
  args: InferRequestType<(typeof client.core.brands)[':brand_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands[':brand_uuid'].index.$get(args, options))
}

export async function putCoreBrandsBrandUuidIndex(
  args: InferRequestType<(typeof client.core.brands)[':brand_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands[':brand_uuid'].index.$put(args, options))
}

export async function deleteCoreBrandsBrandUuidIndex(
  args: InferRequestType<(typeof client.core.brands)[':brand_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands[':brand_uuid'].index.$delete(args, options))
}

export async function patchCoreBrandsBrandUuidIndex(
  args: InferRequestType<(typeof client.core.brands)[':brand_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands[':brand_uuid'].index.$patch(args, options))
}

export async function getCoreBrandsBrandUuidUsedByIndex(
  args: InferRequestType<(typeof client.core.brands)[':brand_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.brands[':brand_uuid'].used_by.index.$get(args, options))
}

export async function getCoreBrandsCurrentIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.core.brands.current.index.$get(undefined, options))
}

export async function getCoreGroupsIndex(
  args: InferRequestType<typeof client.core.groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups.index.$get(args, options))
}

export async function postCoreGroupsIndex(
  args: InferRequestType<typeof client.core.groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups.index.$post(args, options))
}

export async function getCoreGroupsGroupUuidIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].index.$get(args, options))
}

export async function putCoreGroupsGroupUuidIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].index.$put(args, options))
}

export async function deleteCoreGroupsGroupUuidIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].index.$delete(args, options))
}

export async function patchCoreGroupsGroupUuidIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].index.$patch(args, options))
}

export async function postCoreGroupsGroupUuidAddUserIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['add_user']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].add_user.index.$post(args, options))
}

export async function postCoreGroupsGroupUuidRemoveUserIndex(
  args: InferRequestType<
    (typeof client.core.groups)[':group_uuid']['remove_user']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.groups[':group_uuid'].remove_user.index.$post(args, options),
  )
}

export async function getCoreGroupsGroupUuidUsedByIndex(
  args: InferRequestType<(typeof client.core.groups)[':group_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.groups[':group_uuid'].used_by.index.$get(args, options))
}

export async function getCoreObjectAttributesIndex(
  args: InferRequestType<typeof client.core.object_attributes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.object_attributes.index.$get(args, options))
}

export async function postCoreObjectAttributesIndex(
  args: InferRequestType<typeof client.core.object_attributes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.object_attributes.index.$post(args, options))
}

export async function getCoreObjectAttributesAttributeIdIndex(
  args: InferRequestType<(typeof client.core.object_attributes)[':attribute_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.object_attributes[':attribute_id'].index.$get(args, options),
  )
}

export async function putCoreObjectAttributesAttributeIdIndex(
  args: InferRequestType<(typeof client.core.object_attributes)[':attribute_id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.object_attributes[':attribute_id'].index.$put(args, options),
  )
}

export async function deleteCoreObjectAttributesAttributeIdIndex(
  args: InferRequestType<
    (typeof client.core.object_attributes)[':attribute_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.object_attributes[':attribute_id'].index.$delete(args, options),
  )
}

export async function patchCoreObjectAttributesAttributeIdIndex(
  args: InferRequestType<
    (typeof client.core.object_attributes)[':attribute_id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.core.object_attributes[':attribute_id'].index.$patch(args, options),
  )
}

export async function getCoreTokensIndex(
  args: InferRequestType<typeof client.core.tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens.index.$get(args, options))
}

export async function postCoreTokensIndex(
  args: InferRequestType<typeof client.core.tokens.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens.index.$post(args, options))
}

export async function getCoreTokensIdentifierIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].index.$get(args, options))
}

export async function putCoreTokensIdentifierIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].index.$put(args, options))
}

export async function deleteCoreTokensIdentifierIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].index.$delete(args, options))
}

export async function patchCoreTokensIdentifierIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].index.$patch(args, options))
}

export async function postCoreTokensIdentifierSetKeyIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['set_key']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].set_key.index.$post(args, options))
}

export async function getCoreTokensIdentifierUsedByIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].used_by.index.$get(args, options))
}

export async function getCoreTokensIdentifierViewKeyIndex(
  args: InferRequestType<(typeof client.core.tokens)[':identifier']['view_key']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.tokens[':identifier'].view_key.index.$get(args, options))
}

export async function putCoreTransactionalApplicationsIndex(
  args: InferRequestType<typeof client.core.transactional.applications.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.transactional.applications.index.$put(args, options))
}

export async function getCoreUserConsentIndex(
  args: InferRequestType<typeof client.core.user_consent.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.user_consent.index.$get(args, options))
}

export async function getCoreUserConsentIdIndex(
  args: InferRequestType<(typeof client.core.user_consent)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.user_consent[':id'].index.$get(args, options))
}

export async function deleteCoreUserConsentIdIndex(
  args: InferRequestType<(typeof client.core.user_consent)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.user_consent[':id'].index.$delete(args, options))
}

export async function getCoreUserConsentIdUsedByIndex(
  args: InferRequestType<(typeof client.core.user_consent)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.user_consent[':id'].used_by.index.$get(args, options))
}

export async function getCoreUsersIndex(
  args: InferRequestType<typeof client.core.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.index.$get(args, options))
}

export async function postCoreUsersIndex(
  args: InferRequestType<typeof client.core.users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.index.$post(args, options))
}

export async function getCoreUsersIdIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].index.$get(args, options))
}

export async function putCoreUsersIdIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].index.$put(args, options))
}

export async function deleteCoreUsersIdIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].index.$delete(args, options))
}

export async function patchCoreUsersIdIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].index.$patch(args, options))
}

export async function postCoreUsersIdImpersonateIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['impersonate']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].impersonate.index.$post(args, options))
}

export async function postCoreUsersIdRecoveryIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['recovery']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].recovery.index.$post(args, options))
}

export async function postCoreUsersIdRecoveryEmailIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['recovery_email']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].recovery_email.index.$post(args, options))
}

export async function postCoreUsersIdSetPasswordIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['set_password']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].set_password.index.$post(args, options))
}

export async function postCoreUsersIdSetPasswordHashIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['set_password_hash']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].set_password_hash.index.$post(args, options))
}

export async function getCoreUsersIdUsedByIndex(
  args: InferRequestType<(typeof client.core.users)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users[':id'].used_by.index.$get(args, options))
}

export async function postCoreUsersAccountLockdownIndex(
  args: InferRequestType<typeof client.core.users.account_lockdown.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.account_lockdown.index.$post(args, options))
}

export async function postCoreUsersExportIndex(
  args: InferRequestType<typeof client.core.users.export.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.export.index.$post(args, options))
}

export async function getCoreUsersImpersonateEndIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.core.users.impersonate_end.index.$get(undefined, options))
}

export async function getCoreUsersMeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.core.users.me.index.$get(undefined, options))
}

export async function getCoreUsersPathsIndex(
  args: InferRequestType<typeof client.core.users.paths.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.paths.index.$get(args, options))
}

export async function postCoreUsersServiceAccountIndex(
  args: InferRequestType<typeof client.core.users.service_account.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.service_account.index.$post(args, options))
}

export async function postCoreUsersSwitchIndex(
  args: InferRequestType<typeof client.core.users.switch.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.core.users.switch.index.$post(args, options))
}

export async function getCryptoCertificatekeypairsIndex(
  args: InferRequestType<typeof client.crypto.certificatekeypairs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crypto.certificatekeypairs.index.$get(args, options))
}

export async function postCryptoCertificatekeypairsIndex(
  args: InferRequestType<typeof client.crypto.certificatekeypairs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crypto.certificatekeypairs.index.$post(args, options))
}

export async function getCryptoCertificatekeypairsKpUuidIndex(
  args: InferRequestType<(typeof client.crypto.certificatekeypairs)[':kp_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].index.$get(args, options),
  )
}

export async function putCryptoCertificatekeypairsKpUuidIndex(
  args: InferRequestType<(typeof client.crypto.certificatekeypairs)[':kp_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].index.$put(args, options),
  )
}

export async function deleteCryptoCertificatekeypairsKpUuidIndex(
  args: InferRequestType<
    (typeof client.crypto.certificatekeypairs)[':kp_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].index.$delete(args, options),
  )
}

export async function patchCryptoCertificatekeypairsKpUuidIndex(
  args: InferRequestType<(typeof client.crypto.certificatekeypairs)[':kp_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].index.$patch(args, options),
  )
}

export async function getCryptoCertificatekeypairsKpUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.crypto.certificatekeypairs)[':kp_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].used_by.index.$get(args, options),
  )
}

export async function getCryptoCertificatekeypairsKpUuidViewCertificateIndex(
  args: InferRequestType<
    (typeof client.crypto.certificatekeypairs)[':kp_uuid']['view_certificate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].view_certificate.index.$get(args, options),
  )
}

export async function getCryptoCertificatekeypairsKpUuidViewPrivateKeyIndex(
  args: InferRequestType<
    (typeof client.crypto.certificatekeypairs)[':kp_uuid']['view_private_key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crypto.certificatekeypairs[':kp_uuid'].view_private_key.index.$get(args, options),
  )
}

export async function postCryptoCertificatekeypairsGenerateIndex(
  args: InferRequestType<typeof client.crypto.certificatekeypairs.generate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crypto.certificatekeypairs.generate.index.$post(args, options))
}

export async function postDebugLogIndex(
  args: InferRequestType<typeof client.debug.log.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.log.index.$post(args, options))
}

export async function getEndpointsAgentsConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.index.$get(args, options))
}

export async function postEndpointsAgentsConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.index.$post(args, options))
}

export async function getEndpointsAgentsConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsAgentsConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsAgentsConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsAgentsConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].index.$patch(args, options),
  )
}

export async function postEndpointsAgentsConnectorsConnectorUuidMdmConfigIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['mdm_config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].mdm_config.index.$post(args, options),
  )
}

export async function getEndpointsAgentsConnectorsConnectorUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.connectors)[':connector_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.connectors[':connector_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsAgentsConnectorsAgentConfigIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.endpoints.agents.connectors.agent_config.index.$get(undefined, options),
  )
}

export async function postEndpointsAgentsConnectorsAuthFedIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.auth_fed.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.auth_fed.index.$post(args, options))
}

export async function postEndpointsAgentsConnectorsAuthIaIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.auth_ia.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.auth_ia.index.$post(args, options))
}

export async function postEndpointsAgentsConnectorsCheckInIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.check_in.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.check_in.index.$post(args, options))
}

export async function postEndpointsAgentsConnectorsEnrollIndex(
  args: InferRequestType<typeof client.endpoints.agents.connectors.enroll.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.connectors.enroll.index.$post(args, options))
}

export async function getEndpointsAgentsEnrollmentTokensIndex(
  args: InferRequestType<typeof client.endpoints.agents.enrollment_tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.enrollment_tokens.index.$get(args, options))
}

export async function postEndpointsAgentsEnrollmentTokensIndex(
  args: InferRequestType<typeof client.endpoints.agents.enrollment_tokens.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.enrollment_tokens.index.$post(args, options))
}

export async function getEndpointsAgentsEnrollmentTokensTokenUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsAgentsEnrollmentTokensTokenUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsAgentsEnrollmentTokensTokenUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsAgentsEnrollmentTokensTokenUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsAgentsEnrollmentTokensTokenUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsAgentsEnrollmentTokensTokenUuidViewKeyIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.enrollment_tokens)[':token_uuid']['view_key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.enrollment_tokens[':token_uuid'].view_key.index.$get(args, options),
  )
}

export async function getEndpointsAgentsPssoIseIndex(
  args: InferRequestType<typeof client.endpoints.agents.psso.ise.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise.index.$get(args, options))
}

export async function postEndpointsAgentsPssoIseIndex(
  args: InferRequestType<typeof client.endpoints.agents.psso.ise.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise.index.$post(args, options))
}

export async function getEndpointsAgentsPssoIseUuidIndex(
  args: InferRequestType<(typeof client.endpoints.agents.psso.ise)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise[':uuid'].index.$get(args, options))
}

export async function putEndpointsAgentsPssoIseUuidIndex(
  args: InferRequestType<(typeof client.endpoints.agents.psso.ise)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise[':uuid'].index.$put(args, options))
}

export async function deleteEndpointsAgentsPssoIseUuidIndex(
  args: InferRequestType<(typeof client.endpoints.agents.psso.ise)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise[':uuid'].index.$delete(args, options))
}

export async function patchEndpointsAgentsPssoIseUuidIndex(
  args: InferRequestType<(typeof client.endpoints.agents.psso.ise)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.ise[':uuid'].index.$patch(args, options))
}

export async function getEndpointsAgentsPssoIseUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.agents.psso.ise)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.psso.ise[':uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsAgentsPssoRegisterDeviceIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.endpoints.agents.psso.register.device.index.$get(undefined, options),
  )
}

export async function postEndpointsAgentsPssoRegisterDeviceIndex(
  args: InferRequestType<typeof client.endpoints.agents.psso.register.device.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.agents.psso.register.device.index.$post(args, options),
  )
}

export async function deleteEndpointsAgentsPssoRegisterDeviceIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.endpoints.agents.psso.register.device.index.$delete(undefined, options),
  )
}

export async function postEndpointsAgentsPssoRegisterUserIndex(
  args: InferRequestType<typeof client.endpoints.agents.psso.register.user.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.agents.psso.register.user.index.$post(args, options))
}

export async function getEndpointsConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.connectors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.connectors.index.$get(args, options))
}

export async function getEndpointsConnectorsConnectorUuidIndex(
  args: InferRequestType<(typeof client.endpoints.connectors)[':connector_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.connectors[':connector_uuid'].index.$get(args, options),
  )
}

export async function deleteEndpointsConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.connectors)[':connector_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.connectors[':connector_uuid'].index.$delete(args, options),
  )
}

export async function getEndpointsConnectorsConnectorUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.connectors)[':connector_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.connectors[':connector_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsConnectorsTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.connectors.types.index.$get(undefined, options))
}

export async function getEndpointsDeviceAccessGroupsIndex(
  args: InferRequestType<typeof client.endpoints.device_access_groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.device_access_groups.index.$get(args, options))
}

export async function postEndpointsDeviceAccessGroupsIndex(
  args: InferRequestType<typeof client.endpoints.device_access_groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.device_access_groups.index.$post(args, options))
}

export async function getEndpointsDeviceAccessGroupsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_access_groups)[':pbm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_access_groups[':pbm_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsDeviceAccessGroupsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_access_groups)[':pbm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_access_groups[':pbm_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsDeviceAccessGroupsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_access_groups)[':pbm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_access_groups[':pbm_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsDeviceAccessGroupsPbmUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_access_groups)[':pbm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_access_groups[':pbm_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsDeviceAccessGroupsPbmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_access_groups)[':pbm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_access_groups[':pbm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsDeviceBindingsIndex(
  args: InferRequestType<typeof client.endpoints.device_bindings.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.device_bindings.index.$get(args, options))
}

export async function postEndpointsDeviceBindingsIndex(
  args: InferRequestType<typeof client.endpoints.device_bindings.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.device_bindings.index.$post(args, options))
}

export async function getEndpointsDeviceBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_bindings)[':policy_binding_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_bindings[':policy_binding_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsDeviceBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_bindings)[':policy_binding_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_bindings[':policy_binding_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsDeviceBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_bindings)[':policy_binding_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_bindings[':policy_binding_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsDeviceBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_bindings)[':policy_binding_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_bindings[':policy_binding_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsDeviceBindingsPolicyBindingUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.device_bindings)[':policy_binding_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.device_bindings[':policy_binding_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsDevicesIndex(
  args: InferRequestType<typeof client.endpoints.devices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices.index.$get(args, options))
}

export async function postEndpointsDevicesIndex(
  args: InferRequestType<typeof client.endpoints.devices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices.index.$post(args, options))
}

export async function getEndpointsDevicesDeviceUuidIndex(
  args: InferRequestType<(typeof client.endpoints.devices)[':device_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices[':device_uuid'].index.$get(args, options))
}

export async function putEndpointsDevicesDeviceUuidIndex(
  args: InferRequestType<(typeof client.endpoints.devices)[':device_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices[':device_uuid'].index.$put(args, options))
}

export async function deleteEndpointsDevicesDeviceUuidIndex(
  args: InferRequestType<(typeof client.endpoints.devices)[':device_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices[':device_uuid'].index.$delete(args, options))
}

export async function patchEndpointsDevicesDeviceUuidIndex(
  args: InferRequestType<(typeof client.endpoints.devices)[':device_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.devices[':device_uuid'].index.$patch(args, options))
}

export async function getEndpointsDevicesDeviceUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.devices)[':device_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.devices[':device_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsDevicesSummaryIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.devices.summary.index.$get(undefined, options))
}

export async function getEndpointsFleetConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.fleet.connectors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.fleet.connectors.index.$get(args, options))
}

export async function postEndpointsFleetConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.fleet.connectors.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.fleet.connectors.index.$post(args, options))
}

export async function getEndpointsFleetConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.fleet.connectors)[':connector_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.fleet.connectors[':connector_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsFleetConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.fleet.connectors)[':connector_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.fleet.connectors[':connector_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsFleetConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.fleet.connectors)[':connector_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.fleet.connectors[':connector_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsFleetConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.fleet.connectors)[':connector_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.fleet.connectors[':connector_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsFleetConnectorsConnectorUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.fleet.connectors)[':connector_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.fleet.connectors[':connector_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsGoogleChromeConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.google_chrome.connectors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.google_chrome.connectors.index.$get(args, options))
}

export async function postEndpointsGoogleChromeConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.google_chrome.connectors.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.google_chrome.connectors.index.$post(args, options))
}

export async function getEndpointsGoogleChromeConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.google_chrome.connectors)[':connector_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.google_chrome.connectors[':connector_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsGoogleChromeConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.google_chrome.connectors)[':connector_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.google_chrome.connectors[':connector_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsGoogleChromeConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.google_chrome.connectors)[':connector_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.google_chrome.connectors[':connector_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsGoogleChromeConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.google_chrome.connectors)[':connector_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.google_chrome.connectors[':connector_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsGoogleChromeConnectorsConnectorUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.google_chrome.connectors)[':connector_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.google_chrome.connectors[':connector_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEndpointsMicrosoftIntuneConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.microsoft_intune.connectors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.microsoft_intune.connectors.index.$get(args, options))
}

export async function postEndpointsMicrosoftIntuneConnectorsIndex(
  args: InferRequestType<typeof client.endpoints.microsoft_intune.connectors.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors.index.$post(args, options),
  )
}

export async function getEndpointsMicrosoftIntuneConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.microsoft_intune.connectors)[':connector_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors[':connector_uuid'].index.$get(args, options),
  )
}

export async function putEndpointsMicrosoftIntuneConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.microsoft_intune.connectors)[':connector_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors[':connector_uuid'].index.$put(args, options),
  )
}

export async function deleteEndpointsMicrosoftIntuneConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.microsoft_intune.connectors)[':connector_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors[':connector_uuid'].index.$delete(args, options),
  )
}

export async function patchEndpointsMicrosoftIntuneConnectorsConnectorUuidIndex(
  args: InferRequestType<
    (typeof client.endpoints.microsoft_intune.connectors)[':connector_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors[':connector_uuid'].index.$patch(args, options),
  )
}

export async function getEndpointsMicrosoftIntuneConnectorsConnectorUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.endpoints.microsoft_intune.connectors)[':connector_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints.microsoft_intune.connectors[':connector_uuid'].used_by.index.$get(
      args,
      options,
    ),
  )
}

export async function getEnterpriseLicenseIndex(
  args: InferRequestType<typeof client.enterprise.license.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license.index.$get(args, options))
}

export async function postEnterpriseLicenseIndex(
  args: InferRequestType<typeof client.enterprise.license.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license.index.$post(args, options))
}

export async function getEnterpriseLicenseLicenseUuidIndex(
  args: InferRequestType<(typeof client.enterprise.license)[':license_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license[':license_uuid'].index.$get(args, options))
}

export async function putEnterpriseLicenseLicenseUuidIndex(
  args: InferRequestType<(typeof client.enterprise.license)[':license_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license[':license_uuid'].index.$put(args, options))
}

export async function deleteEnterpriseLicenseLicenseUuidIndex(
  args: InferRequestType<(typeof client.enterprise.license)[':license_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise.license[':license_uuid'].index.$delete(args, options),
  )
}

export async function patchEnterpriseLicenseLicenseUuidIndex(
  args: InferRequestType<(typeof client.enterprise.license)[':license_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license[':license_uuid'].index.$patch(args, options))
}

export async function getEnterpriseLicenseLicenseUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.enterprise.license)[':license_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise.license[':license_uuid'].used_by.index.$get(args, options),
  )
}

export async function getEnterpriseLicenseInstallIdIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.enterprise.license.install_id.index.$get(undefined, options))
}

export async function getEnterpriseLicenseSummaryIndex(
  args: InferRequestType<typeof client.enterprise.license.summary.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license.summary.index.$get(args, options))
}

export async function getEnterpriseLicenseUserCountsIndex(
  args: InferRequestType<typeof client.enterprise.license.user_counts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.license.user_counts.index.$get(args, options))
}

export async function getEventsEventsIndex(
  args: InferRequestType<typeof client.events.events.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.index.$get(args, options))
}

export async function postEventsEventsIndex(
  args: InferRequestType<typeof client.events.events.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.index.$post(args, options))
}

export async function getEventsEventsEventUuidIndex(
  args: InferRequestType<(typeof client.events.events)[':event_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events[':event_uuid'].index.$get(args, options))
}

export async function putEventsEventsEventUuidIndex(
  args: InferRequestType<(typeof client.events.events)[':event_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events[':event_uuid'].index.$put(args, options))
}

export async function deleteEventsEventsEventUuidIndex(
  args: InferRequestType<(typeof client.events.events)[':event_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events[':event_uuid'].index.$delete(args, options))
}

export async function patchEventsEventsEventUuidIndex(
  args: InferRequestType<(typeof client.events.events)[':event_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events[':event_uuid'].index.$patch(args, options))
}

export async function getEventsEventsActionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.events.events.actions.index.$get(undefined, options))
}

export async function postEventsEventsExportIndex(
  args: InferRequestType<typeof client.events.events.export.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.export.index.$post(args, options))
}

export async function getEventsEventsStatsIndex(
  args: InferRequestType<typeof client.events.events.stats.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.stats.index.$get(args, options))
}

export async function getEventsEventsTopPerUserIndex(
  args: InferRequestType<typeof client.events.events.top_per_user.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.top_per_user.index.$get(args, options))
}

export async function getEventsEventsVolumeIndex(
  args: InferRequestType<typeof client.events.events.volume.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.events.volume.index.$get(args, options))
}

export async function getEventsNotificationsIndex(
  args: InferRequestType<typeof client.events.notifications.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications.index.$get(args, options))
}

export async function getEventsNotificationsUuidIndex(
  args: InferRequestType<(typeof client.events.notifications)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications[':uuid'].index.$get(args, options))
}

export async function putEventsNotificationsUuidIndex(
  args: InferRequestType<(typeof client.events.notifications)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications[':uuid'].index.$put(args, options))
}

export async function deleteEventsNotificationsUuidIndex(
  args: InferRequestType<(typeof client.events.notifications)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications[':uuid'].index.$delete(args, options))
}

export async function patchEventsNotificationsUuidIndex(
  args: InferRequestType<(typeof client.events.notifications)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications[':uuid'].index.$patch(args, options))
}

export async function getEventsNotificationsUuidUsedByIndex(
  args: InferRequestType<(typeof client.events.notifications)[':uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.notifications[':uuid'].used_by.index.$get(args, options))
}

export async function postEventsNotificationsMarkAllSeenIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.events.notifications.mark_all_seen.index.$post(undefined, options),
  )
}

export async function getEventsRulesIndex(
  args: InferRequestType<typeof client.events.rules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules.index.$get(args, options))
}

export async function postEventsRulesIndex(
  args: InferRequestType<typeof client.events.rules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules.index.$post(args, options))
}

export async function getEventsRulesPbmUuidIndex(
  args: InferRequestType<(typeof client.events.rules)[':pbm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules[':pbm_uuid'].index.$get(args, options))
}

export async function putEventsRulesPbmUuidIndex(
  args: InferRequestType<(typeof client.events.rules)[':pbm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules[':pbm_uuid'].index.$put(args, options))
}

export async function deleteEventsRulesPbmUuidIndex(
  args: InferRequestType<(typeof client.events.rules)[':pbm_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules[':pbm_uuid'].index.$delete(args, options))
}

export async function patchEventsRulesPbmUuidIndex(
  args: InferRequestType<(typeof client.events.rules)[':pbm_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules[':pbm_uuid'].index.$patch(args, options))
}

export async function getEventsRulesPbmUuidUsedByIndex(
  args: InferRequestType<(typeof client.events.rules)[':pbm_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.rules[':pbm_uuid'].used_by.index.$get(args, options))
}

export async function getEventsTransportsIndex(
  args: InferRequestType<typeof client.events.transports.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports.index.$get(args, options))
}

export async function postEventsTransportsIndex(
  args: InferRequestType<typeof client.events.transports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports.index.$post(args, options))
}

export async function getEventsTransportsUuidIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].index.$get(args, options))
}

export async function putEventsTransportsUuidIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].index.$put(args, options))
}

export async function deleteEventsTransportsUuidIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].index.$delete(args, options))
}

export async function patchEventsTransportsUuidIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].index.$patch(args, options))
}

export async function postEventsTransportsUuidTestIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['test']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].test.index.$post(args, options))
}

export async function getEventsTransportsUuidUsedByIndex(
  args: InferRequestType<(typeof client.events.transports)[':uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.transports[':uuid'].used_by.index.$get(args, options))
}

export async function getFlowsBindingsIndex(
  args: InferRequestType<typeof client.flows.bindings.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings.index.$get(args, options))
}

export async function postFlowsBindingsIndex(
  args: InferRequestType<typeof client.flows.bindings.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings.index.$post(args, options))
}

export async function getFlowsBindingsFsbUuidIndex(
  args: InferRequestType<(typeof client.flows.bindings)[':fsb_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings[':fsb_uuid'].index.$get(args, options))
}

export async function putFlowsBindingsFsbUuidIndex(
  args: InferRequestType<(typeof client.flows.bindings)[':fsb_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings[':fsb_uuid'].index.$put(args, options))
}

export async function deleteFlowsBindingsFsbUuidIndex(
  args: InferRequestType<(typeof client.flows.bindings)[':fsb_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings[':fsb_uuid'].index.$delete(args, options))
}

export async function patchFlowsBindingsFsbUuidIndex(
  args: InferRequestType<(typeof client.flows.bindings)[':fsb_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings[':fsb_uuid'].index.$patch(args, options))
}

export async function getFlowsBindingsFsbUuidUsedByIndex(
  args: InferRequestType<(typeof client.flows.bindings)[':fsb_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.bindings[':fsb_uuid'].used_by.index.$get(args, options))
}

export async function getFlowsExecutorFlowSlugIndex(
  args: InferRequestType<(typeof client.flows.executor)[':flow_slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.executor[':flow_slug'].index.$get(args, options))
}

export async function postFlowsExecutorFlowSlugIndex(
  args: InferRequestType<(typeof client.flows.executor)[':flow_slug']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.executor[':flow_slug'].index.$post(args, options))
}

export async function getFlowsInspectorFlowSlugIndex(
  args: InferRequestType<(typeof client.flows.inspector)[':flow_slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.inspector[':flow_slug'].index.$get(args, options))
}

export async function getFlowsInstancesIndex(
  args: InferRequestType<typeof client.flows.instances.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances.index.$get(args, options))
}

export async function postFlowsInstancesIndex(
  args: InferRequestType<typeof client.flows.instances.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances.index.$post(args, options))
}

export async function getFlowsInstancesSlugIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].index.$get(args, options))
}

export async function putFlowsInstancesSlugIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].index.$put(args, options))
}

export async function deleteFlowsInstancesSlugIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].index.$delete(args, options))
}

export async function patchFlowsInstancesSlugIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].index.$patch(args, options))
}

export async function getFlowsInstancesSlugDiagramIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['diagram']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].diagram.index.$get(args, options))
}

export async function getFlowsInstancesSlugExecuteIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['execute']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].execute.index.$get(args, options))
}

export async function getFlowsInstancesSlugExportIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['export']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].export.index.$get(args, options))
}

export async function getFlowsInstancesSlugUsedByIndex(
  args: InferRequestType<(typeof client.flows.instances)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.instances[':slug'].used_by.index.$get(args, options))
}

export async function postFlowsInstancesCacheClearIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.flows.instances.cache_clear.index.$post(undefined, options))
}

export async function getFlowsInstancesCacheInfoIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.flows.instances.cache_info.index.$get(undefined, options))
}

export async function postLifecycleIterationsIndex(
  args: InferRequestType<typeof client.lifecycle.iterations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.iterations.index.$post(args, options))
}

export async function getLifecycleIterationsLatestContentTypeObjectIdIndex(
  args: InferRequestType<
    (typeof client.lifecycle.iterations.latest)[':content_type'][':object_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.iterations.latest[':content_type'][':object_id'].index.$get(args, options),
  )
}

export async function getLifecycleIterationsOpenIndex(
  args: InferRequestType<typeof client.lifecycle.iterations.open.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.iterations.open.index.$get(args, options))
}

export async function postLifecycleReviewsIndex(
  args: InferRequestType<typeof client.lifecycle.reviews.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.reviews.index.$post(args, options))
}

export async function getLifecycleRulesIndex(
  args: InferRequestType<typeof client.lifecycle.rules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules.index.$get(args, options))
}

export async function postLifecycleRulesIndex(
  args: InferRequestType<typeof client.lifecycle.rules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules.index.$post(args, options))
}

export async function getLifecycleRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.rules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules[':id'].index.$get(args, options))
}

export async function putLifecycleRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.rules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules[':id'].index.$put(args, options))
}

export async function deleteLifecycleRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.rules)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules[':id'].index.$delete(args, options))
}

export async function patchLifecycleRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.rules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.rules[':id'].index.$patch(args, options))
}

export async function getLifecycleUserExpirationRulesIndex(
  args: InferRequestType<typeof client.lifecycle.user_expiration_rules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_expiration_rules.index.$get(args, options))
}

export async function postLifecycleUserExpirationRulesIndex(
  args: InferRequestType<typeof client.lifecycle.user_expiration_rules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_expiration_rules.index.$post(args, options))
}

export async function getLifecycleUserExpirationRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.user_expiration_rules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].index.$get(args, options),
  )
}

export async function putLifecycleUserExpirationRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.user_expiration_rules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].index.$put(args, options),
  )
}

export async function deleteLifecycleUserExpirationRulesIdIndex(
  args: InferRequestType<
    (typeof client.lifecycle.user_expiration_rules)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].index.$delete(args, options),
  )
}

export async function patchLifecycleUserExpirationRulesIdIndex(
  args: InferRequestType<(typeof client.lifecycle.user_expiration_rules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].index.$patch(args, options),
  )
}

export async function getLifecycleUserExpirationRulesIdPreviewIndex(
  args: InferRequestType<
    (typeof client.lifecycle.user_expiration_rules)[':id']['preview']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].preview.index.$get(args, options),
  )
}

export async function postLifecycleUserExpirationRulesIdPreviewIndex(
  args: InferRequestType<
    (typeof client.lifecycle.user_expiration_rules)[':id']['preview']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].preview.index.$post(args, options),
  )
}

export async function getLifecycleUserExpirationRulesIdUsedByIndex(
  args: InferRequestType<
    (typeof client.lifecycle.user_expiration_rules)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lifecycle.user_expiration_rules[':id'].used_by.index.$get(args, options),
  )
}

export async function getLifecycleUserOffboardingIndex(
  args: InferRequestType<typeof client.lifecycle.user_offboarding.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_offboarding.index.$get(args, options))
}

export async function postLifecycleUserOffboardingIndex(
  args: InferRequestType<typeof client.lifecycle.user_offboarding.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_offboarding.index.$post(args, options))
}

export async function getLifecycleUserOffboardingIdIndex(
  args: InferRequestType<(typeof client.lifecycle.user_offboarding)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_offboarding[':id'].index.$get(args, options))
}

export async function deleteLifecycleUserOffboardingIdIndex(
  args: InferRequestType<(typeof client.lifecycle.user_offboarding)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle.user_offboarding[':id'].index.$delete(args, options))
}

export async function getManagedBlueprintsIndex(
  args: InferRequestType<typeof client.managed.blueprints.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints.index.$get(args, options))
}

export async function postManagedBlueprintsIndex(
  args: InferRequestType<typeof client.managed.blueprints.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints.index.$post(args, options))
}

export async function getManagedBlueprintsInstanceUuidIndex(
  args: InferRequestType<(typeof client.managed.blueprints)[':instance_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints[':instance_uuid'].index.$get(args, options))
}

export async function putManagedBlueprintsInstanceUuidIndex(
  args: InferRequestType<(typeof client.managed.blueprints)[':instance_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints[':instance_uuid'].index.$put(args, options))
}

export async function deleteManagedBlueprintsInstanceUuidIndex(
  args: InferRequestType<(typeof client.managed.blueprints)[':instance_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.blueprints[':instance_uuid'].index.$delete(args, options),
  )
}

export async function patchManagedBlueprintsInstanceUuidIndex(
  args: InferRequestType<(typeof client.managed.blueprints)[':instance_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.blueprints[':instance_uuid'].index.$patch(args, options),
  )
}

export async function postManagedBlueprintsInstanceUuidApplyIndex(
  args: InferRequestType<
    (typeof client.managed.blueprints)[':instance_uuid']['apply']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.blueprints[':instance_uuid'].apply.index.$post(args, options),
  )
}

export async function getManagedBlueprintsInstanceUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.managed.blueprints)[':instance_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.blueprints[':instance_uuid'].used_by.index.$get(args, options),
  )
}

export async function getManagedBlueprintsAvailableIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.managed.blueprints.available.index.$get(undefined, options))
}

export async function postManagedBlueprintsImportIndex(
  args: InferRequestType<typeof client.managed.blueprints.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints.import.index.$post(args, options))
}

export async function postManagedBlueprintsValidateIndex(
  args: InferRequestType<typeof client.managed.blueprints.validate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.blueprints.validate.index.$post(args, options))
}

export async function getOauth2AccessTokensIndex(
  args: InferRequestType<typeof client.oauth2.access_tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.access_tokens.index.$get(args, options))
}

export async function getOauth2AccessTokensIdIndex(
  args: InferRequestType<(typeof client.oauth2.access_tokens)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.access_tokens[':id'].index.$get(args, options))
}

export async function deleteOauth2AccessTokensIdIndex(
  args: InferRequestType<(typeof client.oauth2.access_tokens)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.access_tokens[':id'].index.$delete(args, options))
}

export async function getOauth2AccessTokensIdUsedByIndex(
  args: InferRequestType<(typeof client.oauth2.access_tokens)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.access_tokens[':id'].used_by.index.$get(args, options))
}

export async function getOauth2AuthorizationCodesIndex(
  args: InferRequestType<typeof client.oauth2.authorization_codes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.authorization_codes.index.$get(args, options))
}

export async function getOauth2AuthorizationCodesIdIndex(
  args: InferRequestType<(typeof client.oauth2.authorization_codes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.authorization_codes[':id'].index.$get(args, options))
}

export async function deleteOauth2AuthorizationCodesIdIndex(
  args: InferRequestType<(typeof client.oauth2.authorization_codes)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.authorization_codes[':id'].index.$delete(args, options))
}

export async function getOauth2AuthorizationCodesIdUsedByIndex(
  args: InferRequestType<
    (typeof client.oauth2.authorization_codes)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth2.authorization_codes[':id'].used_by.index.$get(args, options),
  )
}

export async function getOauth2RefreshTokensIndex(
  args: InferRequestType<typeof client.oauth2.refresh_tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.refresh_tokens.index.$get(args, options))
}

export async function getOauth2RefreshTokensIdIndex(
  args: InferRequestType<(typeof client.oauth2.refresh_tokens)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.refresh_tokens[':id'].index.$get(args, options))
}

export async function deleteOauth2RefreshTokensIdIndex(
  args: InferRequestType<(typeof client.oauth2.refresh_tokens)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.refresh_tokens[':id'].index.$delete(args, options))
}

export async function getOauth2RefreshTokensIdUsedByIndex(
  args: InferRequestType<(typeof client.oauth2.refresh_tokens)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.refresh_tokens[':id'].used_by.index.$get(args, options))
}

export async function getOutpostsInstancesIndex(
  args: InferRequestType<typeof client.outposts.instances.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances.index.$get(args, options))
}

export async function postOutpostsInstancesIndex(
  args: InferRequestType<typeof client.outposts.instances.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances.index.$post(args, options))
}

export async function getOutpostsInstancesUuidIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].index.$get(args, options))
}

export async function putOutpostsInstancesUuidIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].index.$put(args, options))
}

export async function deleteOutpostsInstancesUuidIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].index.$delete(args, options))
}

export async function patchOutpostsInstancesUuidIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].index.$patch(args, options))
}

export async function getOutpostsInstancesUuidHealthIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['health']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].health.index.$get(args, options))
}

export async function postOutpostsInstancesUuidRebuildPermissionsIndex(
  args: InferRequestType<
    (typeof client.outposts.instances)[':uuid']['rebuild_permissions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.instances[':uuid'].rebuild_permissions.index.$post(args, options),
  )
}

export async function getOutpostsInstancesUuidUsedByIndex(
  args: InferRequestType<(typeof client.outposts.instances)[':uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.instances[':uuid'].used_by.index.$get(args, options))
}

export async function getOutpostsInstancesDefaultSettingsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.outposts.instances.default_settings.index.$get(undefined, options),
  )
}

export async function getOutpostsLdapIndex(
  args: InferRequestType<typeof client.outposts.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.ldap.index.$get(args, options))
}

export async function getOutpostsLdapIdCheckAccessIndex(
  args: InferRequestType<(typeof client.outposts.ldap)[':id']['check_access']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.ldap[':id'].check_access.index.$get(args, options))
}

export async function getOutpostsProxyIndex(
  args: InferRequestType<typeof client.outposts.proxy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.proxy.index.$get(args, options))
}

export async function getOutpostsRadiusIndex(
  args: InferRequestType<typeof client.outposts.radius.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.radius.index.$get(args, options))
}

export async function getOutpostsRadiusIdCheckAccessIndex(
  args: InferRequestType<(typeof client.outposts.radius)[':id']['check_access']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.radius[':id'].check_access.index.$get(args, options))
}

export async function getOutpostsServiceConnectionsAllIndex(
  args: InferRequestType<typeof client.outposts.service_connections.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.service_connections.all.index.$get(args, options))
}

export async function getOutpostsServiceConnectionsAllUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.all)[':uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.all[':uuid'].index.$get(args, options),
  )
}

export async function deleteOutpostsServiceConnectionsAllUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.all)[':uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.all[':uuid'].index.$delete(args, options),
  )
}

export async function getOutpostsServiceConnectionsAllUuidStateIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.all)[':uuid']['state']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.all[':uuid'].state.index.$get(args, options),
  )
}

export async function getOutpostsServiceConnectionsAllUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.all)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.all[':uuid'].used_by.index.$get(args, options),
  )
}

export async function getOutpostsServiceConnectionsAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.outposts.service_connections.all.types.index.$get(undefined, options),
  )
}

export async function getOutpostsServiceConnectionsDockerIndex(
  args: InferRequestType<typeof client.outposts.service_connections.docker.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.service_connections.docker.index.$get(args, options))
}

export async function postOutpostsServiceConnectionsDockerIndex(
  args: InferRequestType<typeof client.outposts.service_connections.docker.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.service_connections.docker.index.$post(args, options))
}

export async function getOutpostsServiceConnectionsDockerUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.docker)[':uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.docker[':uuid'].index.$get(args, options),
  )
}

export async function putOutpostsServiceConnectionsDockerUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.docker)[':uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.docker[':uuid'].index.$put(args, options),
  )
}

export async function deleteOutpostsServiceConnectionsDockerUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.docker)[':uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.docker[':uuid'].index.$delete(args, options),
  )
}

export async function patchOutpostsServiceConnectionsDockerUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.docker)[':uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.docker[':uuid'].index.$patch(args, options),
  )
}

export async function getOutpostsServiceConnectionsDockerUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.docker)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.docker[':uuid'].used_by.index.$get(args, options),
  )
}

export async function getOutpostsServiceConnectionsKubernetesIndex(
  args: InferRequestType<typeof client.outposts.service_connections.kubernetes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes.index.$get(args, options),
  )
}

export async function postOutpostsServiceConnectionsKubernetesIndex(
  args: InferRequestType<typeof client.outposts.service_connections.kubernetes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes.index.$post(args, options),
  )
}

export async function getOutpostsServiceConnectionsKubernetesUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.kubernetes)[':uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes[':uuid'].index.$get(args, options),
  )
}

export async function putOutpostsServiceConnectionsKubernetesUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.kubernetes)[':uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes[':uuid'].index.$put(args, options),
  )
}

export async function deleteOutpostsServiceConnectionsKubernetesUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.kubernetes)[':uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes[':uuid'].index.$delete(args, options),
  )
}

export async function patchOutpostsServiceConnectionsKubernetesUuidIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.kubernetes)[':uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes[':uuid'].index.$patch(args, options),
  )
}

export async function getOutpostsServiceConnectionsKubernetesUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.outposts.service_connections.kubernetes)[':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.outposts.service_connections.kubernetes[':uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesAllIndex(
  args: InferRequestType<typeof client.policies.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.all.index.$get(args, options))
}

export async function getPoliciesAllPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.all)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.all[':policy_uuid'].index.$get(args, options))
}

export async function deletePoliciesAllPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.all)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.all[':policy_uuid'].index.$delete(args, options))
}

export async function postPoliciesAllPolicyUuidTestIndex(
  args: InferRequestType<(typeof client.policies.all)[':policy_uuid']['test']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.all[':policy_uuid'].test.index.$post(args, options))
}

export async function getPoliciesAllPolicyUuidUsedByIndex(
  args: InferRequestType<(typeof client.policies.all)[':policy_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.all[':policy_uuid'].used_by.index.$get(args, options))
}

export async function postPoliciesAllCacheClearIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.policies.all.cache_clear.index.$post(undefined, options))
}

export async function getPoliciesAllCacheInfoIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.policies.all.cache_info.index.$get(undefined, options))
}

export async function getPoliciesAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.policies.all.types.index.$get(undefined, options))
}

export async function getPoliciesBindingsIndex(
  args: InferRequestType<typeof client.policies.bindings.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.bindings.index.$get(args, options))
}

export async function postPoliciesBindingsIndex(
  args: InferRequestType<typeof client.policies.bindings.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.bindings.index.$post(args, options))
}

export async function getPoliciesBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.policies.bindings)[':policy_binding_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.bindings[':policy_binding_uuid'].index.$get(args, options),
  )
}

export async function putPoliciesBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.policies.bindings)[':policy_binding_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.bindings[':policy_binding_uuid'].index.$put(args, options),
  )
}

export async function deletePoliciesBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.policies.bindings)[':policy_binding_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.bindings[':policy_binding_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesBindingsPolicyBindingUuidIndex(
  args: InferRequestType<
    (typeof client.policies.bindings)[':policy_binding_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.bindings[':policy_binding_uuid'].index.$patch(args, options),
  )
}

export async function getPoliciesBindingsPolicyBindingUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.bindings)[':policy_binding_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.bindings[':policy_binding_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesDummyIndex(
  args: InferRequestType<typeof client.policies.dummy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy.index.$get(args, options))
}

export async function postPoliciesDummyIndex(
  args: InferRequestType<typeof client.policies.dummy.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy.index.$post(args, options))
}

export async function getPoliciesDummyPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.dummy)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy[':policy_uuid'].index.$get(args, options))
}

export async function putPoliciesDummyPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.dummy)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy[':policy_uuid'].index.$put(args, options))
}

export async function deletePoliciesDummyPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.dummy)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy[':policy_uuid'].index.$delete(args, options))
}

export async function patchPoliciesDummyPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.dummy)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.dummy[':policy_uuid'].index.$patch(args, options))
}

export async function getPoliciesDummyPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.dummy)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.dummy[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesEventMatcherIndex(
  args: InferRequestType<typeof client.policies.event_matcher.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.event_matcher.index.$get(args, options))
}

export async function postPoliciesEventMatcherIndex(
  args: InferRequestType<typeof client.policies.event_matcher.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.event_matcher.index.$post(args, options))
}

export async function getPoliciesEventMatcherPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.event_matcher)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.event_matcher[':policy_uuid'].index.$get(args, options),
  )
}

export async function putPoliciesEventMatcherPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.event_matcher)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.event_matcher[':policy_uuid'].index.$put(args, options),
  )
}

export async function deletePoliciesEventMatcherPolicyUuidIndex(
  args: InferRequestType<
    (typeof client.policies.event_matcher)[':policy_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.event_matcher[':policy_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesEventMatcherPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.event_matcher)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.event_matcher[':policy_uuid'].index.$patch(args, options),
  )
}

export async function getPoliciesEventMatcherPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.event_matcher)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.event_matcher[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesExpressionIndex(
  args: InferRequestType<typeof client.policies.expression.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.expression.index.$get(args, options))
}

export async function postPoliciesExpressionIndex(
  args: InferRequestType<typeof client.policies.expression.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.expression.index.$post(args, options))
}

export async function getPoliciesExpressionPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.expression)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.expression[':policy_uuid'].index.$get(args, options))
}

export async function putPoliciesExpressionPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.expression)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.expression[':policy_uuid'].index.$put(args, options))
}

export async function deletePoliciesExpressionPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.expression)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.expression[':policy_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesExpressionPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.expression)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.expression[':policy_uuid'].index.$patch(args, options))
}

export async function getPoliciesExpressionPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.expression)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.expression[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesGeoipIndex(
  args: InferRequestType<typeof client.policies.geoip.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip.index.$get(args, options))
}

export async function postPoliciesGeoipIndex(
  args: InferRequestType<typeof client.policies.geoip.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip.index.$post(args, options))
}

export async function getPoliciesGeoipPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.geoip)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip[':policy_uuid'].index.$get(args, options))
}

export async function putPoliciesGeoipPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.geoip)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip[':policy_uuid'].index.$put(args, options))
}

export async function deletePoliciesGeoipPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.geoip)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip[':policy_uuid'].index.$delete(args, options))
}

export async function patchPoliciesGeoipPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.geoip)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.geoip[':policy_uuid'].index.$patch(args, options))
}

export async function getPoliciesGeoipPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.geoip)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.geoip[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesGeoipIso3166Index(options?: ClientRequestOptions) {
  return await parseResponse(client.policies.geoip_iso3166.index.$get(undefined, options))
}

export async function getPoliciesPasswordIndex(
  args: InferRequestType<typeof client.policies.password.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password.index.$get(args, options))
}

export async function postPoliciesPasswordIndex(
  args: InferRequestType<typeof client.policies.password.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password.index.$post(args, options))
}

export async function getPoliciesPasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password[':policy_uuid'].index.$get(args, options))
}

export async function putPoliciesPasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password[':policy_uuid'].index.$put(args, options))
}

export async function deletePoliciesPasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password[':policy_uuid'].index.$delete(args, options))
}

export async function patchPoliciesPasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password[':policy_uuid'].index.$patch(args, options))
}

export async function getPoliciesPasswordPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.password)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesPasswordExpiryIndex(
  args: InferRequestType<typeof client.policies.password_expiry.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password_expiry.index.$get(args, options))
}

export async function postPoliciesPasswordExpiryIndex(
  args: InferRequestType<typeof client.policies.password_expiry.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.password_expiry.index.$post(args, options))
}

export async function getPoliciesPasswordExpiryPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password_expiry)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password_expiry[':policy_uuid'].index.$get(args, options),
  )
}

export async function putPoliciesPasswordExpiryPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.password_expiry)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password_expiry[':policy_uuid'].index.$put(args, options),
  )
}

export async function deletePoliciesPasswordExpiryPolicyUuidIndex(
  args: InferRequestType<
    (typeof client.policies.password_expiry)[':policy_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password_expiry[':policy_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesPasswordExpiryPolicyUuidIndex(
  args: InferRequestType<
    (typeof client.policies.password_expiry)[':policy_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password_expiry[':policy_uuid'].index.$patch(args, options),
  )
}

export async function getPoliciesPasswordExpiryPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.password_expiry)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.password_expiry[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesReputationIndex(
  args: InferRequestType<typeof client.policies.reputation.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation.index.$get(args, options))
}

export async function postPoliciesReputationIndex(
  args: InferRequestType<typeof client.policies.reputation.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation.index.$post(args, options))
}

export async function getPoliciesReputationPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.reputation)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation[':policy_uuid'].index.$get(args, options))
}

export async function putPoliciesReputationPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.reputation)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation[':policy_uuid'].index.$put(args, options))
}

export async function deletePoliciesReputationPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.reputation)[':policy_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.reputation[':policy_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesReputationPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.reputation)[':policy_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation[':policy_uuid'].index.$patch(args, options))
}

export async function getPoliciesReputationPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.reputation)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.reputation[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesReputationScoresIndex(
  args: InferRequestType<typeof client.policies.reputation.scores.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.reputation.scores.index.$get(args, options))
}

export async function getPoliciesReputationScoresReputationUuidIndex(
  args: InferRequestType<
    (typeof client.policies.reputation.scores)[':reputation_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.reputation.scores[':reputation_uuid'].index.$get(args, options),
  )
}

export async function deletePoliciesReputationScoresReputationUuidIndex(
  args: InferRequestType<
    (typeof client.policies.reputation.scores)[':reputation_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.reputation.scores[':reputation_uuid'].index.$delete(args, options),
  )
}

export async function getPoliciesReputationScoresReputationUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.reputation.scores)[':reputation_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.reputation.scores[':reputation_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPoliciesUniquePasswordIndex(
  args: InferRequestType<typeof client.policies.unique_password.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.unique_password.index.$get(args, options))
}

export async function postPoliciesUniquePasswordIndex(
  args: InferRequestType<typeof client.policies.unique_password.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.unique_password.index.$post(args, options))
}

export async function getPoliciesUniquePasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.unique_password)[':policy_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.unique_password[':policy_uuid'].index.$get(args, options),
  )
}

export async function putPoliciesUniquePasswordPolicyUuidIndex(
  args: InferRequestType<(typeof client.policies.unique_password)[':policy_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.unique_password[':policy_uuid'].index.$put(args, options),
  )
}

export async function deletePoliciesUniquePasswordPolicyUuidIndex(
  args: InferRequestType<
    (typeof client.policies.unique_password)[':policy_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.unique_password[':policy_uuid'].index.$delete(args, options),
  )
}

export async function patchPoliciesUniquePasswordPolicyUuidIndex(
  args: InferRequestType<
    (typeof client.policies.unique_password)[':policy_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.unique_password[':policy_uuid'].index.$patch(args, options),
  )
}

export async function getPoliciesUniquePasswordPolicyUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.policies.unique_password)[':policy_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies.unique_password[':policy_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsAllIndex(
  args: InferRequestType<typeof client.propertymappings.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.all.index.$get(args, options))
}

export async function getPropertymappingsAllPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.all)[':pm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.all[':pm_uuid'].index.$get(args, options))
}

export async function deletePropertymappingsAllPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.all)[':pm_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.all[':pm_uuid'].index.$delete(args, options))
}

export async function postPropertymappingsAllPmUuidTestIndex(
  args: InferRequestType<
    (typeof client.propertymappings.all)[':pm_uuid']['test']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.all[':pm_uuid'].test.index.$post(args, options),
  )
}

export async function getPropertymappingsAllPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.all)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.all[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.propertymappings.all.types.index.$get(undefined, options))
}

export async function getPropertymappingsNotificationIndex(
  args: InferRequestType<typeof client.propertymappings.notification.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.notification.index.$get(args, options))
}

export async function postPropertymappingsNotificationIndex(
  args: InferRequestType<typeof client.propertymappings.notification.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.notification.index.$post(args, options))
}

export async function getPropertymappingsNotificationPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.notification)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.notification[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsNotificationPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.notification)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.notification[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsNotificationPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.notification)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.notification[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsNotificationPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.notification)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.notification[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsNotificationPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.notification)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.notification[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderGoogleWorkspaceIndex(
  args: InferRequestType<typeof client.propertymappings.provider.google_workspace.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace.index.$get(args, options),
  )
}

export async function postPropertymappingsProviderGoogleWorkspaceIndex(
  args: InferRequestType<typeof client.propertymappings.provider.google_workspace.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace.index.$post(args, options),
  )
}

export async function getPropertymappingsProviderGoogleWorkspacePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.google_workspace)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderGoogleWorkspacePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.google_workspace)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderGoogleWorkspacePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.google_workspace)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderGoogleWorkspacePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.google_workspace)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderGoogleWorkspacePmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.google_workspace)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.google_workspace[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderMicrosoftEntraIndex(
  args: InferRequestType<typeof client.propertymappings.provider.microsoft_entra.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra.index.$get(args, options),
  )
}

export async function postPropertymappingsProviderMicrosoftEntraIndex(
  args: InferRequestType<typeof client.propertymappings.provider.microsoft_entra.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra.index.$post(args, options),
  )
}

export async function getPropertymappingsProviderMicrosoftEntraPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.microsoft_entra)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderMicrosoftEntraPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.microsoft_entra)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderMicrosoftEntraPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.microsoft_entra)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderMicrosoftEntraPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.microsoft_entra)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderMicrosoftEntraPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.microsoft_entra)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.microsoft_entra[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderRacIndex(
  args: InferRequestType<typeof client.propertymappings.provider.rac.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.rac.index.$get(args, options))
}

export async function postPropertymappingsProviderRacIndex(
  args: InferRequestType<typeof client.propertymappings.provider.rac.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.rac.index.$post(args, options))
}

export async function getPropertymappingsProviderRacPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.rac)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.rac[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderRacPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.rac)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.rac[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderRacPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.rac)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.rac[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderRacPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.rac)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.rac[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderRacPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.rac)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.rac[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderRadiusIndex(
  args: InferRequestType<typeof client.propertymappings.provider.radius.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.radius.index.$get(args, options))
}

export async function postPropertymappingsProviderRadiusIndex(
  args: InferRequestType<typeof client.propertymappings.provider.radius.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.radius.index.$post(args, options))
}

export async function getPropertymappingsProviderRadiusPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.radius)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.radius[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderRadiusPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.radius)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.radius[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderRadiusPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.radius)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.radius[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderRadiusPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.radius)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.radius[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderRadiusPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.radius)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.radius[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderSamlIndex(
  args: InferRequestType<typeof client.propertymappings.provider.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.saml.index.$get(args, options))
}

export async function postPropertymappingsProviderSamlIndex(
  args: InferRequestType<typeof client.propertymappings.provider.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.saml.index.$post(args, options))
}

export async function getPropertymappingsProviderSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.saml)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.saml[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.saml)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.saml[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.saml)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.saml[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.saml)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.saml[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderSamlPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.saml)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.saml[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderScimIndex(
  args: InferRequestType<typeof client.propertymappings.provider.scim.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.scim.index.$get(args, options))
}

export async function postPropertymappingsProviderScimIndex(
  args: InferRequestType<typeof client.propertymappings.provider.scim.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.scim.index.$post(args, options))
}

export async function getPropertymappingsProviderScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scim)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scim[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scim)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scim[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scim)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scim[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scim)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scim[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderScimPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scim)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scim[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsProviderScopeIndex(
  args: InferRequestType<typeof client.propertymappings.provider.scope.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.scope.index.$get(args, options))
}

export async function postPropertymappingsProviderScopeIndex(
  args: InferRequestType<typeof client.propertymappings.provider.scope.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.provider.scope.index.$post(args, options))
}

export async function getPropertymappingsProviderScopePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scope)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scope[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsProviderScopePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scope)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scope[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsProviderScopePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scope)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scope[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsProviderScopePmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scope)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scope[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsProviderScopePmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.provider.scope)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.provider.scope[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceKerberosIndex(
  args: InferRequestType<typeof client.propertymappings.source.kerberos.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.kerberos.index.$get(args, options))
}

export async function postPropertymappingsSourceKerberosIndex(
  args: InferRequestType<typeof client.propertymappings.source.kerberos.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.kerberos.index.$post(args, options))
}

export async function getPropertymappingsSourceKerberosPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.kerberos)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.kerberos[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceKerberosPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.kerberos)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.kerberos[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceKerberosPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.kerberos)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.kerberos[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceKerberosPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.kerberos)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.kerberos[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceKerberosPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.kerberos)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.kerberos[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceLdapIndex(
  args: InferRequestType<typeof client.propertymappings.source.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.ldap.index.$get(args, options))
}

export async function postPropertymappingsSourceLdapIndex(
  args: InferRequestType<typeof client.propertymappings.source.ldap.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.ldap.index.$post(args, options))
}

export async function getPropertymappingsSourceLdapPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.ldap)[':pm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.ldap[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceLdapPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.ldap)[':pm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.ldap[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceLdapPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.ldap)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.ldap[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceLdapPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.ldap)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.ldap[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceLdapPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.ldap)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.ldap[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceOauthIndex(
  args: InferRequestType<typeof client.propertymappings.source.oauth.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.oauth.index.$get(args, options))
}

export async function postPropertymappingsSourceOauthIndex(
  args: InferRequestType<typeof client.propertymappings.source.oauth.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.oauth.index.$post(args, options))
}

export async function getPropertymappingsSourceOauthPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.oauth)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.oauth[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceOauthPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.oauth)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.oauth[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceOauthPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.oauth)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.oauth[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceOauthPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.oauth)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.oauth[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceOauthPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.oauth)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.oauth[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourcePlexIndex(
  args: InferRequestType<typeof client.propertymappings.source.plex.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.plex.index.$get(args, options))
}

export async function postPropertymappingsSourcePlexIndex(
  args: InferRequestType<typeof client.propertymappings.source.plex.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.plex.index.$post(args, options))
}

export async function getPropertymappingsSourcePlexPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.plex)[':pm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.plex[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourcePlexPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.plex)[':pm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.plex[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourcePlexPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.plex)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.plex[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourcePlexPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.plex)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.plex[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourcePlexPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.plex)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.plex[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceSamlIndex(
  args: InferRequestType<typeof client.propertymappings.source.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.saml.index.$get(args, options))
}

export async function postPropertymappingsSourceSamlIndex(
  args: InferRequestType<typeof client.propertymappings.source.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.saml.index.$post(args, options))
}

export async function getPropertymappingsSourceSamlPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.saml)[':pm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.saml[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceSamlPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.saml)[':pm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.saml[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.saml)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.saml[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceSamlPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.saml)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.saml[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceSamlPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.saml)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.saml[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceScimIndex(
  args: InferRequestType<typeof client.propertymappings.source.scim.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.scim.index.$get(args, options))
}

export async function postPropertymappingsSourceScimIndex(
  args: InferRequestType<typeof client.propertymappings.source.scim.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.scim.index.$post(args, options))
}

export async function getPropertymappingsSourceScimPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.scim)[':pm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.scim[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceScimPmUuidIndex(
  args: InferRequestType<(typeof client.propertymappings.source.scim)[':pm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.scim[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.scim)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.scim[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceScimPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.scim)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.scim[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceScimPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.scim)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.scim[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getPropertymappingsSourceTelegramIndex(
  args: InferRequestType<typeof client.propertymappings.source.telegram.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.telegram.index.$get(args, options))
}

export async function postPropertymappingsSourceTelegramIndex(
  args: InferRequestType<typeof client.propertymappings.source.telegram.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.propertymappings.source.telegram.index.$post(args, options))
}

export async function getPropertymappingsSourceTelegramPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.telegram)[':pm_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.telegram[':pm_uuid'].index.$get(args, options),
  )
}

export async function putPropertymappingsSourceTelegramPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.telegram)[':pm_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.telegram[':pm_uuid'].index.$put(args, options),
  )
}

export async function deletePropertymappingsSourceTelegramPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.telegram)[':pm_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.telegram[':pm_uuid'].index.$delete(args, options),
  )
}

export async function patchPropertymappingsSourceTelegramPmUuidIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.telegram)[':pm_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.telegram[':pm_uuid'].index.$patch(args, options),
  )
}

export async function getPropertymappingsSourceTelegramPmUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.propertymappings.source.telegram)[':pm_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.propertymappings.source.telegram[':pm_uuid'].used_by.index.$get(args, options),
  )
}

export async function getProvidersAllIndex(
  args: InferRequestType<typeof client.providers.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.all.index.$get(args, options))
}

export async function getProvidersAllIdIndex(
  args: InferRequestType<(typeof client.providers.all)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.all[':id'].index.$get(args, options))
}

export async function deleteProvidersAllIdIndex(
  args: InferRequestType<(typeof client.providers.all)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.all[':id'].index.$delete(args, options))
}

export async function getProvidersAllIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.all)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.all[':id'].used_by.index.$get(args, options))
}

export async function getProvidersAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.providers.all.types.index.$get(undefined, options))
}

export async function getProvidersGoogleWorkspaceIndex(
  args: InferRequestType<typeof client.providers.google_workspace.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace.index.$get(args, options))
}

export async function postProvidersGoogleWorkspaceIndex(
  args: InferRequestType<typeof client.providers.google_workspace.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace.index.$post(args, options))
}

export async function getProvidersGoogleWorkspaceIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace[':id'].index.$get(args, options))
}

export async function putProvidersGoogleWorkspaceIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace[':id'].index.$put(args, options))
}

export async function deleteProvidersGoogleWorkspaceIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace[':id'].index.$delete(args, options))
}

export async function patchProvidersGoogleWorkspaceIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace[':id'].index.$patch(args, options))
}

export async function postProvidersGoogleWorkspaceIdSyncObjectIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace)[':id']['sync']['object']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace[':id'].sync.object.index.$post(args, options),
  )
}

export async function getProvidersGoogleWorkspaceIdSyncStatusIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace)[':id']['sync']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace[':id'].sync.status.index.$get(args, options),
  )
}

export async function getProvidersGoogleWorkspaceIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersGoogleWorkspaceGroupsIndex(
  args: InferRequestType<typeof client.providers.google_workspace_groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace_groups.index.$get(args, options))
}

export async function postProvidersGoogleWorkspaceGroupsIndex(
  args: InferRequestType<typeof client.providers.google_workspace_groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace_groups.index.$post(args, options))
}

export async function getProvidersGoogleWorkspaceGroupsIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace_groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_groups[':id'].index.$get(args, options),
  )
}

export async function deleteProvidersGoogleWorkspaceGroupsIdIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace_groups)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_groups[':id'].index.$delete(args, options),
  )
}

export async function getProvidersGoogleWorkspaceGroupsIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace_groups)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_groups[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersGoogleWorkspaceUsersIndex(
  args: InferRequestType<typeof client.providers.google_workspace_users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace_users.index.$get(args, options))
}

export async function postProvidersGoogleWorkspaceUsersIndex(
  args: InferRequestType<typeof client.providers.google_workspace_users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.google_workspace_users.index.$post(args, options))
}

export async function getProvidersGoogleWorkspaceUsersIdIndex(
  args: InferRequestType<(typeof client.providers.google_workspace_users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_users[':id'].index.$get(args, options),
  )
}

export async function deleteProvidersGoogleWorkspaceUsersIdIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace_users)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_users[':id'].index.$delete(args, options),
  )
}

export async function getProvidersGoogleWorkspaceUsersIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.google_workspace_users)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.google_workspace_users[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersLdapIndex(
  args: InferRequestType<typeof client.providers.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap.index.$get(args, options))
}

export async function postProvidersLdapIndex(
  args: InferRequestType<typeof client.providers.ldap.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap.index.$post(args, options))
}

export async function getProvidersLdapIdIndex(
  args: InferRequestType<(typeof client.providers.ldap)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap[':id'].index.$get(args, options))
}

export async function putProvidersLdapIdIndex(
  args: InferRequestType<(typeof client.providers.ldap)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap[':id'].index.$put(args, options))
}

export async function deleteProvidersLdapIdIndex(
  args: InferRequestType<(typeof client.providers.ldap)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap[':id'].index.$delete(args, options))
}

export async function patchProvidersLdapIdIndex(
  args: InferRequestType<(typeof client.providers.ldap)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap[':id'].index.$patch(args, options))
}

export async function getProvidersLdapIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.ldap)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ldap[':id'].used_by.index.$get(args, options))
}

export async function getProvidersMicrosoftEntraIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra.index.$get(args, options))
}

export async function postProvidersMicrosoftEntraIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra.index.$post(args, options))
}

export async function getProvidersMicrosoftEntraIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra[':id'].index.$get(args, options))
}

export async function putProvidersMicrosoftEntraIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra[':id'].index.$put(args, options))
}

export async function deleteProvidersMicrosoftEntraIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra[':id'].index.$delete(args, options))
}

export async function patchProvidersMicrosoftEntraIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra[':id'].index.$patch(args, options))
}

export async function postProvidersMicrosoftEntraIdSyncObjectIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra)[':id']['sync']['object']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra[':id'].sync.object.index.$post(args, options),
  )
}

export async function getProvidersMicrosoftEntraIdSyncStatusIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra)[':id']['sync']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra[':id'].sync.status.index.$get(args, options),
  )
}

export async function getProvidersMicrosoftEntraIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersMicrosoftEntraGroupsIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra_groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra_groups.index.$get(args, options))
}

export async function postProvidersMicrosoftEntraGroupsIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra_groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra_groups.index.$post(args, options))
}

export async function getProvidersMicrosoftEntraGroupsIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra_groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_groups[':id'].index.$get(args, options),
  )
}

export async function deleteProvidersMicrosoftEntraGroupsIdIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra_groups)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_groups[':id'].index.$delete(args, options),
  )
}

export async function getProvidersMicrosoftEntraGroupsIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra_groups)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_groups[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersMicrosoftEntraUsersIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra_users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra_users.index.$get(args, options))
}

export async function postProvidersMicrosoftEntraUsersIndex(
  args: InferRequestType<typeof client.providers.microsoft_entra_users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.microsoft_entra_users.index.$post(args, options))
}

export async function getProvidersMicrosoftEntraUsersIdIndex(
  args: InferRequestType<(typeof client.providers.microsoft_entra_users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_users[':id'].index.$get(args, options),
  )
}

export async function deleteProvidersMicrosoftEntraUsersIdIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra_users)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_users[':id'].index.$delete(args, options),
  )
}

export async function getProvidersMicrosoftEntraUsersIdUsedByIndex(
  args: InferRequestType<
    (typeof client.providers.microsoft_entra_users)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.microsoft_entra_users[':id'].used_by.index.$get(args, options),
  )
}

export async function getProvidersOauth2Index(
  args: InferRequestType<typeof client.providers.oauth2.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2.index.$get(args, options))
}

export async function postProvidersOauth2Index(
  args: InferRequestType<typeof client.providers.oauth2.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2.index.$post(args, options))
}

export async function getProvidersOauth2DcrIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers['oauth2-dcr'].index.$get(args, options))
}

export async function postProvidersOauth2DcrIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers['oauth2-dcr'].index.$post(args, options))
}

export async function getProvidersOauth2DcrPbmUuidIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr'][':pbm_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers['oauth2-dcr'][':pbm_uuid'].index.$get(args, options))
}

export async function putProvidersOauth2DcrPbmUuidIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr'][':pbm_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers['oauth2-dcr'][':pbm_uuid'].index.$put(args, options))
}

export async function deleteProvidersOauth2DcrPbmUuidIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr'][':pbm_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers['oauth2-dcr'][':pbm_uuid'].index.$delete(args, options),
  )
}

export async function patchProvidersOauth2DcrPbmUuidIndex(
  args: InferRequestType<(typeof client.providers)['oauth2-dcr'][':pbm_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers['oauth2-dcr'][':pbm_uuid'].index.$patch(args, options),
  )
}

export async function getProvidersOauth2IdIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].index.$get(args, options))
}

export async function putProvidersOauth2IdIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].index.$put(args, options))
}

export async function deleteProvidersOauth2IdIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].index.$delete(args, options))
}

export async function patchProvidersOauth2IdIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].index.$patch(args, options))
}

export async function getProvidersOauth2IdPreviewUserIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['preview_user']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].preview_user.index.$get(args, options))
}

export async function getProvidersOauth2IdSetupUrlsIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['setup_urls']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].setup_urls.index.$get(args, options))
}

export async function getProvidersOauth2IdUsedByIndex(
  args: InferRequestType<(typeof client.providers.oauth2)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.oauth2[':id'].used_by.index.$get(args, options))
}

export async function getProvidersProxyIndex(
  args: InferRequestType<typeof client.providers.proxy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy.index.$get(args, options))
}

export async function postProvidersProxyIndex(
  args: InferRequestType<typeof client.providers.proxy.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy.index.$post(args, options))
}

export async function getProvidersProxyIdIndex(
  args: InferRequestType<(typeof client.providers.proxy)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy[':id'].index.$get(args, options))
}

export async function putProvidersProxyIdIndex(
  args: InferRequestType<(typeof client.providers.proxy)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy[':id'].index.$put(args, options))
}

export async function deleteProvidersProxyIdIndex(
  args: InferRequestType<(typeof client.providers.proxy)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy[':id'].index.$delete(args, options))
}

export async function patchProvidersProxyIdIndex(
  args: InferRequestType<(typeof client.providers.proxy)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy[':id'].index.$patch(args, options))
}

export async function getProvidersProxyIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.proxy)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.proxy[':id'].used_by.index.$get(args, options))
}

export async function getProvidersRacIndex(
  args: InferRequestType<typeof client.providers.rac.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac.index.$get(args, options))
}

export async function postProvidersRacIndex(
  args: InferRequestType<typeof client.providers.rac.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac.index.$post(args, options))
}

export async function getProvidersRacIdIndex(
  args: InferRequestType<(typeof client.providers.rac)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac[':id'].index.$get(args, options))
}

export async function putProvidersRacIdIndex(
  args: InferRequestType<(typeof client.providers.rac)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac[':id'].index.$put(args, options))
}

export async function deleteProvidersRacIdIndex(
  args: InferRequestType<(typeof client.providers.rac)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac[':id'].index.$delete(args, options))
}

export async function patchProvidersRacIdIndex(
  args: InferRequestType<(typeof client.providers.rac)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac[':id'].index.$patch(args, options))
}

export async function getProvidersRacIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.rac)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.rac[':id'].used_by.index.$get(args, options))
}

export async function getProvidersRadiusIndex(
  args: InferRequestType<typeof client.providers.radius.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius.index.$get(args, options))
}

export async function postProvidersRadiusIndex(
  args: InferRequestType<typeof client.providers.radius.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius.index.$post(args, options))
}

export async function getProvidersRadiusIdIndex(
  args: InferRequestType<(typeof client.providers.radius)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius[':id'].index.$get(args, options))
}

export async function putProvidersRadiusIdIndex(
  args: InferRequestType<(typeof client.providers.radius)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius[':id'].index.$put(args, options))
}

export async function deleteProvidersRadiusIdIndex(
  args: InferRequestType<(typeof client.providers.radius)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius[':id'].index.$delete(args, options))
}

export async function patchProvidersRadiusIdIndex(
  args: InferRequestType<(typeof client.providers.radius)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius[':id'].index.$patch(args, options))
}

export async function getProvidersRadiusIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.radius)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.radius[':id'].used_by.index.$get(args, options))
}

export async function getProvidersSamlIndex(
  args: InferRequestType<typeof client.providers.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml.index.$get(args, options))
}

export async function postProvidersSamlIndex(
  args: InferRequestType<typeof client.providers.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml.index.$post(args, options))
}

export async function getProvidersSamlIdIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].index.$get(args, options))
}

export async function putProvidersSamlIdIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].index.$put(args, options))
}

export async function deleteProvidersSamlIdIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].index.$delete(args, options))
}

export async function patchProvidersSamlIdIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].index.$patch(args, options))
}

export async function getProvidersSamlIdMetadataIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['metadata']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].metadata.index.$get(args, options))
}

export async function getProvidersSamlIdPreviewUserIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['preview_user']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].preview_user.index.$get(args, options))
}

export async function getProvidersSamlIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.saml)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml[':id'].used_by.index.$get(args, options))
}

export async function postProvidersSamlImportMetadataIndex(
  args: InferRequestType<typeof client.providers.saml.import_metadata.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.saml.import_metadata.index.$post(args, options))
}

export async function getProvidersScimIndex(
  args: InferRequestType<typeof client.providers.scim.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim.index.$get(args, options))
}

export async function postProvidersScimIndex(
  args: InferRequestType<typeof client.providers.scim.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim.index.$post(args, options))
}

export async function getProvidersScimIdIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].index.$get(args, options))
}

export async function putProvidersScimIdIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].index.$put(args, options))
}

export async function deleteProvidersScimIdIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].index.$delete(args, options))
}

export async function patchProvidersScimIdIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].index.$patch(args, options))
}

export async function postProvidersScimIdSyncObjectIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['sync']['object']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].sync.object.index.$post(args, options))
}

export async function getProvidersScimIdSyncStatusIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['sync']['status']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].sync.status.index.$get(args, options))
}

export async function getProvidersScimIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.scim)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim[':id'].used_by.index.$get(args, options))
}

export async function getProvidersScimGroupsIndex(
  args: InferRequestType<typeof client.providers.scim_groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_groups.index.$get(args, options))
}

export async function postProvidersScimGroupsIndex(
  args: InferRequestType<typeof client.providers.scim_groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_groups.index.$post(args, options))
}

export async function getProvidersScimGroupsIdIndex(
  args: InferRequestType<(typeof client.providers.scim_groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_groups[':id'].index.$get(args, options))
}

export async function deleteProvidersScimGroupsIdIndex(
  args: InferRequestType<(typeof client.providers.scim_groups)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_groups[':id'].index.$delete(args, options))
}

export async function getProvidersScimGroupsIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.scim_groups)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_groups[':id'].used_by.index.$get(args, options))
}

export async function getProvidersScimUsersIndex(
  args: InferRequestType<typeof client.providers.scim_users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_users.index.$get(args, options))
}

export async function postProvidersScimUsersIndex(
  args: InferRequestType<typeof client.providers.scim_users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_users.index.$post(args, options))
}

export async function getProvidersScimUsersIdIndex(
  args: InferRequestType<(typeof client.providers.scim_users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_users[':id'].index.$get(args, options))
}

export async function deleteProvidersScimUsersIdIndex(
  args: InferRequestType<(typeof client.providers.scim_users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_users[':id'].index.$delete(args, options))
}

export async function getProvidersScimUsersIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.scim_users)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.scim_users[':id'].used_by.index.$get(args, options))
}

export async function getProvidersSsfIndex(
  args: InferRequestType<typeof client.providers.ssf.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf.index.$get(args, options))
}

export async function postProvidersSsfIndex(
  args: InferRequestType<typeof client.providers.ssf.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf.index.$post(args, options))
}

export async function getProvidersSsfIdIndex(
  args: InferRequestType<(typeof client.providers.ssf)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf[':id'].index.$get(args, options))
}

export async function putProvidersSsfIdIndex(
  args: InferRequestType<(typeof client.providers.ssf)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf[':id'].index.$put(args, options))
}

export async function deleteProvidersSsfIdIndex(
  args: InferRequestType<(typeof client.providers.ssf)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf[':id'].index.$delete(args, options))
}

export async function patchProvidersSsfIdIndex(
  args: InferRequestType<(typeof client.providers.ssf)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf[':id'].index.$patch(args, options))
}

export async function getProvidersSsfIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.ssf)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ssf[':id'].used_by.index.$get(args, options))
}

export async function getProvidersWsfedIndex(
  args: InferRequestType<typeof client.providers.wsfed.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed.index.$get(args, options))
}

export async function postProvidersWsfedIndex(
  args: InferRequestType<typeof client.providers.wsfed.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed.index.$post(args, options))
}

export async function getProvidersWsfedIdIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].index.$get(args, options))
}

export async function putProvidersWsfedIdIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].index.$put(args, options))
}

export async function deleteProvidersWsfedIdIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].index.$delete(args, options))
}

export async function patchProvidersWsfedIdIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].index.$patch(args, options))
}

export async function getProvidersWsfedIdMetadataIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['metadata']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].metadata.index.$get(args, options))
}

export async function getProvidersWsfedIdPreviewUserIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['preview_user']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].preview_user.index.$get(args, options))
}

export async function getProvidersWsfedIdUsedByIndex(
  args: InferRequestType<(typeof client.providers.wsfed)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.wsfed[':id'].used_by.index.$get(args, options))
}

export async function getRacConnectionTokensIndex(
  args: InferRequestType<typeof client.rac.connection_tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rac.connection_tokens.index.$get(args, options))
}

export async function getRacConnectionTokensConnectionTokenUuidIndex(
  args: InferRequestType<
    (typeof client.rac.connection_tokens)[':connection_token_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rac.connection_tokens[':connection_token_uuid'].index.$get(args, options),
  )
}

export async function putRacConnectionTokensConnectionTokenUuidIndex(
  args: InferRequestType<
    (typeof client.rac.connection_tokens)[':connection_token_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rac.connection_tokens[':connection_token_uuid'].index.$put(args, options),
  )
}

export async function deleteRacConnectionTokensConnectionTokenUuidIndex(
  args: InferRequestType<
    (typeof client.rac.connection_tokens)[':connection_token_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rac.connection_tokens[':connection_token_uuid'].index.$delete(args, options),
  )
}

export async function patchRacConnectionTokensConnectionTokenUuidIndex(
  args: InferRequestType<
    (typeof client.rac.connection_tokens)[':connection_token_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rac.connection_tokens[':connection_token_uuid'].index.$patch(args, options),
  )
}

export async function getRacConnectionTokensConnectionTokenUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.rac.connection_tokens)[':connection_token_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rac.connection_tokens[':connection_token_uuid'].used_by.index.$get(args, options),
  )
}

export async function getRacDevicesIndex(
  args: InferRequestType<typeof client.rac.devices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rac.devices.index.$get(args, options))
}

export async function getRbacCustomPermissionsIndex(
  args: InferRequestType<typeof client.rbac.custom_permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions.index.$get(args, options))
}

export async function postRbacCustomPermissionsIndex(
  args: InferRequestType<typeof client.rbac.custom_permissions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions.index.$post(args, options))
}

export async function getRbacCustomPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.custom_permissions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions[':id'].index.$get(args, options))
}

export async function putRbacCustomPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.custom_permissions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions[':id'].index.$put(args, options))
}

export async function deleteRbacCustomPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.custom_permissions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions[':id'].index.$delete(args, options))
}

export async function patchRbacCustomPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.custom_permissions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.custom_permissions[':id'].index.$patch(args, options))
}

export async function getRbacEndpointsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.rbac.endpoints.index.$get(undefined, options))
}

export async function getRbacInitialPermissionsIndex(
  args: InferRequestType<typeof client.rbac.initial_permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions.index.$get(args, options))
}

export async function postRbacInitialPermissionsIndex(
  args: InferRequestType<typeof client.rbac.initial_permissions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions.index.$post(args, options))
}

export async function getRbacInitialPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.initial_permissions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions[':id'].index.$get(args, options))
}

export async function putRbacInitialPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.initial_permissions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions[':id'].index.$put(args, options))
}

export async function deleteRbacInitialPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.initial_permissions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions[':id'].index.$delete(args, options))
}

export async function patchRbacInitialPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.initial_permissions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.initial_permissions[':id'].index.$patch(args, options))
}

export async function getRbacInitialPermissionsIdUsedByIndex(
  args: InferRequestType<
    (typeof client.rbac.initial_permissions)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.initial_permissions[':id'].used_by.index.$get(args, options),
  )
}

export async function getRbacPermissionChecksIndex(
  args: InferRequestType<typeof client.rbac.permission_checks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permission_checks.index.$get(args, options))
}

export async function postRbacPermissionChecksIndex(
  args: InferRequestType<typeof client.rbac.permission_checks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permission_checks.index.$post(args, options))
}

export async function getRbacPermissionChecksCheckUuidIndex(
  args: InferRequestType<(typeof client.rbac.permission_checks)[':check_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permission_checks[':check_uuid'].index.$get(args, options))
}

export async function putRbacPermissionChecksCheckUuidIndex(
  args: InferRequestType<(typeof client.rbac.permission_checks)[':check_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permission_checks[':check_uuid'].index.$put(args, options))
}

export async function deleteRbacPermissionChecksCheckUuidIndex(
  args: InferRequestType<(typeof client.rbac.permission_checks)[':check_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.permission_checks[':check_uuid'].index.$delete(args, options),
  )
}

export async function patchRbacPermissionChecksCheckUuidIndex(
  args: InferRequestType<(typeof client.rbac.permission_checks)[':check_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.permission_checks[':check_uuid'].index.$patch(args, options),
  )
}

export async function getRbacPermissionChecksCheckUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.rbac.permission_checks)[':check_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.permission_checks[':check_uuid'].used_by.index.$get(args, options),
  )
}

export async function getRbacPermissionsIndex(
  args: InferRequestType<typeof client.rbac.permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permissions.index.$get(args, options))
}

export async function getRbacPermissionsIdIndex(
  args: InferRequestType<(typeof client.rbac.permissions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permissions[':id'].index.$get(args, options))
}

export async function getRbacPermissionsAssignedByRolesIndex(
  args: InferRequestType<typeof client.rbac.permissions.assigned_by_roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permissions.assigned_by_roles.index.$get(args, options))
}

export async function postRbacPermissionsAssignedByRolesUuidAssignIndex(
  args: InferRequestType<
    (typeof client.rbac.permissions.assigned_by_roles)[':uuid']['assign']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.permissions.assigned_by_roles[':uuid'].assign.index.$post(args, options),
  )
}

export async function patchRbacPermissionsAssignedByRolesUuidUnassignIndex(
  args: InferRequestType<
    (typeof client.rbac.permissions.assigned_by_roles)[':uuid']['unassign']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rbac.permissions.assigned_by_roles[':uuid'].unassign.index.$patch(args, options),
  )
}

export async function getRbacPermissionsRolesIndex(
  args: InferRequestType<typeof client.rbac.permissions.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.permissions.roles.index.$get(args, options))
}

export async function getRbacRolesIndex(
  args: InferRequestType<typeof client.rbac.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles.index.$get(args, options))
}

export async function postRbacRolesIndex(
  args: InferRequestType<typeof client.rbac.roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles.index.$post(args, options))
}

export async function getRbacRolesUuidIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].index.$get(args, options))
}

export async function putRbacRolesUuidIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].index.$put(args, options))
}

export async function deleteRbacRolesUuidIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].index.$delete(args, options))
}

export async function patchRbacRolesUuidIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].index.$patch(args, options))
}

export async function postRbacRolesUuidAddUserIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['add_user']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].add_user.index.$post(args, options))
}

export async function postRbacRolesUuidRemoveUserIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['remove_user']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].remove_user.index.$post(args, options))
}

export async function getRbacRolesUuidUsedByIndex(
  args: InferRequestType<(typeof client.rbac.roles)[':uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rbac.roles[':uuid'].used_by.index.$get(args, options))
}

export async function getReportsExportsIndex(
  args: InferRequestType<typeof client.reports.exports.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.exports.index.$get(args, options))
}

export async function getReportsExportsIdIndex(
  args: InferRequestType<(typeof client.reports.exports)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.exports[':id'].index.$get(args, options))
}

export async function deleteReportsExportsIdIndex(
  args: InferRequestType<(typeof client.reports.exports)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.exports[':id'].index.$delete(args, options))
}

export async function getRequestsGrantRequestsIndex(
  args: InferRequestType<(typeof client.requests)['grant-requests']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['grant-requests'].index.$get(args, options))
}

export async function postRequestsGrantRequestsIndex(
  args: InferRequestType<(typeof client.requests)['grant-requests']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['grant-requests'].index.$post(args, options))
}

export async function getRequestsGrantRequestsUuidIndex(
  args: InferRequestType<(typeof client.requests)['grant-requests'][':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['grant-requests'][':uuid'].index.$get(args, options))
}

export async function deleteRequestsGrantRequestsUuidIndex(
  args: InferRequestType<(typeof client.requests)['grant-requests'][':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['grant-requests'][':uuid'].index.$delete(args, options),
  )
}

export async function patchRequestsGrantRequestsUuidFulfillIndex(
  args: InferRequestType<
    (typeof client.requests)['grant-requests'][':uuid']['fulfill']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['grant-requests'][':uuid'].fulfill.index.$patch(args, options),
  )
}

export async function deleteRequestsGrantRequestsUuidRevokeIndex(
  args: InferRequestType<
    (typeof client.requests)['grant-requests'][':uuid']['revoke']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['grant-requests'][':uuid'].revoke.index.$delete(args, options),
  )
}

export async function postRequestsGrantRequestsAgentIndex(
  args: InferRequestType<(typeof client.requests)['grant-requests']['agent']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['grant-requests'].agent.index.$post(args, options))
}

export async function getRequestsGrantRequestsPendingReviewIndex(
  args: InferRequestType<
    (typeof client.requests)['grant-requests']['pending_review']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['grant-requests'].pending_review.index.$get(args, options),
  )
}

export async function getRequestsRuleBindingsIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'].index.$get(args, options))
}

export async function postRequestsRuleBindingsIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'].index.$post(args, options))
}

export async function getRequestsRuleBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings'][':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'][':uuid'].index.$get(args, options))
}

export async function putRequestsRuleBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings'][':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'][':uuid'].index.$put(args, options))
}

export async function deleteRequestsRuleBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings'][':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'][':uuid'].index.$delete(args, options))
}

export async function patchRequestsRuleBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-bindings'][':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-bindings'][':uuid'].index.$patch(args, options))
}

export async function getRequestsRuleBindingsUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.requests)['rule-bindings'][':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-bindings'][':uuid'].used_by.index.$get(args, options),
  )
}

export async function getRequestsRuleChildBindingsIndex(
  args: InferRequestType<(typeof client.requests)['rule-child-bindings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-child-bindings'].index.$get(args, options))
}

export async function postRequestsRuleChildBindingsIndex(
  args: InferRequestType<(typeof client.requests)['rule-child-bindings']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests['rule-child-bindings'].index.$post(args, options))
}

export async function getRequestsRuleChildBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-child-bindings'][':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-child-bindings'][':uuid'].index.$get(args, options),
  )
}

export async function putRequestsRuleChildBindingsUuidIndex(
  args: InferRequestType<(typeof client.requests)['rule-child-bindings'][':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-child-bindings'][':uuid'].index.$put(args, options),
  )
}

export async function deleteRequestsRuleChildBindingsUuidIndex(
  args: InferRequestType<
    (typeof client.requests)['rule-child-bindings'][':uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-child-bindings'][':uuid'].index.$delete(args, options),
  )
}

export async function patchRequestsRuleChildBindingsUuidIndex(
  args: InferRequestType<
    (typeof client.requests)['rule-child-bindings'][':uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-child-bindings'][':uuid'].index.$patch(args, options),
  )
}

export async function getRequestsRuleChildBindingsUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.requests)['rule-child-bindings'][':uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requests['rule-child-bindings'][':uuid'].used_by.index.$get(args, options),
  )
}

export async function getRequestsRulesIndex(
  args: InferRequestType<typeof client.requests.rules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules.index.$get(args, options))
}

export async function postRequestsRulesIndex(
  args: InferRequestType<typeof client.requests.rules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules.index.$post(args, options))
}

export async function getRequestsRulesUuidIndex(
  args: InferRequestType<(typeof client.requests.rules)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules[':uuid'].index.$get(args, options))
}

export async function putRequestsRulesUuidIndex(
  args: InferRequestType<(typeof client.requests.rules)[':uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules[':uuid'].index.$put(args, options))
}

export async function deleteRequestsRulesUuidIndex(
  args: InferRequestType<(typeof client.requests.rules)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules[':uuid'].index.$delete(args, options))
}

export async function patchRequestsRulesUuidIndex(
  args: InferRequestType<(typeof client.requests.rules)[':uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules[':uuid'].index.$patch(args, options))
}

export async function getRequestsRulesUuidUsedByIndex(
  args: InferRequestType<(typeof client.requests.rules)[':uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.rules[':uuid'].used_by.index.$get(args, options))
}

export async function getRootConfigIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.root.config.index.$get(undefined, options))
}

export async function getSchemaIndex(
  args: InferRequestType<typeof client.schema.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema.index.$get(args, options))
}

export async function getSourcesAllIndex(
  args: InferRequestType<typeof client.sources.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.all.index.$get(args, options))
}

export async function getSourcesAllSlugIndex(
  args: InferRequestType<(typeof client.sources.all)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.all[':slug'].index.$get(args, options))
}

export async function deleteSourcesAllSlugIndex(
  args: InferRequestType<(typeof client.sources.all)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.all[':slug'].index.$delete(args, options))
}

export async function getSourcesAllSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.all)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.all[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.sources.all.types.index.$get(undefined, options))
}

export async function getSourcesAllUserSettingsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.sources.all.user_settings.index.$get(undefined, options))
}

export async function getSourcesGroupConnectionsAllIndex(
  args: InferRequestType<typeof client.sources.group_connections.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.all.index.$get(args, options))
}

export async function getSourcesGroupConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.all)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.all[':id'].index.$get(args, options))
}

export async function putSourcesGroupConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.all)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.all[':id'].index.$put(args, options))
}

export async function deleteSourcesGroupConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.all)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.all[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.all)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.all[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsAllIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.all)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.all[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsKerberosIndex(
  args: InferRequestType<typeof client.sources.group_connections.kerberos.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.kerberos.index.$get(args, options))
}

export async function postSourcesGroupConnectionsKerberosIndex(
  args: InferRequestType<typeof client.sources.group_connections.kerberos.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.kerberos.index.$post(args, options))
}

export async function getSourcesGroupConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.kerberos)[':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.kerberos[':id'].index.$get(args, options),
  )
}

export async function putSourcesGroupConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.kerberos)[':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.kerberos[':id'].index.$put(args, options),
  )
}

export async function deleteSourcesGroupConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.kerberos)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.kerberos[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.kerberos)[':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.kerberos[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsKerberosIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.kerberos)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.kerberos[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsLdapIndex(
  args: InferRequestType<typeof client.sources.group_connections.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.ldap.index.$get(args, options))
}

export async function postSourcesGroupConnectionsLdapIndex(
  args: InferRequestType<typeof client.sources.group_connections.ldap.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.ldap.index.$post(args, options))
}

export async function getSourcesGroupConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.ldap)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.ldap[':id'].index.$get(args, options))
}

export async function putSourcesGroupConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.ldap)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.ldap[':id'].index.$put(args, options))
}

export async function deleteSourcesGroupConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.ldap)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.ldap[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.ldap)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.ldap[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsLdapIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.ldap)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.ldap[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsOauthIndex(
  args: InferRequestType<typeof client.sources.group_connections.oauth.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.oauth.index.$get(args, options))
}

export async function postSourcesGroupConnectionsOauthIndex(
  args: InferRequestType<typeof client.sources.group_connections.oauth.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.oauth.index.$post(args, options))
}

export async function getSourcesGroupConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.oauth)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.oauth[':id'].index.$get(args, options),
  )
}

export async function putSourcesGroupConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.oauth)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.oauth[':id'].index.$put(args, options),
  )
}

export async function deleteSourcesGroupConnectionsOauthIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.oauth)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.oauth[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.oauth)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.oauth[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsOauthIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.oauth)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.oauth[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsPlexIndex(
  args: InferRequestType<typeof client.sources.group_connections.plex.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.plex.index.$get(args, options))
}

export async function postSourcesGroupConnectionsPlexIndex(
  args: InferRequestType<typeof client.sources.group_connections.plex.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.plex.index.$post(args, options))
}

export async function getSourcesGroupConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.plex)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.plex[':id'].index.$get(args, options))
}

export async function putSourcesGroupConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.plex)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.plex[':id'].index.$put(args, options))
}

export async function deleteSourcesGroupConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.plex)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.plex[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.plex)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.plex[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsPlexIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.plex)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.plex[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsSamlIndex(
  args: InferRequestType<typeof client.sources.group_connections.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.saml.index.$get(args, options))
}

export async function postSourcesGroupConnectionsSamlIndex(
  args: InferRequestType<typeof client.sources.group_connections.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.saml.index.$post(args, options))
}

export async function getSourcesGroupConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.saml)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.saml[':id'].index.$get(args, options))
}

export async function putSourcesGroupConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.saml)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.saml[':id'].index.$put(args, options))
}

export async function deleteSourcesGroupConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.saml)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.saml[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.group_connections.saml)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.saml[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsSamlIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.saml)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.saml[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesGroupConnectionsTelegramIndex(
  args: InferRequestType<typeof client.sources.group_connections.telegram.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.telegram.index.$get(args, options))
}

export async function postSourcesGroupConnectionsTelegramIndex(
  args: InferRequestType<typeof client.sources.group_connections.telegram.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.group_connections.telegram.index.$post(args, options))
}

export async function getSourcesGroupConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.telegram)[':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.telegram[':id'].index.$get(args, options),
  )
}

export async function putSourcesGroupConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.telegram)[':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.telegram[':id'].index.$put(args, options),
  )
}

export async function deleteSourcesGroupConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.telegram)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.telegram[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesGroupConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.telegram)[':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.telegram[':id'].index.$patch(args, options),
  )
}

export async function getSourcesGroupConnectionsTelegramIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.group_connections.telegram)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.group_connections.telegram[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesKerberosIndex(
  args: InferRequestType<typeof client.sources.kerberos.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos.index.$get(args, options))
}

export async function postSourcesKerberosIndex(
  args: InferRequestType<typeof client.sources.kerberos.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos.index.$post(args, options))
}

export async function getSourcesKerberosSlugIndex(
  args: InferRequestType<(typeof client.sources.kerberos)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].index.$get(args, options))
}

export async function putSourcesKerberosSlugIndex(
  args: InferRequestType<(typeof client.sources.kerberos)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].index.$put(args, options))
}

export async function deleteSourcesKerberosSlugIndex(
  args: InferRequestType<(typeof client.sources.kerberos)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].index.$delete(args, options))
}

export async function patchSourcesKerberosSlugIndex(
  args: InferRequestType<(typeof client.sources.kerberos)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].index.$patch(args, options))
}

export async function getSourcesKerberosSlugSyncStatusIndex(
  args: InferRequestType<
    (typeof client.sources.kerberos)[':slug']['sync']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].sync.status.index.$get(args, options))
}

export async function getSourcesKerberosSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.kerberos)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.kerberos[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesLdapIndex(
  args: InferRequestType<typeof client.sources.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap.index.$get(args, options))
}

export async function postSourcesLdapIndex(
  args: InferRequestType<typeof client.sources.ldap.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap.index.$post(args, options))
}

export async function getSourcesLdapSlugIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].index.$get(args, options))
}

export async function putSourcesLdapSlugIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].index.$put(args, options))
}

export async function deleteSourcesLdapSlugIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].index.$delete(args, options))
}

export async function patchSourcesLdapSlugIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].index.$patch(args, options))
}

export async function getSourcesLdapSlugDebugIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['debug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].debug.index.$get(args, options))
}

export async function getSourcesLdapSlugSyncStatusIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['sync']['status']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].sync.status.index.$get(args, options))
}

export async function getSourcesLdapSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.ldap)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.ldap[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesOauthIndex(
  args: InferRequestType<typeof client.sources.oauth.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth.index.$get(args, options))
}

export async function postSourcesOauthIndex(
  args: InferRequestType<typeof client.sources.oauth.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth.index.$post(args, options))
}

export async function getSourcesOauthSlugIndex(
  args: InferRequestType<(typeof client.sources.oauth)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth[':slug'].index.$get(args, options))
}

export async function putSourcesOauthSlugIndex(
  args: InferRequestType<(typeof client.sources.oauth)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth[':slug'].index.$put(args, options))
}

export async function deleteSourcesOauthSlugIndex(
  args: InferRequestType<(typeof client.sources.oauth)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth[':slug'].index.$delete(args, options))
}

export async function patchSourcesOauthSlugIndex(
  args: InferRequestType<(typeof client.sources.oauth)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth[':slug'].index.$patch(args, options))
}

export async function getSourcesOauthSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.oauth)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesOauthSourceTypesIndex(
  args: InferRequestType<typeof client.sources.oauth.source_types.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.oauth.source_types.index.$get(args, options))
}

export async function getSourcesPlexIndex(
  args: InferRequestType<typeof client.sources.plex.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex.index.$get(args, options))
}

export async function postSourcesPlexIndex(
  args: InferRequestType<typeof client.sources.plex.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex.index.$post(args, options))
}

export async function getSourcesPlexSlugIndex(
  args: InferRequestType<(typeof client.sources.plex)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex[':slug'].index.$get(args, options))
}

export async function putSourcesPlexSlugIndex(
  args: InferRequestType<(typeof client.sources.plex)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex[':slug'].index.$put(args, options))
}

export async function deleteSourcesPlexSlugIndex(
  args: InferRequestType<(typeof client.sources.plex)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex[':slug'].index.$delete(args, options))
}

export async function patchSourcesPlexSlugIndex(
  args: InferRequestType<(typeof client.sources.plex)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex[':slug'].index.$patch(args, options))
}

export async function getSourcesPlexSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.plex)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex[':slug'].used_by.index.$get(args, options))
}

export async function postSourcesPlexRedeemTokenIndex(
  args: InferRequestType<typeof client.sources.plex.redeem_token.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.plex.redeem_token.index.$post(args, options))
}

export async function postSourcesPlexRedeemTokenAuthenticatedIndex(
  args: InferRequestType<typeof client.sources.plex.redeem_token_authenticated.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.plex.redeem_token_authenticated.index.$post(args, options),
  )
}

export async function getSourcesSamlIndex(
  args: InferRequestType<typeof client.sources.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml.index.$get(args, options))
}

export async function postSourcesSamlIndex(
  args: InferRequestType<typeof client.sources.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml.index.$post(args, options))
}

export async function getSourcesSamlSlugIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].index.$get(args, options))
}

export async function putSourcesSamlSlugIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].index.$put(args, options))
}

export async function deleteSourcesSamlSlugIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].index.$delete(args, options))
}

export async function patchSourcesSamlSlugIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].index.$patch(args, options))
}

export async function getSourcesSamlSlugMetadataIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['metadata']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].metadata.index.$get(args, options))
}

export async function getSourcesSamlSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.saml)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.saml[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesScimIndex(
  args: InferRequestType<typeof client.sources.scim.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim.index.$get(args, options))
}

export async function postSourcesScimIndex(
  args: InferRequestType<typeof client.sources.scim.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim.index.$post(args, options))
}

export async function getSourcesScimSlugIndex(
  args: InferRequestType<(typeof client.sources.scim)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim[':slug'].index.$get(args, options))
}

export async function putSourcesScimSlugIndex(
  args: InferRequestType<(typeof client.sources.scim)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim[':slug'].index.$put(args, options))
}

export async function deleteSourcesScimSlugIndex(
  args: InferRequestType<(typeof client.sources.scim)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim[':slug'].index.$delete(args, options))
}

export async function patchSourcesScimSlugIndex(
  args: InferRequestType<(typeof client.sources.scim)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim[':slug'].index.$patch(args, options))
}

export async function getSourcesScimSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.scim)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesScimGroupsIndex(
  args: InferRequestType<typeof client.sources.scim_groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups.index.$get(args, options))
}

export async function postSourcesScimGroupsIndex(
  args: InferRequestType<typeof client.sources.scim_groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups.index.$post(args, options))
}

export async function getSourcesScimGroupsIdIndex(
  args: InferRequestType<(typeof client.sources.scim_groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups[':id'].index.$get(args, options))
}

export async function putSourcesScimGroupsIdIndex(
  args: InferRequestType<(typeof client.sources.scim_groups)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups[':id'].index.$put(args, options))
}

export async function deleteSourcesScimGroupsIdIndex(
  args: InferRequestType<(typeof client.sources.scim_groups)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups[':id'].index.$delete(args, options))
}

export async function patchSourcesScimGroupsIdIndex(
  args: InferRequestType<(typeof client.sources.scim_groups)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups[':id'].index.$patch(args, options))
}

export async function getSourcesScimGroupsIdUsedByIndex(
  args: InferRequestType<(typeof client.sources.scim_groups)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_groups[':id'].used_by.index.$get(args, options))
}

export async function getSourcesScimUsersIndex(
  args: InferRequestType<typeof client.sources.scim_users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users.index.$get(args, options))
}

export async function postSourcesScimUsersIndex(
  args: InferRequestType<typeof client.sources.scim_users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users.index.$post(args, options))
}

export async function getSourcesScimUsersIdIndex(
  args: InferRequestType<(typeof client.sources.scim_users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users[':id'].index.$get(args, options))
}

export async function putSourcesScimUsersIdIndex(
  args: InferRequestType<(typeof client.sources.scim_users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users[':id'].index.$put(args, options))
}

export async function deleteSourcesScimUsersIdIndex(
  args: InferRequestType<(typeof client.sources.scim_users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users[':id'].index.$delete(args, options))
}

export async function patchSourcesScimUsersIdIndex(
  args: InferRequestType<(typeof client.sources.scim_users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users[':id'].index.$patch(args, options))
}

export async function getSourcesScimUsersIdUsedByIndex(
  args: InferRequestType<(typeof client.sources.scim_users)[':id']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.scim_users[':id'].used_by.index.$get(args, options))
}

export async function getSourcesTelegramIndex(
  args: InferRequestType<typeof client.sources.telegram.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram.index.$get(args, options))
}

export async function postSourcesTelegramIndex(
  args: InferRequestType<typeof client.sources.telegram.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram.index.$post(args, options))
}

export async function getSourcesTelegramSlugIndex(
  args: InferRequestType<(typeof client.sources.telegram)[':slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram[':slug'].index.$get(args, options))
}

export async function putSourcesTelegramSlugIndex(
  args: InferRequestType<(typeof client.sources.telegram)[':slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram[':slug'].index.$put(args, options))
}

export async function deleteSourcesTelegramSlugIndex(
  args: InferRequestType<(typeof client.sources.telegram)[':slug']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram[':slug'].index.$delete(args, options))
}

export async function patchSourcesTelegramSlugIndex(
  args: InferRequestType<(typeof client.sources.telegram)[':slug']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram[':slug'].index.$patch(args, options))
}

export async function postSourcesTelegramSlugConnectUserIndex(
  args: InferRequestType<
    (typeof client.sources.telegram)[':slug']['connect_user']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.telegram[':slug'].connect_user.index.$post(args, options),
  )
}

export async function getSourcesTelegramSlugUsedByIndex(
  args: InferRequestType<(typeof client.sources.telegram)[':slug']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.telegram[':slug'].used_by.index.$get(args, options))
}

export async function getSourcesUserConnectionsAllIndex(
  args: InferRequestType<typeof client.sources.user_connections.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.all.index.$get(args, options))
}

export async function getSourcesUserConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.all)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.all[':id'].index.$get(args, options))
}

export async function putSourcesUserConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.all)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.all[':id'].index.$put(args, options))
}

export async function deleteSourcesUserConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.all)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.all[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsAllIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.all)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.all[':id'].index.$patch(args, options))
}

export async function getSourcesUserConnectionsAllIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.all)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.all[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsKerberosIndex(
  args: InferRequestType<typeof client.sources.user_connections.kerberos.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.kerberos.index.$get(args, options))
}

export async function postSourcesUserConnectionsKerberosIndex(
  args: InferRequestType<typeof client.sources.user_connections.kerberos.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.kerberos.index.$post(args, options))
}

export async function getSourcesUserConnectionsKerberosIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.kerberos)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.kerberos[':id'].index.$get(args, options),
  )
}

export async function putSourcesUserConnectionsKerberosIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.kerberos)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.kerberos[':id'].index.$put(args, options),
  )
}

export async function deleteSourcesUserConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.kerberos)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.kerberos[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsKerberosIdIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.kerberos)[':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.kerberos[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsKerberosIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.kerberos)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.kerberos[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsLdapIndex(
  args: InferRequestType<typeof client.sources.user_connections.ldap.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.ldap.index.$get(args, options))
}

export async function postSourcesUserConnectionsLdapIndex(
  args: InferRequestType<typeof client.sources.user_connections.ldap.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.ldap.index.$post(args, options))
}

export async function getSourcesUserConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.ldap)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.ldap[':id'].index.$get(args, options))
}

export async function putSourcesUserConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.ldap)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.ldap[':id'].index.$put(args, options))
}

export async function deleteSourcesUserConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.ldap)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.ldap[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsLdapIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.ldap)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.ldap[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsLdapIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.ldap)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.ldap[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsOauthIndex(
  args: InferRequestType<typeof client.sources.user_connections.oauth.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.oauth.index.$get(args, options))
}

export async function postSourcesUserConnectionsOauthIndex(
  args: InferRequestType<typeof client.sources.user_connections.oauth.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.oauth.index.$post(args, options))
}

export async function getSourcesUserConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.oauth)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.oauth[':id'].index.$get(args, options))
}

export async function putSourcesUserConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.oauth)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.oauth[':id'].index.$put(args, options))
}

export async function deleteSourcesUserConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.oauth)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.oauth[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsOauthIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.oauth)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.oauth[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsOauthIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.oauth)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.oauth[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsPlexIndex(
  args: InferRequestType<typeof client.sources.user_connections.plex.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.plex.index.$get(args, options))
}

export async function postSourcesUserConnectionsPlexIndex(
  args: InferRequestType<typeof client.sources.user_connections.plex.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.plex.index.$post(args, options))
}

export async function getSourcesUserConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.plex)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.plex[':id'].index.$get(args, options))
}

export async function putSourcesUserConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.plex)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.plex[':id'].index.$put(args, options))
}

export async function deleteSourcesUserConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.plex)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.plex[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsPlexIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.plex)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.plex[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsPlexIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.plex)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.plex[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsSamlIndex(
  args: InferRequestType<typeof client.sources.user_connections.saml.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.saml.index.$get(args, options))
}

export async function postSourcesUserConnectionsSamlIndex(
  args: InferRequestType<typeof client.sources.user_connections.saml.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.saml.index.$post(args, options))
}

export async function getSourcesUserConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.saml)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.saml[':id'].index.$get(args, options))
}

export async function putSourcesUserConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.saml)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.saml[':id'].index.$put(args, options))
}

export async function deleteSourcesUserConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.saml)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.saml[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsSamlIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.saml)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.saml[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsSamlIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.saml)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.saml[':id'].used_by.index.$get(args, options),
  )
}

export async function getSourcesUserConnectionsTelegramIndex(
  args: InferRequestType<typeof client.sources.user_connections.telegram.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.telegram.index.$get(args, options))
}

export async function postSourcesUserConnectionsTelegramIndex(
  args: InferRequestType<typeof client.sources.user_connections.telegram.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.user_connections.telegram.index.$post(args, options))
}

export async function getSourcesUserConnectionsTelegramIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.telegram)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.telegram[':id'].index.$get(args, options),
  )
}

export async function putSourcesUserConnectionsTelegramIdIndex(
  args: InferRequestType<(typeof client.sources.user_connections.telegram)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.telegram[':id'].index.$put(args, options),
  )
}

export async function deleteSourcesUserConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.telegram)[':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.telegram[':id'].index.$delete(args, options),
  )
}

export async function patchSourcesUserConnectionsTelegramIdIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.telegram)[':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.telegram[':id'].index.$patch(args, options),
  )
}

export async function getSourcesUserConnectionsTelegramIdUsedByIndex(
  args: InferRequestType<
    (typeof client.sources.user_connections.telegram)[':id']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sources.user_connections.telegram[':id'].used_by.index.$get(args, options),
  )
}

export async function getSsfStreamsIndex(
  args: InferRequestType<typeof client.ssf.streams.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssf.streams.index.$get(args, options))
}

export async function getSsfStreamsUuidIndex(
  args: InferRequestType<(typeof client.ssf.streams)[':uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssf.streams[':uuid'].index.$get(args, options))
}

export async function deleteSsfStreamsUuidIndex(
  args: InferRequestType<(typeof client.ssf.streams)[':uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssf.streams[':uuid'].index.$delete(args, options))
}

export async function getStagesAccountLockdownIndex(
  args: InferRequestType<typeof client.stages.account_lockdown.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.account_lockdown.index.$get(args, options))
}

export async function postStagesAccountLockdownIndex(
  args: InferRequestType<typeof client.stages.account_lockdown.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.account_lockdown.index.$post(args, options))
}

export async function getStagesAccountLockdownStageUuidIndex(
  args: InferRequestType<(typeof client.stages.account_lockdown)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.account_lockdown[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAccountLockdownStageUuidIndex(
  args: InferRequestType<(typeof client.stages.account_lockdown)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.account_lockdown[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAccountLockdownStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.account_lockdown)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.account_lockdown[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAccountLockdownStageUuidIndex(
  args: InferRequestType<(typeof client.stages.account_lockdown)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.account_lockdown[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAccountLockdownStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.account_lockdown)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.account_lockdown[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAllIndex(
  args: InferRequestType<typeof client.stages.all.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.all.index.$get(args, options))
}

export async function getStagesAllStageUuidIndex(
  args: InferRequestType<(typeof client.stages.all)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.all[':stage_uuid'].index.$get(args, options))
}

export async function deleteStagesAllStageUuidIndex(
  args: InferRequestType<(typeof client.stages.all)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.all[':stage_uuid'].index.$delete(args, options))
}

export async function getStagesAllStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.all)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.all[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesAllTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.stages.all.types.index.$get(undefined, options))
}

export async function getStagesAllUserSettingsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.stages.all.user_settings.index.$get(undefined, options))
}

export async function getStagesAuthenticatorDuoIndex(
  args: InferRequestType<typeof client.stages.authenticator.duo.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.duo.index.$get(args, options))
}

export async function postStagesAuthenticatorDuoIndex(
  args: InferRequestType<typeof client.stages.authenticator.duo.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.duo.index.$post(args, options))
}

export async function getStagesAuthenticatorDuoStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.duo)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorDuoStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.duo)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorDuoStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorDuoStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].index.$patch(args, options),
  )
}

export async function postStagesAuthenticatorDuoStageUuidEnrollmentStatusIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['enrollment_status']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].enrollment_status.index.$post(args, options),
  )
}

export async function postStagesAuthenticatorDuoStageUuidImportDeviceManualIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['import_device_manual']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].import_device_manual.index.$post(args, options),
  )
}

export async function postStagesAuthenticatorDuoStageUuidImportDevicesAutomaticIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['import_devices_automatic']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].import_devices_automatic.index.$post(
      args,
      options,
    ),
  )
}

export async function getStagesAuthenticatorDuoStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.duo)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.duo[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorEmailIndex(
  args: InferRequestType<typeof client.stages.authenticator.email.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.email.index.$get(args, options))
}

export async function postStagesAuthenticatorEmailIndex(
  args: InferRequestType<typeof client.stages.authenticator.email.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.email.index.$post(args, options))
}

export async function getStagesAuthenticatorEmailStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.email)[':stage_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.email[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorEmailStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.email)[':stage_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.email[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorEmailStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.email)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.email[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorEmailStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.email)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.email[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorEmailStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.email)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.email[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorEndpointGdtcIndex(
  args: InferRequestType<typeof client.stages.authenticator.endpoint_gdtc.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.endpoint_gdtc.index.$get(args, options))
}

export async function postStagesAuthenticatorEndpointGdtcIndex(
  args: InferRequestType<typeof client.stages.authenticator.endpoint_gdtc.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.endpoint_gdtc.index.$post(args, options))
}

export async function getStagesAuthenticatorEndpointGdtcStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.endpoint_gdtc)[':stage_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.endpoint_gdtc[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorEndpointGdtcStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.endpoint_gdtc)[':stage_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.endpoint_gdtc[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorEndpointGdtcStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.endpoint_gdtc)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.endpoint_gdtc[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorEndpointGdtcStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.endpoint_gdtc)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.endpoint_gdtc[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorEndpointGdtcStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.endpoint_gdtc)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.endpoint_gdtc[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorSmsIndex(
  args: InferRequestType<typeof client.stages.authenticator.sms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.sms.index.$get(args, options))
}

export async function postStagesAuthenticatorSmsIndex(
  args: InferRequestType<typeof client.stages.authenticator.sms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.sms.index.$post(args, options))
}

export async function getStagesAuthenticatorSmsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.sms)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.sms[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorSmsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.sms)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.sms[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorSmsStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.sms)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.sms[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorSmsStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.sms)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.sms[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorSmsStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.sms)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.sms[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorStaticIndex(
  args: InferRequestType<typeof client.stages.authenticator.static.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.static.index.$get(args, options))
}

export async function postStagesAuthenticatorStaticIndex(
  args: InferRequestType<typeof client.stages.authenticator.static.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.static.index.$post(args, options))
}

export async function getStagesAuthenticatorStaticStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.static)[':stage_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.static[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorStaticStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.static)[':stage_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.static[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorStaticStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.static)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.static[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorStaticStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.static)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.static[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorStaticStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.static)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.static[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorTotpIndex(
  args: InferRequestType<typeof client.stages.authenticator.totp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.totp.index.$get(args, options))
}

export async function postStagesAuthenticatorTotpIndex(
  args: InferRequestType<typeof client.stages.authenticator.totp.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.totp.index.$post(args, options))
}

export async function getStagesAuthenticatorTotpStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.totp)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.totp[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorTotpStageUuidIndex(
  args: InferRequestType<(typeof client.stages.authenticator.totp)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.totp[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorTotpStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.totp)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.totp[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorTotpStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.totp)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.totp[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorTotpStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.totp)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.totp[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorValidateIndex(
  args: InferRequestType<typeof client.stages.authenticator.validate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.validate.index.$get(args, options))
}

export async function postStagesAuthenticatorValidateIndex(
  args: InferRequestType<typeof client.stages.authenticator.validate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.validate.index.$post(args, options))
}

export async function getStagesAuthenticatorValidateStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.validate)[':stage_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.validate[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorValidateStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.validate)[':stage_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.validate[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorValidateStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.validate)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.validate[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorValidateStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.validate)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.validate[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorValidateStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.validate)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.validate[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorWebauthnIndex(
  args: InferRequestType<typeof client.stages.authenticator.webauthn.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.webauthn.index.$get(args, options))
}

export async function postStagesAuthenticatorWebauthnIndex(
  args: InferRequestType<typeof client.stages.authenticator.webauthn.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.authenticator.webauthn.index.$post(args, options))
}

export async function getStagesAuthenticatorWebauthnStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn)[':stage_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesAuthenticatorWebauthnStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn)[':stage_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesAuthenticatorWebauthnStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesAuthenticatorWebauthnStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesAuthenticatorWebauthnStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorWebauthnDeviceTypesIndex(
  args: InferRequestType<typeof client.stages.authenticator.webauthn_device_types.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn_device_types.index.$get(args, options),
  )
}

export async function getStagesAuthenticatorWebauthnDeviceTypesAaguidIndex(
  args: InferRequestType<
    (typeof client.stages.authenticator.webauthn_device_types)[':aaguid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.authenticator.webauthn_device_types[':aaguid'].index.$get(args, options),
  )
}

export async function getStagesCaptchaIndex(
  args: InferRequestType<typeof client.stages.captcha.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha.index.$get(args, options))
}

export async function postStagesCaptchaIndex(
  args: InferRequestType<typeof client.stages.captcha.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha.index.$post(args, options))
}

export async function getStagesCaptchaStageUuidIndex(
  args: InferRequestType<(typeof client.stages.captcha)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha[':stage_uuid'].index.$get(args, options))
}

export async function putStagesCaptchaStageUuidIndex(
  args: InferRequestType<(typeof client.stages.captcha)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesCaptchaStageUuidIndex(
  args: InferRequestType<(typeof client.stages.captcha)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesCaptchaStageUuidIndex(
  args: InferRequestType<(typeof client.stages.captcha)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesCaptchaStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.captcha)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.captcha[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesConsentIndex(
  args: InferRequestType<typeof client.stages.consent.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent.index.$get(args, options))
}

export async function postStagesConsentIndex(
  args: InferRequestType<typeof client.stages.consent.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent.index.$post(args, options))
}

export async function getStagesConsentStageUuidIndex(
  args: InferRequestType<(typeof client.stages.consent)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent[':stage_uuid'].index.$get(args, options))
}

export async function putStagesConsentStageUuidIndex(
  args: InferRequestType<(typeof client.stages.consent)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesConsentStageUuidIndex(
  args: InferRequestType<(typeof client.stages.consent)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesConsentStageUuidIndex(
  args: InferRequestType<(typeof client.stages.consent)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesConsentStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.consent)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.consent[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesDenyIndex(
  args: InferRequestType<typeof client.stages.deny.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny.index.$get(args, options))
}

export async function postStagesDenyIndex(
  args: InferRequestType<typeof client.stages.deny.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny.index.$post(args, options))
}

export async function getStagesDenyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.deny)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny[':stage_uuid'].index.$get(args, options))
}

export async function putStagesDenyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.deny)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesDenyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.deny)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesDenyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.deny)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesDenyStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.deny)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.deny[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesDummyIndex(
  args: InferRequestType<typeof client.stages.dummy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy.index.$get(args, options))
}

export async function postStagesDummyIndex(
  args: InferRequestType<typeof client.stages.dummy.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy.index.$post(args, options))
}

export async function getStagesDummyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.dummy)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy[':stage_uuid'].index.$get(args, options))
}

export async function putStagesDummyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.dummy)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesDummyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.dummy)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesDummyStageUuidIndex(
  args: InferRequestType<(typeof client.stages.dummy)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesDummyStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.dummy)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.dummy[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesEmailIndex(
  args: InferRequestType<typeof client.stages.email.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email.index.$get(args, options))
}

export async function postStagesEmailIndex(
  args: InferRequestType<typeof client.stages.email.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email.index.$post(args, options))
}

export async function getStagesEmailStageUuidIndex(
  args: InferRequestType<(typeof client.stages.email)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email[':stage_uuid'].index.$get(args, options))
}

export async function putStagesEmailStageUuidIndex(
  args: InferRequestType<(typeof client.stages.email)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesEmailStageUuidIndex(
  args: InferRequestType<(typeof client.stages.email)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesEmailStageUuidIndex(
  args: InferRequestType<(typeof client.stages.email)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesEmailStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.email)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.email[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesEmailTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.stages.email.templates.index.$get(undefined, options))
}

export async function getStagesEndpointsIndex(
  args: InferRequestType<typeof client.stages.endpoints.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints.index.$get(args, options))
}

export async function postStagesEndpointsIndex(
  args: InferRequestType<typeof client.stages.endpoints.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints.index.$post(args, options))
}

export async function getStagesEndpointsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.endpoints)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints[':stage_uuid'].index.$get(args, options))
}

export async function putStagesEndpointsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.endpoints)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesEndpointsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.endpoints)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesEndpointsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.endpoints)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.endpoints[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesEndpointsStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.endpoints)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.endpoints[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesIdentificationIndex(
  args: InferRequestType<typeof client.stages.identification.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.identification.index.$get(args, options))
}

export async function postStagesIdentificationIndex(
  args: InferRequestType<typeof client.stages.identification.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.identification.index.$post(args, options))
}

export async function getStagesIdentificationStageUuidIndex(
  args: InferRequestType<(typeof client.stages.identification)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.identification[':stage_uuid'].index.$get(args, options))
}

export async function putStagesIdentificationStageUuidIndex(
  args: InferRequestType<(typeof client.stages.identification)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.identification[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesIdentificationStageUuidIndex(
  args: InferRequestType<(typeof client.stages.identification)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.identification[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesIdentificationStageUuidIndex(
  args: InferRequestType<(typeof client.stages.identification)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.identification[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesIdentificationStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.identification)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.identification[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesInvitationInvitationsIndex(
  args: InferRequestType<typeof client.stages.invitation.invitations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.invitation.invitations.index.$get(args, options))
}

export async function postStagesInvitationInvitationsIndex(
  args: InferRequestType<typeof client.stages.invitation.invitations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.invitation.invitations.index.$post(args, options))
}

export async function getStagesInvitationInvitationsInviteUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].index.$get(args, options),
  )
}

export async function putStagesInvitationInvitationsInviteUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesInvitationInvitationsInviteUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesInvitationInvitationsInviteUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].index.$patch(args, options),
  )
}

export async function postStagesInvitationInvitationsInviteUuidSendEmailIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['send_email']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].send_email.index.$post(args, options),
  )
}

export async function getStagesInvitationInvitationsInviteUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.invitations)[':invite_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.invitations[':invite_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesInvitationStagesIndex(
  args: InferRequestType<typeof client.stages.invitation.stages.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.invitation.stages.index.$get(args, options))
}

export async function postStagesInvitationStagesIndex(
  args: InferRequestType<typeof client.stages.invitation.stages.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.invitation.stages.index.$post(args, options))
}

export async function getStagesInvitationStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.invitation.stages)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.stages[':stage_uuid'].index.$get(args, options),
  )
}

export async function putStagesInvitationStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.invitation.stages)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.stages[':stage_uuid'].index.$put(args, options),
  )
}

export async function deleteStagesInvitationStagesStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.stages)[':stage_uuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.stages[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesInvitationStagesStageUuidIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.stages)[':stage_uuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.stages[':stage_uuid'].index.$patch(args, options),
  )
}

export async function getStagesInvitationStagesStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.invitation.stages)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.invitation.stages[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesMtlsIndex(
  args: InferRequestType<typeof client.stages.mtls.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls.index.$get(args, options))
}

export async function postStagesMtlsIndex(
  args: InferRequestType<typeof client.stages.mtls.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls.index.$post(args, options))
}

export async function getStagesMtlsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.mtls)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls[':stage_uuid'].index.$get(args, options))
}

export async function putStagesMtlsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.mtls)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesMtlsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.mtls)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesMtlsStageUuidIndex(
  args: InferRequestType<(typeof client.stages.mtls)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesMtlsStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.mtls)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.mtls[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesPasswordIndex(
  args: InferRequestType<typeof client.stages.password.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password.index.$get(args, options))
}

export async function postStagesPasswordIndex(
  args: InferRequestType<typeof client.stages.password.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password.index.$post(args, options))
}

export async function getStagesPasswordStageUuidIndex(
  args: InferRequestType<(typeof client.stages.password)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password[':stage_uuid'].index.$get(args, options))
}

export async function putStagesPasswordStageUuidIndex(
  args: InferRequestType<(typeof client.stages.password)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesPasswordStageUuidIndex(
  args: InferRequestType<(typeof client.stages.password)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesPasswordStageUuidIndex(
  args: InferRequestType<(typeof client.stages.password)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.password[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesPasswordStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.password)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.password[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesPromptPromptsIndex(
  args: InferRequestType<typeof client.stages.prompt.prompts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.prompts.index.$get(args, options))
}

export async function postStagesPromptPromptsIndex(
  args: InferRequestType<typeof client.stages.prompt.prompts.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.prompts.index.$post(args, options))
}

export async function getStagesPromptPromptsPromptUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.prompts)[':prompt_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.prompts[':prompt_uuid'].index.$get(args, options))
}

export async function putStagesPromptPromptsPromptUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.prompts)[':prompt_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.prompts[':prompt_uuid'].index.$put(args, options))
}

export async function deleteStagesPromptPromptsPromptUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.prompts)[':prompt_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.prompt.prompts[':prompt_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesPromptPromptsPromptUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.prompts)[':prompt_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.prompt.prompts[':prompt_uuid'].index.$patch(args, options),
  )
}

export async function getStagesPromptPromptsPromptUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.prompt.prompts)[':prompt_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.prompt.prompts[':prompt_uuid'].used_by.index.$get(args, options),
  )
}

export async function postStagesPromptPromptsPreviewIndex(
  args: InferRequestType<typeof client.stages.prompt.prompts.preview.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.prompts.preview.index.$post(args, options))
}

export async function getStagesPromptStagesIndex(
  args: InferRequestType<typeof client.stages.prompt.stages.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.stages.index.$get(args, options))
}

export async function postStagesPromptStagesIndex(
  args: InferRequestType<typeof client.stages.prompt.stages.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.stages.index.$post(args, options))
}

export async function getStagesPromptStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.stages)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.stages[':stage_uuid'].index.$get(args, options))
}

export async function putStagesPromptStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.stages)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.stages[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesPromptStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.stages)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.prompt.stages[':stage_uuid'].index.$delete(args, options),
  )
}

export async function patchStagesPromptStagesStageUuidIndex(
  args: InferRequestType<(typeof client.stages.prompt.stages)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.prompt.stages[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesPromptStagesStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.prompt.stages)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.prompt.stages[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesRedirectIndex(
  args: InferRequestType<typeof client.stages.redirect.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect.index.$get(args, options))
}

export async function postStagesRedirectIndex(
  args: InferRequestType<typeof client.stages.redirect.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect.index.$post(args, options))
}

export async function getStagesRedirectStageUuidIndex(
  args: InferRequestType<(typeof client.stages.redirect)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect[':stage_uuid'].index.$get(args, options))
}

export async function putStagesRedirectStageUuidIndex(
  args: InferRequestType<(typeof client.stages.redirect)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesRedirectStageUuidIndex(
  args: InferRequestType<(typeof client.stages.redirect)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesRedirectStageUuidIndex(
  args: InferRequestType<(typeof client.stages.redirect)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.redirect[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesRedirectStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.redirect)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.redirect[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesSourceIndex(
  args: InferRequestType<typeof client.stages.source.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source.index.$get(args, options))
}

export async function postStagesSourceIndex(
  args: InferRequestType<typeof client.stages.source.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source.index.$post(args, options))
}

export async function getStagesSourceStageUuidIndex(
  args: InferRequestType<(typeof client.stages.source)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source[':stage_uuid'].index.$get(args, options))
}

export async function putStagesSourceStageUuidIndex(
  args: InferRequestType<(typeof client.stages.source)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesSourceStageUuidIndex(
  args: InferRequestType<(typeof client.stages.source)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesSourceStageUuidIndex(
  args: InferRequestType<(typeof client.stages.source)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesSourceStageUuidUsedByIndex(
  args: InferRequestType<(typeof client.stages.source)[':stage_uuid']['used_by']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.source[':stage_uuid'].used_by.index.$get(args, options))
}

export async function getStagesUserDeleteIndex(
  args: InferRequestType<typeof client.stages.user_delete.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete.index.$get(args, options))
}

export async function postStagesUserDeleteIndex(
  args: InferRequestType<typeof client.stages.user_delete.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete.index.$post(args, options))
}

export async function getStagesUserDeleteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_delete)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete[':stage_uuid'].index.$get(args, options))
}

export async function putStagesUserDeleteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_delete)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesUserDeleteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_delete)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesUserDeleteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_delete)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_delete[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesUserDeleteStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.user_delete)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.user_delete[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesUserLoginIndex(
  args: InferRequestType<typeof client.stages.user_login.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login.index.$get(args, options))
}

export async function postStagesUserLoginIndex(
  args: InferRequestType<typeof client.stages.user_login.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login.index.$post(args, options))
}

export async function getStagesUserLoginStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_login)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login[':stage_uuid'].index.$get(args, options))
}

export async function putStagesUserLoginStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_login)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesUserLoginStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_login)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesUserLoginStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_login)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_login[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesUserLoginStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.user_login)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.user_login[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesUserLogoutIndex(
  args: InferRequestType<typeof client.stages.user_logout.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout.index.$get(args, options))
}

export async function postStagesUserLogoutIndex(
  args: InferRequestType<typeof client.stages.user_logout.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout.index.$post(args, options))
}

export async function getStagesUserLogoutStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_logout)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout[':stage_uuid'].index.$get(args, options))
}

export async function putStagesUserLogoutStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_logout)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesUserLogoutStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_logout)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesUserLogoutStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_logout)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_logout[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesUserLogoutStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.user_logout)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.user_logout[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getStagesUserWriteIndex(
  args: InferRequestType<typeof client.stages.user_write.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write.index.$get(args, options))
}

export async function postStagesUserWriteIndex(
  args: InferRequestType<typeof client.stages.user_write.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write.index.$post(args, options))
}

export async function getStagesUserWriteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_write)[':stage_uuid']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write[':stage_uuid'].index.$get(args, options))
}

export async function putStagesUserWriteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_write)[':stage_uuid']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write[':stage_uuid'].index.$put(args, options))
}

export async function deleteStagesUserWriteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_write)[':stage_uuid']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write[':stage_uuid'].index.$delete(args, options))
}

export async function patchStagesUserWriteStageUuidIndex(
  args: InferRequestType<(typeof client.stages.user_write)[':stage_uuid']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages.user_write[':stage_uuid'].index.$patch(args, options))
}

export async function getStagesUserWriteStageUuidUsedByIndex(
  args: InferRequestType<
    (typeof client.stages.user_write)[':stage_uuid']['used_by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stages.user_write[':stage_uuid'].used_by.index.$get(args, options),
  )
}

export async function getTasksSchedulesIndex(
  args: InferRequestType<typeof client.tasks.schedules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.schedules.index.$get(args, options))
}

export async function getTasksSchedulesIdIndex(
  args: InferRequestType<(typeof client.tasks.schedules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.schedules[':id'].index.$get(args, options))
}

export async function putTasksSchedulesIdIndex(
  args: InferRequestType<(typeof client.tasks.schedules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.schedules[':id'].index.$put(args, options))
}

export async function patchTasksSchedulesIdIndex(
  args: InferRequestType<(typeof client.tasks.schedules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.schedules[':id'].index.$patch(args, options))
}

export async function postTasksSchedulesIdSendIndex(
  args: InferRequestType<(typeof client.tasks.schedules)[':id']['send']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.schedules[':id'].send.index.$post(args, options))
}

export async function getTasksTasksIndex(
  args: InferRequestType<typeof client.tasks.tasks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.tasks.index.$get(args, options))
}

export async function getTasksTasksMessageIdIndex(
  args: InferRequestType<(typeof client.tasks.tasks)[':message_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.tasks[':message_id'].index.$get(args, options))
}

export async function postTasksTasksMessageIdRetryIndex(
  args: InferRequestType<(typeof client.tasks.tasks)[':message_id']['retry']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.tasks[':message_id'].retry.index.$post(args, options))
}

export async function getTasksTasksStatusIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tasks.tasks.status.index.$get(undefined, options))
}

export async function getTasksWorkersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tasks.workers.index.$get(undefined, options))
}
