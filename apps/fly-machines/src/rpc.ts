import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function postApps(
  args: InferRequestType<typeof client.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$post(args, options))
}

export async function getAppsAppName(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].$get(args, options))
}

export async function deleteAppsAppName(
  args: InferRequestType<(typeof client.apps)[':app_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].$delete(args, options))
}

export async function getAppsAppNameMachines(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].machines.$get(args, options))
}

export async function postAppsAppNameMachines(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].machines.$post(args, options))
}

export async function getAppsAppNameMachinesMachineId(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].machines[':machine_id'].$get(args, options))
}

export async function postAppsAppNameMachinesMachineId(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].machines[':machine_id'].$post(args, options))
}

export async function deleteAppsAppNameMachinesMachineId(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].$delete(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdCordon(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].cordon.$post(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdEvents(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].events.$get(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdExec(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].exec.$post(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdLease(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].lease.$get(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdLease(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].lease.$post(args, options),
  )
}

export async function deleteAppsAppNameMachinesMachineIdLease(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].lease.$delete(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdMetadata(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].metadata.$get(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdMetadataKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$post(args, options),
  )
}

export async function deleteAppsAppNameMachinesMachineIdMetadataKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$delete(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdPs(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].ps.$get(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdRestart(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].restart.$post(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdSignal(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].signal.$post(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdStart(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].start.$post(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdStop(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].stop.$post(args, options),
  )
}

export async function postAppsAppNameMachinesMachineIdUncordon(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].uncordon.$post(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdVersions(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].versions.$get(args, options),
  )
}

export async function getAppsAppNameMachinesMachineIdWait(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].machines[':machine_id'].wait.$get(args, options),
  )
}

export async function getAppsAppNameVolumes(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].volumes.$get(args, options))
}

export async function postAppsAppNameVolumes(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].volumes.$post(args, options))
}

export async function getAppsAppNameVolumesVolumeId(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].volumes[':volume_id'].$get(args, options))
}

export async function postAppsAppNameVolumesVolumeId(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].volumes[':volume_id'].$post(args, options))
}

export async function deleteAppsAppNameVolumesVolumeId(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_name'].volumes[':volume_id'].$delete(args, options))
}

export async function putAppsAppNameVolumesVolumeIdExtend(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].volumes[':volume_id'].extend.$put(args, options),
  )
}

export async function getAppsAppNameVolumesVolumeIdSnapshots(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(args, options),
  )
}

export async function postAppsAppNameVolumesVolumeIdSnapshots(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':app_name'].volumes[':volume_id'].snapshots.$post(args, options),
  )
}
