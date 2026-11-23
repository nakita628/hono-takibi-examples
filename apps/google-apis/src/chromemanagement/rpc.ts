import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1CustomerAppsCountChromeAppRequests(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['apps:countChromeAppRequests'].$get(args, options),
  )
}

export async function getV1CustomerReportsCountChromeBrowsersNeedingAttention(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(args, options),
  )
}

export async function getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDate(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(
      args,
      options,
    ),
  )
}

export async function getV1CustomerReportsCountChromeDevicesThatNeedAttention(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(args, options),
  )
}

export async function getV1CustomerReportsCountChromeHardwareFleetDevices(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(args, options),
  )
}

export async function getV1CustomerReportsCountChromeVersions(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countChromeVersions'].$get(args, options),
  )
}

export async function getV1CustomerReportsCountInstalledApps(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:countInstalledApps'].$get(args, options),
  )
}

export async function getV1CustomerReportsFindInstalledAppDevices(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':customer']['reports:findInstalledAppDevices'].$get(args, options),
  )
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function getV1ParentTelemetryDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].telemetry.devices.$get(args, options))
}

export async function getV1ParentTelemetryEvents(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].telemetry.events.$get(args, options))
}

export async function getV1ParentTelemetryUsers(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].telemetry.users.$get(args, options))
}
