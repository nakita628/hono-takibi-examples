import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function getWebResource(
  args: InferRequestType<typeof client.webResource.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource.$get(args, options))
}

export async function postWebResource(
  args: InferRequestType<typeof client.webResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource.$post(args, options))
}

export async function getWebResourceId(
  args: InferRequestType<(typeof client.webResource)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource[':id'].$get(args, options))
}

export async function putWebResourceId(
  args: InferRequestType<(typeof client.webResource)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource[':id'].$put(args, options))
}

export async function deleteWebResourceId(
  args: InferRequestType<(typeof client.webResource)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource[':id'].$delete(args, options))
}

export async function patchWebResourceId(
  args: InferRequestType<(typeof client.webResource)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webResource[':id'].$patch(args, options))
}
