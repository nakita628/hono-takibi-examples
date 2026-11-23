import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Attributes(
  args: InferRequestType<typeof client.v1.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attributes.$get(args, options))
}

export async function getV1Categories(
  args: InferRequestType<typeof client.v1.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.categories.$get(args, options))
}

export async function getV1CategoriesBatchGet(
  args: InferRequestType<(typeof client.v1)['categories:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['categories:batchGet'].$get(args, options))
}

export async function getV1ChainsSearch(
  args: InferRequestType<(typeof client.v1)['chains:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['chains:search'].$get(args, options))
}

export async function postV1GoogleLocationsSearch(
  args: InferRequestType<(typeof client.v1)['googleLocations:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['googleLocations:search'].$post(args, options))
}

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

export async function postV1NameAssociate(
  args: InferRequestType<(typeof client.v1)[':name:associate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:associate'].$post(args, options))
}

export async function postV1NameClearLocationAssociation(
  args: InferRequestType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:clearLocationAssociation'].$post(args, options))
}

export async function getV1NameGetGoogleUpdated(
  args: InferRequestType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getGoogleUpdated'].$get(args, options))
}

export async function getV1ParentLocations(
  args: InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].locations.$get(args, options))
}

export async function postV1ParentLocations(
  args: InferRequestType<(typeof client.v1)[':parent']['locations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].locations.$post(args, options))
}
