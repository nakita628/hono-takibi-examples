import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWellKnownJwksJson(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['jwks.json'].$get(undefined, options))
}

export async function getWellKnownOpenidConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['openid-configuration'].$get(undefined, options))
}

export async function getAdminClients(
  args: InferRequestType<typeof client.admin.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients.$get(args, options))
}

export async function postAdminClients(
  args: InferRequestType<typeof client.admin.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients.$post(args, options))
}

export async function getAdminClientsId(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].$get(args, options))
}

export async function putAdminClientsId(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].$put(args, options))
}

export async function deleteAdminClientsId(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].$delete(args, options))
}

export async function patchAdminClientsId(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].$patch(args, options))
}

export async function putAdminClientsIdLifespans(
  args: InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].lifespans.$put(args, options))
}

export async function postAdminClientsIdSecretsRotate(
  args: InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].secrets.rotate.$post(args, options))
}

export async function deleteAdminClientsIdSecretsRotate(
  args: InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.clients[':id'].secrets.rotate.$delete(args, options))
}

export async function getAdminKeysSet(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'].$get(args, options))
}

export async function putAdminKeysSet(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'].$put(args, options))
}

export async function postAdminKeysSet(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'].$post(args, options))
}

export async function deleteAdminKeysSet(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'].$delete(args, options))
}

export async function getAdminKeysSetKid(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'][':kid'].$get(args, options))
}

export async function putAdminKeysSetKid(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'][':kid'].$put(args, options))
}

export async function deleteAdminKeysSetKid(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.keys[':set'][':kid'].$delete(args, options))
}

export async function getAdminOauth2AuthRequestsConsent(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.consent.$get(args, options))
}

export async function putAdminOauth2AuthRequestsConsentAccept(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.consent.accept.$put(args, options))
}

export async function putAdminOauth2AuthRequestsConsentReject(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.consent.reject.$put(args, options))
}

export async function putAdminOauth2AuthRequestsDeviceAccept(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.device.accept.$put(args, options))
}

export async function getAdminOauth2AuthRequestsLogin(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.login.$get(args, options))
}

export async function putAdminOauth2AuthRequestsLoginAccept(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.login.accept.$put(args, options))
}

export async function putAdminOauth2AuthRequestsLoginReject(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.login.reject.$put(args, options))
}

export async function getAdminOauth2AuthRequestsLogout(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.logout.$get(args, options))
}

export async function putAdminOauth2AuthRequestsLogoutAccept(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.logout.accept.$put(args, options))
}

export async function putAdminOauth2AuthRequestsLogoutReject(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.requests.logout.reject.$put(args, options))
}

export async function getAdminOauth2AuthSessionsConsent(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.sessions.consent.$get(args, options))
}

export async function deleteAdminOauth2AuthSessionsConsent(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.sessions.consent.$delete(args, options))
}

export async function deleteAdminOauth2AuthSessionsLogin(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.auth.sessions.login.$delete(args, options))
}

export async function postAdminOauth2Introspect(
  args: InferRequestType<typeof client.admin.oauth2.introspect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.introspect.$post(args, options))
}

export async function deleteAdminOauth2Tokens(
  args: InferRequestType<typeof client.admin.oauth2.tokens.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth2.tokens.$delete(args, options))
}

export async function getAdminTrustGrantsJwtBearerIssuers(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$get(args, options))
}

export async function postAdminTrustGrantsJwtBearerIssuers(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$post(args, options))
}

export async function getAdminTrustGrantsJwtBearerIssuersId(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.trust.grants['jwt-bearer'].issuers[':id'].$get(args, options),
  )
}

export async function deleteAdminTrustGrantsJwtBearerIssuersId(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.trust.grants['jwt-bearer'].issuers[':id'].$delete(args, options),
  )
}

export async function postCredentials(
  args: InferRequestType<typeof client.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.$post(args, options))
}

export async function getHealthAlive(options?: ClientRequestOptions) {
  return await parseResponse(client.health.alive.$get(undefined, options))
}

export async function getHealthReady(options?: ClientRequestOptions) {
  return await parseResponse(client.health.ready.$get(undefined, options))
}

export async function getOauth2Auth(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.auth.$get(undefined, options))
}

export async function postOauth2DeviceAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.device.auth.$post(undefined, options))
}

export async function getOauth2DeviceVerify(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.device.verify.$get(undefined, options))
}

export async function postOauth2Register(
  args: InferRequestType<typeof client.oauth2.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.register.$post(args, options))
}

export async function getOauth2RegisterId(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.register[':id'].$get(args, options))
}

export async function putOauth2RegisterId(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.register[':id'].$put(args, options))
}

export async function deleteOauth2RegisterId(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.register[':id'].$delete(args, options))
}

export async function postOauth2Revoke(
  args: InferRequestType<typeof client.oauth2.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.revoke.$post(args, options))
}

export async function getOauth2SessionsLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.sessions.logout.$get(undefined, options))
}

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function getUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.userinfo.$get(undefined, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
