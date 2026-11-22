import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1alpha1GroupAddAssets(
  args: InferRequestType<(typeof client.v1alpha1)[':group:addAssets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':group:addAssets'].$post(args, options))
}

export async function postV1alpha1GroupRemoveAssets(
  args: InferRequestType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':group:removeAssets'].$post(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function getV1alpha1NameLocations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].locations.$get(args, options))
}

export async function getV1alpha1NameOperations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].operations.$get(args, options))
}

export async function postV1alpha1NameCancel(
  args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
}

export async function postV1alpha1NameRun(
  args: InferRequestType<(typeof client.v1alpha1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:run'].$post(args, options))
}

export async function postV1alpha1NameValidate(
  args: InferRequestType<(typeof client.v1alpha1)[':name:validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:validate'].$post(args, options))
}

export async function getV1alpha1ParentAssets(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].assets.$get(args, options))
}

export async function postV1alpha1ParentAssetsAggregateValues(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1alpha1[':parent']['assets:aggregateValues'].$post(args, options),
  )
}

export async function postV1alpha1ParentAssetsBatchDelete(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent']['assets:batchDelete'].$post(args, options))
}

export async function postV1alpha1ParentAssetsBatchUpdate(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent']['assets:batchUpdate'].$post(args, options))
}

export async function postV1alpha1ParentAssetsReportAssetFrames(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1alpha1[':parent']['assets:reportAssetFrames'].$post(args, options),
  )
}

export async function getV1alpha1ParentGroups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].groups.$get(args, options))
}

export async function postV1alpha1ParentGroups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].groups.$post(args, options))
}

export async function getV1alpha1ParentImportDataFiles(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].importDataFiles.$get(args, options))
}

export async function postV1alpha1ParentImportDataFiles(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].importDataFiles.$post(args, options))
}

export async function getV1alpha1ParentImportJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].importJobs.$get(args, options))
}

export async function postV1alpha1ParentImportJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].importJobs.$post(args, options))
}

export async function getV1alpha1ParentPreferenceSets(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].preferenceSets.$get(args, options))
}

export async function postV1alpha1ParentPreferenceSets(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].preferenceSets.$post(args, options))
}

export async function getV1alpha1ParentReportConfigs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].reportConfigs.$get(args, options))
}

export async function postV1alpha1ParentReportConfigs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].reportConfigs.$post(args, options))
}

export async function getV1alpha1ParentReports(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].reports.$get(args, options))
}

export async function postV1alpha1ParentReports(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].reports.$post(args, options))
}

export async function getV1alpha1ParentSources(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].sources.$get(args, options))
}

export async function postV1alpha1ParentSources(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].sources.$post(args, options))
}
