import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Catalogs(
  args: InferRequestType<typeof client.v1beta1.catalogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.catalogs.$get(args, options))
}

export async function postV1beta1Catalogs(
  args: InferRequestType<typeof client.v1beta1.catalogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.catalogs.$post(args, options))
}

export async function getV1beta1Operations(
  args: InferRequestType<typeof client.v1beta1.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.operations.$get(args, options))
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

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameCopy(
  args: InferRequestType<(typeof client.v1beta1)[':name:copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:copy'].$post(args, options))
}

export async function postV1beta1NameUndelete(
  args: InferRequestType<(typeof client.v1beta1)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:undelete'].$post(args, options))
}

export async function getV1beta1ParentAssociations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].associations.$get(args, options))
}

export async function postV1beta1ParentAssociations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['associations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].associations.$post(args, options))
}

export async function getV1beta1ParentProducts(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].products.$get(args, options))
}

export async function postV1beta1ParentProducts(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].products.$post(args, options))
}

export async function getV1beta1ParentVersions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].versions.$get(args, options))
}

export async function postV1beta1ParentVersions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].versions.$post(args, options))
}

export async function postV1beta1ProductIconsUpload(
  args: InferRequestType<(typeof client.v1beta1)[':product']['icons:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':product']['icons:upload'].$post(args, options))
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
