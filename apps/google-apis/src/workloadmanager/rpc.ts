import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1LocationInsightsWriteInsight(
  args: InferRequestType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location']['insights:writeInsight'].$post(args, options))
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

export async function postV1NameExecutionsRun(
  args: InferRequestType<(typeof client.v1)[':name']['executions:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name']['executions:run'].$post(args, options))
}

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function getV1ParentEvaluations(
  args: InferRequestType<(typeof client.v1)[':parent']['evaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].evaluations.$get(args, options))
}

export async function postV1ParentEvaluations(
  args: InferRequestType<(typeof client.v1)[':parent']['evaluations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].evaluations.$post(args, options))
}

export async function getV1ParentExecutions(
  args: InferRequestType<(typeof client.v1)[':parent']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].executions.$get(args, options))
}

export async function getV1ParentResults(
  args: InferRequestType<(typeof client.v1)[':parent']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].results.$get(args, options))
}

export async function getV1ParentRules(
  args: InferRequestType<(typeof client.v1)[':parent']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rules.$get(args, options))
}

export async function getV1ParentScannedResources(
  args: InferRequestType<(typeof client.v1)[':parent']['scannedResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].scannedResources.$get(args, options))
}
