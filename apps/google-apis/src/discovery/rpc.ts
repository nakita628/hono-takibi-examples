import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApis(
  args: InferRequestType<typeof client.apis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.$get(args, options))
}

export async function getApisApiVersionRest(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':api'][':version'].rest.$get(args, options))
}
