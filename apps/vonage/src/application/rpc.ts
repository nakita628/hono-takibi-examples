import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getAppId(
  args: InferRequestType<(typeof client)[':app_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':app_id'].$get(args, options))
}

export async function putAppId(
  args: InferRequestType<(typeof client)[':app_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':app_id'].$put(args, options))
}

export async function deleteAppId(
  args: InferRequestType<(typeof client)[':app_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':app_id'].$delete(args, options))
}
