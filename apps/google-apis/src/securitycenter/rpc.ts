import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$get(args, options))
}

export async function patchV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$patch(args, options))
}

export async function getV1beta2NameCalculate(
  args: InferRequestType<(typeof client.v1beta2)[':name:calculate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:calculate'].$get(args, options))
}
