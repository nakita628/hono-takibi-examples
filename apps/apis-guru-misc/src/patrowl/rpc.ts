import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getClean(options?: ClientRequestOptions) {
  return await parseResponse(client.clean.$get(undefined, options))
}

export async function getCleanScanId(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clean[':scanId'].$get(args, options))
}

export async function getGetfindingsScanId(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getfindings[':scanId'].$get(args, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getLiveness(options?: ClientRequestOptions) {
  return await parseResponse(client.liveness.$get(undefined, options))
}

export async function getReadiness(options?: ClientRequestOptions) {
  return await parseResponse(client.readiness.$get(undefined, options))
}

export async function getReloadconfig(options?: ClientRequestOptions) {
  return await parseResponse(client.reloadconfig.$get(undefined, options))
}

export async function postStartscan(
  args: InferRequestType<typeof client.startscan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.startscan.$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getStatusScanId(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':scanId'].$get(args, options))
}

export async function getStopScanId(
  args: InferRequestType<(typeof client.stop)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stop[':scanId'].$get(args, options))
}

export async function getStopscans(options?: ClientRequestOptions) {
  return await parseResponse(client.stopscans.$get(undefined, options))
}

export async function getTest(options?: ClientRequestOptions) {
  return await parseResponse(client.test.$get(undefined, options))
}
