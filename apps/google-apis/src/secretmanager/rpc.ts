import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function getV1beta1NameAccess(
  args: InferRequestType<(typeof client.v1beta1)[':name:access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:access'].$get(args, options))
}

export async function postV1beta1NameDestroy(
  args: InferRequestType<(typeof client.v1beta1)[':name:destroy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:destroy'].$post(args, options))
}

export async function postV1beta1NameDisable(
  args: InferRequestType<(typeof client.v1beta1)[':name:disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:disable'].$post(args, options))
}

export async function postV1beta1NameEnable(
  args: InferRequestType<(typeof client.v1beta1)[':name:enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:enable'].$post(args, options))
}

export async function getV1beta1ParentSecrets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].secrets.$get(args, options))
}

export async function postV1beta1ParentSecrets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].secrets.$post(args, options))
}

export async function getV1beta1ParentVersions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].versions.$get(args, options))
}

export async function postV1beta1ParentAddVersion(
  args: InferRequestType<(typeof client.v1beta1)[':parent:addVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:addVersion'].$post(args, options))
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
