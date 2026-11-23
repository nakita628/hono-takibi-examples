import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1NameProtectedResourcesSummary(
  args: InferRequestType<(typeof client.v1)[':name']['protectedResourcesSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].protectedResourcesSummary.$get(args, options))
}

export async function getV1ParentCryptoKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cryptoKeys.$get(args, options))
}

export async function getV1ScopeProtectedResourcesSearch(
  args: InferRequestType<(typeof client.v1)[':scope']['protectedResources:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':scope']['protectedResources:search'].$get(args, options))
}
