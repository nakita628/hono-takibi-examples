import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiGetProfile(
  args: InferRequestType<typeof client.api.get_profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.get_profile.$get(args, options))
}

export async function getApiRequestToken(
  args: InferRequestType<typeof client.api.request_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.request_token.$get(args, options))
}
