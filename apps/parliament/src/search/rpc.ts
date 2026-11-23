import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDescription(options?: ClientRequestOptions) {
  return await parseResponse(client.description.$get(undefined, options))
}

export async function getQuery(
  args: InferRequestType<typeof client.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$get(args, options))
}

export async function getQueryExtension(
  args: InferRequestType<(typeof client)['query.{extension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query.{extension}'].$get(args, options))
}
