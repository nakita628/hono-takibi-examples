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

export async function postV1betaNameStart(
  args: InferRequestType<(typeof client.v1beta)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:start'].$post(args, options))
}

export async function postV1betaNameStop(
  args: InferRequestType<(typeof client.v1beta)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:stop'].$post(args, options))
}

export async function getV1betaParentCrawledUrls(
  args: InferRequestType<(typeof client.v1beta)[':parent']['crawledUrls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].crawledUrls.$get(args, options))
}

export async function getV1betaParentFindingTypeStats(
  args: InferRequestType<(typeof client.v1beta)[':parent']['findingTypeStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].findingTypeStats.$get(args, options))
}

export async function getV1betaParentFindings(
  args: InferRequestType<(typeof client.v1beta)[':parent']['findings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].findings.$get(args, options))
}

export async function getV1betaParentScanConfigs(
  args: InferRequestType<(typeof client.v1beta)[':parent']['scanConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].scanConfigs.$get(args, options))
}

export async function postV1betaParentScanConfigs(
  args: InferRequestType<(typeof client.v1beta)[':parent']['scanConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].scanConfigs.$post(args, options))
}

export async function getV1betaParentScanRuns(
  args: InferRequestType<(typeof client.v1beta)[':parent']['scanRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].scanRuns.$get(args, options))
}
