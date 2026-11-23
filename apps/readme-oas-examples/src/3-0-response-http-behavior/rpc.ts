import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCache(
  args: InferRequestType<typeof client.cache.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache.$get(args, options))
}

export async function getStatus302(options?: ClientRequestOptions) {
  return await parseResponse(client.status['302'].$get(undefined, options))
}

export async function getStatus204(options?: ClientRequestOptions) {
  return await parseResponse(client.status['204'].$get(undefined, options))
}
