import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function getV1alpha1NameLocations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].locations.$get(args, options))
}

export async function getV1alpha1NameOperations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].operations.$get(args, options))
}

export async function postV1alpha1NameCancel(
  args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
}

export async function getV1alpha1ParentContactCenters(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].contactCenters.$get(args, options))
}

export async function postV1alpha1ParentContactCenters(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].contactCenters.$post(args, options))
}

export async function getV1alpha1ParentQueryContactCenterQuota(
  args: InferRequestType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent:queryContactCenterQuota'].$get(args, options))
}
