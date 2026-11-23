import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssetsRenderId(
  args: InferRequestType<(typeof client.assets.render)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.render[':id'].$get(args, options))
}

export async function getAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$get(args, options))
}

export async function deleteAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$delete(args, options))
}

export async function postRender(
  args: InferRequestType<typeof client.render.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.render.$post(args, options))
}

export async function getRenderId(
  args: InferRequestType<(typeof client.render)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.render[':id'].$get(args, options))
}
