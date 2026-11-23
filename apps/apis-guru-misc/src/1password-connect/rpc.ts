import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActivity(
  args: InferRequestType<typeof client.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity.$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getHeartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client.heartbeat.$get(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getVaults(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults.$get(args, options))
}

export async function getVaultsVaultUuid(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].$get(args, options))
}

export async function getVaultsVaultUuidItems(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items.$get(args, options))
}

export async function postVaultsVaultUuidItems(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items.$post(args, options))
}

export async function getVaultsVaultUuidItemsItemUuid(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$get(args, options))
}

export async function putVaultsVaultUuidItemsItemUuid(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$put(args, options))
}

export async function deleteVaultsVaultUuidItemsItemUuid(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$delete(args, options))
}

export async function patchVaultsVaultUuidItemsItemUuid(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$patch(args, options))
}

export async function getVaultsVaultUuidItemsItemUuidFiles(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(args, options),
  )
}

export async function getVaultsVaultUuidItemsItemUuidFilesFileUuid(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(args, options),
  )
}

export async function getVaultsVaultUuidItemsItemUuidFilesFileUuidContent(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(args, options),
  )
}
