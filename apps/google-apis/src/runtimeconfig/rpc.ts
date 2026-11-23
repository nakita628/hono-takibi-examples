import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function putV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$put(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function postV1beta1NameWatch(
  args: InferRequestType<(typeof client.v1beta1)[':name:watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:watch'].$post(args, options))
}

export async function getV1beta1ParentConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].configs.$get(args, options))
}

export async function postV1beta1ParentConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].configs.$post(args, options))
}

export async function getV1beta1ParentVariables(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].variables.$get(args, options))
}

export async function postV1beta1ParentVariables(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].variables.$post(args, options))
}

export async function getV1beta1ParentWaiters(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].waiters.$get(args, options))
}

export async function postV1beta1ParentWaiters(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].waiters.$post(args, options))
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
