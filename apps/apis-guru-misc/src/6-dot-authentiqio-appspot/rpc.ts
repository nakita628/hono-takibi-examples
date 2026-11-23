import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postKey(
  args: InferRequestType<typeof client.key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key.$post(args, options))
}

export async function deleteKey(
  args: InferRequestType<typeof client.key.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key.$delete(args, options))
}

export async function getKeyPK(
  args: InferRequestType<(typeof client.key)[':PK']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':PK'].$get(args, options))
}

export async function putKeyPK(
  args: InferRequestType<(typeof client.key)[':PK']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':PK'].$put(args, options))
}

export async function postKeyPK(
  args: InferRequestType<(typeof client.key)[':PK']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':PK'].$post(args, options))
}

export async function deleteKeyPK(
  args: InferRequestType<(typeof client.key)[':PK']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':PK'].$delete(args, options))
}

export async function headKeyPK(
  args: InferRequestType<(typeof client.key)[':PK']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':PK'].$head(args, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postScope(
  args: InferRequestType<typeof client.scope.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope.$post(args, options))
}

export async function getScopeJob(
  args: InferRequestType<(typeof client.scope)[':job']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope[':job'].$get(args, options))
}

export async function putScopeJob(
  args: InferRequestType<(typeof client.scope)[':job']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope[':job'].$put(args, options))
}

export async function postScopeJob(
  args: InferRequestType<(typeof client.scope)[':job']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope[':job'].$post(args, options))
}

export async function deleteScopeJob(
  args: InferRequestType<(typeof client.scope)[':job']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope[':job'].$delete(args, options))
}

export async function headScopeJob(
  args: InferRequestType<(typeof client.scope)[':job']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scope[':job'].$head(args, options))
}
