import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGcrFluxDlr(
  args: InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gcr.flux_dlr.$get(args, options))
}

export async function getTrappedFluxMean(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trapped.flux_mean.$get(args, options))
}

export async function getTrappedFluxPercentile(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trapped.flux_percentile.$get(args, options))
}
