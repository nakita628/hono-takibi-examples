import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1PlaceActionTypeMetadata(
  args: InferRequestType<typeof client.v1.placeActionTypeMetadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.placeActionTypeMetadata.$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1ParentPlaceActionLinks(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].placeActionLinks.$get(args, options))
}

export async function postV1ParentPlaceActionLinks(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].placeActionLinks.$post(args, options))
}
