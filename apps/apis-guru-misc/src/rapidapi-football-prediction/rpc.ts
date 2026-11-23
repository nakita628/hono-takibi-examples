import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2ListFederations(
  args: InferRequestType<(typeof client.api.v2)['list-federations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['list-federations'].$get(args, options))
}

export async function getApiV2ListMarkets(
  args: InferRequestType<(typeof client.api.v2)['list-markets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['list-markets'].$get(args, options))
}

export async function getApiV2PerformanceStats(
  args: InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['performance-stats'].$get(args, options))
}

export async function getApiV2Predictions(
  args: InferRequestType<typeof client.api.v2.predictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.predictions.$get(args, options))
}

export async function getApiV2PredictionsId(
  args: InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.predictions[':id'].$get(args, options))
}
