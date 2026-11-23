import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCustomsearchV1(
  args: InferRequestType<typeof client.customsearch.v1.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customsearch.v1.$get(args, options))
}

export async function getCustomsearchV1Siterestrict(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customsearch.v1.siterestrict.$get(args, options))
}
