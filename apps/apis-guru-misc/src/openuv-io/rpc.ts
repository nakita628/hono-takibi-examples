import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getForecast(
  args: InferRequestType<typeof client.forecast.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.$get(args, options))
}

export async function getProtection(
  args: InferRequestType<typeof client.protection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.protection.$get(args, options))
}

export async function getUv(
  args: InferRequestType<typeof client.uv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uv.$get(args, options))
}
