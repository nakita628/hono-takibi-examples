import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingId(
  args: InferRequestType<(typeof client.anything)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':id'].$get(args, options))
}

export async function postAnythingId(
  args: InferRequestType<(typeof client.anything)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':id'].$post(args, options))
}

export async function getAnythingIdAction(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':id'][':action'].$get(args, options))
}

export async function getAnythingIdActionId(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':id'][':action'][':id'].$get(args, options))
}

export async function getAnythingIdOverride(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':id'].override.$get(args, options))
}
