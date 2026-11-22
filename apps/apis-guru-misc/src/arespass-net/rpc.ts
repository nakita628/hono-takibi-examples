import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAbout(
  args: InferRequestType<typeof client.about.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.about.$get(args, options))
}

export async function getEc(
  args: InferRequestType<typeof client.ec.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ec.$get(args, options))
}
