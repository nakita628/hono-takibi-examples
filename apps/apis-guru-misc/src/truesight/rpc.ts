import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHardwareActionsDeviceIdCollectNow(
  args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hardware.actions[':deviceId']['collect-now'].$post(args, options),
  )
}

export async function postHardwareActionsDeviceIdRediscover(
  args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.actions[':deviceId'].rediscover.$post(args, options))
}

export async function postHardwareActionsDeviceIdReinitialize(
  args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.actions[':deviceId'].reinitialize.$post(args, options))
}

export async function postHardwareActionsDeviceIdRemove(
  args: InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.actions[':deviceId'].remove.$post(args, options))
}

export async function postHardwareActionsDeviceIdResetErrorCount(
  args: InferRequestType<
    (typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hardware.actions[':deviceId']['reset-error-count'].$post(args, options),
  )
}

export async function getHardwareApplications(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.applications.$get(args, options))
}

export async function getHardwareApplicationsApplicationId(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.applications[':applicationId'].$get(args, options))
}

export async function getHardwareDeviceMonitorsDeviceId(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware['device-monitors'][':deviceId'].$get(args, options))
}

export async function getHardwareDevices(
  args: InferRequestType<typeof client.hardware.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.devices.$get(args, options))
}

export async function getHardwareDevicesSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.hardware['devices-summary'].$get(undefined, options))
}

export async function getHardwareDevicesDeviceId(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.devices[':deviceId'].$get(args, options))
}

export async function getHardwareDevicesDeviceIdAgent(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.devices[':deviceId'].agent.$get(args, options))
}

export async function getHardwareDevicesDeviceIdAgentDevices(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hardware.devices[':deviceId']['agent-devices'].$get(args, options),
  )
}

export async function getHardwareDevicesDeviceIdParameterHistory(
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hardware.devices[':deviceId']['parameter-history'].$get(args, options),
  )
}

export async function getHardwareEnergyUsageDeviceId(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware['energy-usage'][':deviceId'].$get(args, options))
}

export async function getHardwareGroups(
  args: InferRequestType<typeof client.hardware.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.groups.$get(args, options))
}

export async function getHardwareGroupsGroupId(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.groups[':groupId'].$get(args, options))
}

export async function putHardwareGroupsGroupId(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.groups[':groupId'].$put(args, options))
}

export async function getHardwareHeatingMarginDevices(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware['heating-margin-devices'].$get(args, options))
}

export async function getHardwareHistory(
  args: InferRequestType<typeof client.hardware.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.history.$get(args, options))
}

export async function getHardwareSearchDevices(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware['search-devices'].$get(args, options))
}

export async function getHardwareServices(
  args: InferRequestType<typeof client.hardware.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.services.$get(args, options))
}

export async function getHardwareServicesServiceId(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.services[':serviceId'].$get(args, options))
}
