import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApi10Calculate(
  args: InferRequestType<(typeof client.api)['1.0']['calculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1.0'].calculate.$post(args, options))
}

export async function getApi10Programs(options?: ClientRequestOptions) {
  return await parseResponse(client.api['1.0'].programs.$get(undefined, options))
}
