import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProductEpid(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product[':epid'].$get(args, options))
}

export async function getProductSummarySearch(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product_summary.search.$get(args, options))
}
