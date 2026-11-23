import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAllocation(
  args: InferRequestType<typeof client.allocation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocation.$get(args, options))
}

export async function getAssets(
  args: InferRequestType<typeof client.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$get(args, options))
}

export async function getCloudCost(
  args: InferRequestType<typeof client.cloudCost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudCost.$get(args, options))
}

export async function getInferenceCostTotal(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inferenceCost.total.$get(args, options))
}

export async function getInferenceCostTimeseries(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inferenceCost.timeseries.$get(args, options))
}
