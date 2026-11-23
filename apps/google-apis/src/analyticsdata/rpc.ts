import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function postV1betaNameQuery(
  args: InferRequestType<(typeof client.v1beta)[':name:query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:query'].$post(args, options))
}

export async function getV1betaParentAudienceExports(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].audienceExports.$get(args, options))
}

export async function postV1betaParentAudienceExports(
  args: InferRequestType<(typeof client.v1beta)[':parent']['audienceExports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].audienceExports.$post(args, options))
}

export async function postV1betaPropertyBatchRunPivotReports(
  args: InferRequestType<(typeof client.v1beta)[':property:batchRunPivotReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:batchRunPivotReports'].$post(args, options))
}

export async function postV1betaPropertyBatchRunReports(
  args: InferRequestType<(typeof client.v1beta)[':property:batchRunReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:batchRunReports'].$post(args, options))
}

export async function postV1betaPropertyCheckCompatibility(
  args: InferRequestType<(typeof client.v1beta)[':property:checkCompatibility']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:checkCompatibility'].$post(args, options))
}

export async function postV1betaPropertyRunPivotReport(
  args: InferRequestType<(typeof client.v1beta)[':property:runPivotReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:runPivotReport'].$post(args, options))
}

export async function postV1betaPropertyRunRealtimeReport(
  args: InferRequestType<(typeof client.v1beta)[':property:runRealtimeReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:runRealtimeReport'].$post(args, options))
}

export async function postV1betaPropertyRunReport(
  args: InferRequestType<(typeof client.v1beta)[':property:runReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':property:runReport'].$post(args, options))
}
