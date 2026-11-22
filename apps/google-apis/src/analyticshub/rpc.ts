import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameSubscribe(
  args: InferRequestType<(typeof client.v1)[':name:subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:subscribe'].$post(args, options))
}

export async function getV1OrganizationDataExchanges(
  args: InferRequestType<(typeof client.v1)[':organization']['dataExchanges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':organization'].dataExchanges.$get(args, options))
}

export async function getV1ParentDataExchanges(
  args: InferRequestType<(typeof client.v1)[':parent']['dataExchanges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataExchanges.$get(args, options))
}

export async function postV1ParentDataExchanges(
  args: InferRequestType<(typeof client.v1)[':parent']['dataExchanges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataExchanges.$post(args, options))
}

export async function getV1ParentListings(
  args: InferRequestType<(typeof client.v1)[':parent']['listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].listings.$get(args, options))
}

export async function postV1ParentListings(
  args: InferRequestType<(typeof client.v1)[':parent']['listings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].listings.$post(args, options))
}

export async function postV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
