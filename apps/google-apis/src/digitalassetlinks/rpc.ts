import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AssetlinksBulkCheck(
  args: InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['assetlinks:bulkCheck'].$post(args, options))
}

export async function getV1AssetlinksCheck(
  args: InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['assetlinks:check'].$get(args, options))
}

export async function getV1StatementsList(
  args: InferRequestType<(typeof client.v1)['statements:list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['statements:list'].$get(args, options))
}
