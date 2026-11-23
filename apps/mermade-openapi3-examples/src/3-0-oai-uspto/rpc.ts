import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getDatasetVersionFields(
  args: InferRequestType<(typeof client)[':dataset'][':version']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':dataset'][':version'].fields.$get(args, options))
}

export async function postDatasetVersionRecords(
  args: InferRequestType<(typeof client)[':dataset'][':version']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':dataset'][':version'].records.$post(args, options))
}
