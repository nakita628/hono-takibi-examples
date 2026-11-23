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

export async function getId(
  args: InferRequestType<(typeof client)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$get(args, options))
}

export async function putId(
  args: InferRequestType<(typeof client)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$put(args, options))
}

export async function deleteId(
  args: InferRequestType<(typeof client)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$delete(args, options))
}
