import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountsAccountIdApps(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].apps.$get(args, options))
}

export async function postAccountsAccountIdApps(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].apps.$post(args, options))
}

export async function getAppsAppIdKeys(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].keys.$get(args, options))
}

export async function postAppsAppIdKeys(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].keys.$post(args, options))
}

export async function patchAppsAppIdKeysKeyId(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].keys[':key_id'].$patch(args, options))
}

export async function postAppsAppIdKeysKeyIdRevoke(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].keys[':key_id'].revoke.$post(args, options))
}

export async function getAppsAppIdNamespaces(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].namespaces.$get(args, options))
}

export async function postAppsAppIdNamespaces(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].namespaces.$post(args, options))
}

export async function deleteAppsAppIdNamespacesNamespaceId(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_id'].namespaces[':namespace_id'].$delete(args, options),
  )
}

export async function patchAppsAppIdNamespacesNamespaceId(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_id'].namespaces[':namespace_id'].$patch(args, options),
  )
}

export async function getAppsAppIdQueues(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].queues.$get(args, options))
}

export async function postAppsAppIdQueues(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].queues.$post(args, options))
}

export async function deleteAppsAppIdQueuesQueueId(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].queues[':queue_id'].$delete(args, options))
}

export async function getAppsAppIdRules(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].rules.$get(args, options))
}

export async function postAppsAppIdRules(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].rules.$post(args, options))
}

export async function getAppsAppIdRulesRuleId(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].rules[':rule_id'].$get(args, options))
}

export async function deleteAppsAppIdRulesRuleId(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].rules[':rule_id'].$delete(args, options))
}

export async function patchAppsAppIdRulesRuleId(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_id'].rules[':rule_id'].$patch(args, options))
}

export async function deleteAppsId(
  args: InferRequestType<(typeof client.apps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':id'].$delete(args, options))
}

export async function patchAppsId(
  args: InferRequestType<(typeof client.apps)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':id'].$patch(args, options))
}

export async function postAppsIdPkcs12(
  args: InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':id'].pkcs12.$post(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}
