import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ParentChannels(
  args: InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].channels.$get(args, options))
}

export async function getV1ParentPlatforms(
  args: InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].platforms.$get(args, options))
}

export async function getV1ParentReleases(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].releases.$get(args, options))
}

export async function getV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$get(args, options))
}
