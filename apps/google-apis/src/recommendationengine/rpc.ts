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

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NamePredict(
  args: InferRequestType<(typeof client.v1beta1)[':name:predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:predict'].$post(args, options))
}

export async function getV1beta1ParentCatalogItems(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['catalogItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].catalogItems.$get(args, options))
}

export async function postV1beta1ParentCatalogItems(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['catalogItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].catalogItems.$post(args, options))
}

export async function postV1beta1ParentCatalogItemsImport(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['catalogItems:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['catalogItems:import'].$post(args, options))
}

export async function getV1beta1ParentCatalogs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['catalogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].catalogs.$get(args, options))
}

export async function getV1beta1ParentPredictionApiKeyRegistrations(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['predictionApiKeyRegistrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].predictionApiKeyRegistrations.$get(args, options),
  )
}

export async function postV1beta1ParentPredictionApiKeyRegistrations(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['predictionApiKeyRegistrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].predictionApiKeyRegistrations.$post(args, options),
  )
}

export async function getV1beta1ParentUserEvents(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].userEvents.$get(args, options))
}

export async function getV1beta1ParentUserEventsCollect(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents:collect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['userEvents:collect'].$get(args, options))
}

export async function postV1beta1ParentUserEventsImport(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['userEvents:import'].$post(args, options))
}

export async function postV1beta1ParentUserEventsPurge(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents:purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['userEvents:purge'].$post(args, options))
}

export async function postV1beta1ParentUserEventsRejoin(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents:rejoin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['userEvents:rejoin'].$post(args, options))
}

export async function postV1beta1ParentUserEventsWrite(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userEvents:write']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['userEvents:write'].$post(args, options))
}
