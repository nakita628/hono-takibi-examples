import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function getEstimatesPrice(
  args: InferRequestType<typeof client.estimates.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.price.$get(args, options))
}

export async function getEstimatesTime(
  args: InferRequestType<typeof client.estimates.time.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.time.$get(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getHistory(
  args: InferRequestType<typeof client.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.$get(args, options))
}
