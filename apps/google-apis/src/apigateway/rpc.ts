import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alpha2Name(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].$get(args, options))
}

export async function deleteV1alpha2Name(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].$delete(args, options))
}

export async function getV1alpha2NameLocations(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].locations.$get(args, options))
}

export async function getV1alpha2NameOperations(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name'].operations.$get(args, options))
}

export async function postV1alpha2NameCancel(
  args: InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':name:cancel'].$post(args, options))
}

export async function getV1alpha2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1alpha2)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1alpha2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1alpha2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1alpha2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1alpha2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha2[':resource:testIamPermissions'].$post(args, options))
}
