import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2InstanceDetachLun(
  args: InferRequestType<(typeof client.v2)[':instance:detachLun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':instance:detachLun'].$post(args, options))
}

export async function getV2LocationInstanceProvisioningSettingsFetch(
  args: InferRequestType<
    (typeof client.v2)[':location']['instanceProvisioningSettings:fetch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':location']['instanceProvisioningSettings:fetch'].$get(args, options),
  )
}

export async function getV2LocationNetworksListNetworkUsage(
  args: InferRequestType<(typeof client.v2)[':location']['networks:listNetworkUsage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':location']['networks:listNetworkUsage'].$get(args, options),
  )
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2NameLocations(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].locations.$get(args, options))
}

export async function postV2NameDisableInteractiveSerialConsole(
  args: InferRequestType<(typeof client.v2)[':name:disableInteractiveSerialConsole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':name:disableInteractiveSerialConsole'].$post(args, options),
  )
}

export async function postV2NameEnableInteractiveSerialConsole(
  args: InferRequestType<(typeof client.v2)[':name:enableInteractiveSerialConsole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:enableInteractiveSerialConsole'].$post(args, options))
}

export async function postV2NameEvict(
  args: InferRequestType<(typeof client.v2)[':name:evict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:evict'].$post(args, options))
}

export async function postV2NameRename(
  args: InferRequestType<(typeof client.v2)[':name:rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:rename'].$post(args, options))
}

export async function postV2NameReset(
  args: InferRequestType<(typeof client.v2)[':name:reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:reset'].$post(args, options))
}

export async function postV2NameStart(
  args: InferRequestType<(typeof client.v2)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:start'].$post(args, options))
}

export async function postV2NameStop(
  args: InferRequestType<(typeof client.v2)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:stop'].$post(args, options))
}

export async function getV2ParentInstances(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].instances.$get(args, options))
}

export async function postV2ParentInstances(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].instances.$post(args, options))
}

export async function getV2ParentLuns(
  args: InferRequestType<(typeof client.v2)[':parent']['luns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].luns.$get(args, options))
}

export async function getV2ParentNetworks(
  args: InferRequestType<(typeof client.v2)[':parent']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].networks.$get(args, options))
}

export async function getV2ParentNfsShares(
  args: InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].nfsShares.$get(args, options))
}

export async function postV2ParentNfsShares(
  args: InferRequestType<(typeof client.v2)[':parent']['nfsShares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].nfsShares.$post(args, options))
}

export async function postV2ParentProvisioningConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].provisioningConfigs.$post(args, options))
}

export async function postV2ParentProvisioningConfigsSubmit(
  args: InferRequestType<(typeof client.v2)[':parent']['provisioningConfigs:submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':parent']['provisioningConfigs:submit'].$post(args, options),
  )
}

export async function getV2ParentProvisioningQuotas(
  args: InferRequestType<(typeof client.v2)[':parent']['provisioningQuotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].provisioningQuotas.$get(args, options))
}

export async function getV2ParentSnapshots(
  args: InferRequestType<(typeof client.v2)[':parent']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].snapshots.$get(args, options))
}

export async function postV2ParentSnapshots(
  args: InferRequestType<(typeof client.v2)[':parent']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].snapshots.$post(args, options))
}

export async function getV2ParentSshKeys(
  args: InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].sshKeys.$get(args, options))
}

export async function postV2ParentSshKeys(
  args: InferRequestType<(typeof client.v2)[':parent']['sshKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].sshKeys.$post(args, options))
}

export async function getV2ParentVolumes(
  args: InferRequestType<(typeof client.v2)[':parent']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].volumes.$get(args, options))
}

export async function postV2VolumeSnapshotRestoreVolumeSnapshot(
  args: InferRequestType<(typeof client.v2)[':volumeSnapshot:restoreVolumeSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':volumeSnapshot:restoreVolumeSnapshot'].$post(args, options),
  )
}

export async function postV2VolumeResize(
  args: InferRequestType<(typeof client.v2)[':volume:resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':volume:resize'].$post(args, options))
}
