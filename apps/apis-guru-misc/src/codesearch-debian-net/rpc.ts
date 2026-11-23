import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchperpackage(
  args: InferRequestType<typeof client.searchperpackage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.searchperpackage.$get(args, options))
}
