import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$get(args, options))
}

export async function getV2beta1NameOperations(
  args: InferRequestType<(typeof client.v2beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].operations.$get(args, options))
}
