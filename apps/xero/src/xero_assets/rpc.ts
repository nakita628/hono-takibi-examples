import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssets(
  args: InferRequestType<typeof client.Assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Assets.$get(args, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.Assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Assets.$post(args, options))
}

export async function getAssetsId(
  args: InferRequestType<(typeof client.Assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Assets[':id'].$get(args, options))
}

export async function getAssetTypes(
  args: InferRequestType<typeof client.AssetTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AssetTypes.$get(args, options))
}

export async function postAssetTypes(
  args: InferRequestType<typeof client.AssetTypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AssetTypes.$post(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.$get(args, options))
}
