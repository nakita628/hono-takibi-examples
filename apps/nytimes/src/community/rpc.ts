import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUserContentByDateJson(
  args: InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-content']['by-date.json'].$get(args, options))
}

export async function getUserContentRecentJson(options?: ClientRequestOptions) {
  return await parseResponse(client['user-content']['recent.json'].$get(undefined, options))
}

export async function getUserContentUrlJson(
  args: InferRequestType<(typeof client)['user-content']['url.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-content']['url.json'].$get(args, options))
}

export async function getUserContentUserJson(
  args: InferRequestType<(typeof client)['user-content']['user.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-content']['user.json'].$get(args, options))
}
