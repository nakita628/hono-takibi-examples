import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1EnvironmentCheckUpgrade(
  args: InferRequestType<(typeof client.v1beta1)[':environment:checkUpgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':environment:checkUpgrade'].$post(args, options))
}

export async function postV1beta1EnvironmentLoadSnapshot(
  args: InferRequestType<(typeof client.v1beta1)[':environment:loadSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':environment:loadSnapshot'].$post(args, options))
}

export async function postV1beta1EnvironmentSaveSnapshot(
  args: InferRequestType<(typeof client.v1beta1)[':environment:saveSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':environment:saveSnapshot'].$post(args, options))
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameRestartWebServer(
  args: InferRequestType<(typeof client.v1beta1)[':name:restartWebServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:restartWebServer'].$post(args, options))
}

export async function getV1beta1ParentEnvironments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].environments.$get(args, options))
}

export async function postV1beta1ParentEnvironments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].environments.$post(args, options))
}

export async function getV1beta1ParentImageVersions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['imageVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].imageVersions.$get(args, options))
}
