import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaAccessPolicies(
  args: InferRequestType<typeof client.v1beta.accessPolicies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accessPolicies.$get(args, options))
}

export async function postV1betaAccessPolicies(
  args: InferRequestType<typeof client.v1beta.accessPolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accessPolicies.$post(args, options))
}

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

export async function getV1betaParentAccessLevels(
  args: InferRequestType<(typeof client.v1beta)[':parent']['accessLevels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].accessLevels.$get(args, options))
}

export async function postV1betaParentAccessLevels(
  args: InferRequestType<(typeof client.v1beta)[':parent']['accessLevels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].accessLevels.$post(args, options))
}

export async function getV1betaParentServicePerimeters(
  args: InferRequestType<(typeof client.v1beta)[':parent']['servicePerimeters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].servicePerimeters.$get(args, options))
}

export async function postV1betaParentServicePerimeters(
  args: InferRequestType<(typeof client.v1beta)[':parent']['servicePerimeters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].servicePerimeters.$post(args, options))
}
