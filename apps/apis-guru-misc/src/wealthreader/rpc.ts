import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEntities(options?: ClientRequestOptions) {
  return await parseResponse(client.entities.$get(undefined, options))
}

export async function postEntities(
  args: InferRequestType<typeof client.entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.$post(args, options))
}

export async function getErrorCodes(
  args: InferRequestType<(typeof client)['error-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['error-codes'].$get(args, options))
}
