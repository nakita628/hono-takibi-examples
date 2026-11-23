import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAuthIntrospect(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.introspect.$get(undefined, options))
}

export async function postApiV1Itemusages(
  args: InferRequestType<typeof client.api.v1.itemusages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.itemusages.$post(args, options))
}

export async function postApiV1Signinattempts(
  args: InferRequestType<typeof client.api.v1.signinattempts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.signinattempts.$post(args, options))
}
