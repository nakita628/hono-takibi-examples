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

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1ParentChannels(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].channels.$get(args, options))
}

export async function postV1beta1ParentChannels(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].channels.$post(args, options))
}

export async function getV1beta1ParentDomains(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].domains.$get(args, options))
}

export async function postV1beta1ParentDomains(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].domains.$post(args, options))
}

export async function getV1beta1ParentFiles(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].files.$get(args, options))
}

export async function getV1beta1ParentReleases(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].releases.$get(args, options))
}

export async function postV1beta1ParentReleases(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].releases.$post(args, options))
}

export async function getV1beta1ParentSites(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].sites.$get(args, options))
}

export async function postV1beta1ParentSites(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].sites.$post(args, options))
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

export async function postV1beta1ParentVersionsClone(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['versions:clone'].$post(args, options))
}

export async function postV1beta1ParentPopulateFiles(
  args: InferRequestType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:populateFiles'].$post(args, options))
}
