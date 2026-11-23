import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHello(options?: ClientRequestOptions) {
  return await parseResponse(client.hello.$get(undefined, options))
}

export async function getReady(options?: ClientRequestOptions) {
  return await parseResponse(client.ready.$get(undefined, options))
}

export async function getTykApis(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.apis.$get(undefined, options))
}

export async function postTykApis(
  args: InferRequestType<typeof client.tyk.apis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.$post(args, options))
}

export async function getTykApisApiID(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis[':apiID'].$get(args, options))
}

export async function putTykApisApiID(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis[':apiID'].$put(args, options))
}

export async function deleteTykApisApiID(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis[':apiID'].$delete(args, options))
}

export async function getTykApisApiIDVersions(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis[':apiID'].versions.$get(args, options))
}

export async function getTykApisOas(
  args: InferRequestType<typeof client.tyk.apis.oas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas.$get(args, options))
}

export async function postTykApisOas(
  args: InferRequestType<typeof client.tyk.apis.oas.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas.$post(args, options))
}

export async function getTykApisOasApiID(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].$get(args, options))
}

export async function putTykApisOasApiID(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].$put(args, options))
}

export async function deleteTykApisOasApiID(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].$delete(args, options))
}

export async function patchTykApisOasApiID(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].$patch(args, options))
}

export async function getTykApisOasApiIDExport(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].export.$get(args, options))
}

export async function getTykApisOasApiIDVersions(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas[':apiID'].versions.$get(args, options))
}

export async function getTykApisOasExport(
  args: InferRequestType<typeof client.tyk.apis.oas.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas.export.$get(args, options))
}

export async function postTykApisOasImport(
  args: InferRequestType<typeof client.tyk.apis.oas.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.apis.oas.import.$post(args, options))
}

export async function getTykMcps(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.mcps.$get(undefined, options))
}

export async function postTykMcps(
  args: InferRequestType<typeof client.tyk.mcps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.mcps.$post(args, options))
}

export async function getTykMcpsApiID(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.mcps[':apiID'].$get(args, options))
}

export async function putTykMcpsApiID(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.mcps[':apiID'].$put(args, options))
}

export async function deleteTykMcpsApiID(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.mcps[':apiID'].$delete(args, options))
}

export async function deleteTykCacheApiID(
  args: InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.cache[':apiID'].$delete(args, options))
}

export async function deleteTykCacheJwksApiID(
  args: InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.cache.jwks[':apiID'].$delete(args, options))
}

export async function deleteTykCacheJwks(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.cache.jwks.$delete(undefined, options))
}

export async function getTykCerts(
  args: InferRequestType<typeof client.tyk.certs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.certs.$get(args, options))
}

export async function postTykCerts(
  args: InferRequestType<typeof client.tyk.certs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.certs.$post(args, options))
}

export async function getTykCertsCertID(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.certs[':certID'].$get(args, options))
}

export async function deleteTykCertsCertID(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.certs[':certID'].$delete(args, options))
}

export async function postTykDebug(
  args: InferRequestType<typeof client.tyk.debug.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.debug.$post(args, options))
}

export async function getTykKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.keys.$get(undefined, options))
}

export async function postTykKeys(
  args: InferRequestType<typeof client.tyk.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys.$post(args, options))
}

export async function getTykKeysKeyID(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys[':keyID'].$get(args, options))
}

export async function putTykKeysKeyID(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys[':keyID'].$put(args, options))
}

export async function postTykKeysKeyID(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys[':keyID'].$post(args, options))
}

export async function deleteTykKeysKeyID(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys[':keyID'].$delete(args, options))
}

export async function postTykKeysCreate(
  args: InferRequestType<typeof client.tyk.keys.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys.create.$post(args, options))
}

export async function postTykKeysPolicyKeyID(
  args: InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys.policy[':keyID'].$post(args, options))
}

export async function postTykKeysPreview(
  args: InferRequestType<typeof client.tyk.keys.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.keys.preview.$post(args, options))
}

export async function getTykOauthClientsApiID(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients[':apiID'].$get(args, options))
}

export async function getTykOauthClientsApiIDKeyName(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$get(args, options))
}

export async function putTykOauthClientsApiIDKeyName(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$put(args, options))
}

export async function deleteTykOauthClientsApiIDKeyName(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$delete(args, options))
}

export async function putTykOauthClientsApiIDKeyNameRotate(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tyk.oauth.clients[':apiID'][':keyName'].rotate.$put(args, options),
  )
}

export async function getTykOauthClientsApiIDKeyNameTokens(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(args, options),
  )
}

export async function getTykOauthClientsApisAppID(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients.apis[':appID'].$get(args, options))
}

export async function postTykOauthClientsCreate(
  args: InferRequestType<typeof client.tyk.oauth.clients.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.clients.create.$post(args, options))
}

export async function deleteTykOauthRefreshKeyName(
  args: InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.refresh[':keyName'].$delete(args, options))
}

export async function postTykOauthRevoke(
  args: InferRequestType<typeof client.tyk.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.revoke.$post(args, options))
}

export async function postTykOauthRevokeAll(
  args: InferRequestType<typeof client.tyk.oauth.revoke_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.revoke_all.$post(args, options))
}

export async function deleteTykOauthTokens(
  args: InferRequestType<typeof client.tyk.oauth.tokens.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.oauth.tokens.$delete(args, options))
}

export async function getTykOrgKeys(
  args: InferRequestType<typeof client.tyk.org.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.org.keys.$get(args, options))
}

export async function getTykOrgKeysKeyID(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.org.keys[':keyID'].$get(args, options))
}

export async function putTykOrgKeysKeyID(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.org.keys[':keyID'].$put(args, options))
}

export async function postTykOrgKeysKeyID(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.org.keys[':keyID'].$post(args, options))
}

export async function deleteTykOrgKeysKeyID(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.org.keys[':keyID'].$delete(args, options))
}

export async function getTykPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.policies.$get(undefined, options))
}

export async function postTykPolicies(
  args: InferRequestType<typeof client.tyk.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.policies.$post(args, options))
}

export async function getTykPoliciesPolID(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.policies[':polID'].$get(args, options))
}

export async function putTykPoliciesPolID(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.policies[':polID'].$put(args, options))
}

export async function deleteTykPoliciesPolID(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.policies[':polID'].$delete(args, options))
}

export async function getTykReload(
  args: InferRequestType<typeof client.tyk.reload.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.reload.$get(args, options))
}

export async function getTykReloadGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.tyk.reload.group.$get(undefined, options))
}

export async function postListenPathTykBatch(
  args: InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':listen_path'].tyk.batch.$post(args, options))
}

export async function getTykSchema(
  args: InferRequestType<typeof client.tyk.schema.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tyk.schema.$get(args, options))
}
