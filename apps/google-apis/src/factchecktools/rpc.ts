import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha1ClaimsSearch(
  args: InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['claims:search'].$get(args, options))
}

export async function getV1alpha1Pages(
  args: InferRequestType<typeof client.v1alpha1.pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1.pages.$get(args, options))
}

export async function postV1alpha1Pages(
  args: InferRequestType<typeof client.v1alpha1.pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1.pages.$post(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function putV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$put(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}
