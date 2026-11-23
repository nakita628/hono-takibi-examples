import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Domains(
  args: InferRequestType<typeof client.v1beta1.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.domains.$get(args, options))
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function getV1beta1ParentTrafficStats(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['trafficStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].trafficStats.$get(args, options))
}
