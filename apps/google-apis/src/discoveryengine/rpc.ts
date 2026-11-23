import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getV1betaNameOperations(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].operations.$get(args, options))
}

export async function getV1betaParentDocuments(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].documents.$get(args, options))
}

export async function postV1betaParentDocuments(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].documents.$post(args, options))
}

export async function postV1betaParentDocumentsImport(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent']['documents:import'].$post(args, options))
}

export async function getV1betaParentUserEventsCollect(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent']['userEvents:collect'].$get(args, options))
}

export async function postV1betaParentUserEventsImport(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent']['userEvents:import'].$post(args, options))
}

export async function postV1betaParentUserEventsWrite(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent']['userEvents:write'].$post(args, options))
}

export async function postV1betaServingConfigRecommend(
  args: InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':servingConfig:recommend'].$post(args, options))
}
