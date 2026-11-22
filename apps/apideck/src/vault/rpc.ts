import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVaultAuthorizeServiceIdApplicationId(
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.authorize[':service_id'][':application_id'].$get(args, options),
  )
}

export async function getVaultCallback(
  args: InferRequestType<typeof client.vault.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.callback.$get(args, options))
}

export async function getVaultConnections(
  args: InferRequestType<typeof client.vault.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.connections.$get(args, options))
}

export async function getVaultConnectionsUnifiedApiServiceId(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].$get(args, options),
  )
}

export async function postVaultConnectionsUnifiedApiServiceId(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].$post(args, options),
  )
}

export async function deleteVaultConnectionsUnifiedApiServiceId(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].$delete(args, options),
  )
}

export async function patchVaultConnectionsUnifiedApiServiceId(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].$patch(args, options),
  )
}

export async function postVaultConnectionsUnifiedApiServiceIdImport(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].import.$post(args, options),
  )
}

export async function postVaultConnectionsUnifiedApiServiceIdToken(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'].token.$post(args, options),
  )
}

export async function getVaultConnectionsUnifiedApiServiceIdResourceConfig(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(args, options),
  )
}

export async function patchVaultConnectionsUnifiedApiServiceIdResourceConfig(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.connections[':unified_api'][':service_id'][':resource'].config.$patch(
      args,
      options,
    ),
  )
}

export async function getVaultConsumers(
  args: InferRequestType<typeof client.vault.consumers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers.$get(args, options))
}

export async function postVaultConsumers(
  args: InferRequestType<typeof client.vault.consumers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers.$post(args, options))
}

export async function getVaultConsumersConsumerId(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers[':consumer_id'].$get(args, options))
}

export async function deleteVaultConsumersConsumerId(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers[':consumer_id'].$delete(args, options))
}

export async function patchVaultConsumersConsumerId(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers[':consumer_id'].$patch(args, options))
}

export async function getVaultConsumersConsumerIdStats(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.consumers[':consumer_id'].stats.$get(args, options))
}

export async function getVaultLogs(
  args: InferRequestType<typeof client.vault.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.logs.$get(args, options))
}

export async function getVaultRevokeServiceIdApplicationId(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vault.revoke[':service_id'][':application_id'].$get(args, options),
  )
}

export async function postVaultSessions(
  args: InferRequestType<typeof client.vault.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.sessions.$post(args, options))
}
