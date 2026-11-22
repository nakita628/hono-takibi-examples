import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function deleteV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$delete(args, options))
}

export async function patchV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$patch(args, options))
}

export async function getV1betaNameLocations(
  args: InferRequestType<(typeof client.v1beta)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].locations.$get(args, options))
}

export async function getV1betaNameOperations(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].operations.$get(args, options))
}

export async function getV1betaParentWorkflows(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workflows.$get(args, options))
}

export async function postV1betaParentWorkflows(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workflows.$post(args, options))
}
