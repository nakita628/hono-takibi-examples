import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$get(undefined, options))
}

export async function putAnything(
  args: InferRequestType<typeof client.anything.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.$put(args, options))
}

export async function postAnything(
  args: InferRequestType<typeof client.anything.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.$post(args, options))
}
