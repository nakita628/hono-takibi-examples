import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function postV1beta1NameQuery(
  args: InferRequestType<(typeof client.v1beta1)[':name:query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:query'].$post(args, options))
}

export async function getV1beta1ParentAnomalies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].anomalies.$get(args, options))
}

export async function getV1beta1ParentErrorIssuesSearch(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['errorIssues:search'].$get(args, options))
}

export async function getV1beta1ParentErrorReportsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['errorReports:search'].$get(args, options))
}
