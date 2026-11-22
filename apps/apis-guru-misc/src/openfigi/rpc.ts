import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMapping(
  args: InferRequestType<typeof client.mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mapping.$post(args, options))
}

export async function getMappingValuesKey(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mapping.values[':key'].$get(args, options))
}
