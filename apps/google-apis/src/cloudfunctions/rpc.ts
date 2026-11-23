import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2NameLocations(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].locations.$get(args, options))
}

export async function getV2NameOperations(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].operations.$get(args, options))
}

export async function postV2NameAbortFunctionUpgrade(
  args: InferRequestType<(typeof client.v2)[':name:abortFunctionUpgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:abortFunctionUpgrade'].$post(args, options))
}

export async function postV2NameCommitFunctionUpgrade(
  args: InferRequestType<(typeof client.v2)[':name:commitFunctionUpgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:commitFunctionUpgrade'].$post(args, options))
}

export async function postV2NameGenerateDownloadUrl(
  args: InferRequestType<(typeof client.v2)[':name:generateDownloadUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:generateDownloadUrl'].$post(args, options))
}

export async function postV2NameRedirectFunctionUpgradeTraffic(
  args: InferRequestType<(typeof client.v2)[':name:redirectFunctionUpgradeTraffic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:redirectFunctionUpgradeTraffic'].$post(args, options))
}

export async function postV2NameRollbackFunctionUpgradeTraffic(
  args: InferRequestType<(typeof client.v2)[':name:rollbackFunctionUpgradeTraffic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:rollbackFunctionUpgradeTraffic'].$post(args, options))
}

export async function postV2NameSetupFunctionUpgradeConfig(
  args: InferRequestType<(typeof client.v2)[':name:setupFunctionUpgradeConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:setupFunctionUpgradeConfig'].$post(args, options))
}

export async function getV2ParentFunctions(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].functions.$get(args, options))
}

export async function postV2ParentFunctions(
  args: InferRequestType<(typeof client.v2)[':parent']['functions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].functions.$post(args, options))
}

export async function postV2ParentFunctionsGenerateUploadUrl(
  args: InferRequestType<(typeof client.v2)[':parent']['functions:generateUploadUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':parent']['functions:generateUploadUrl'].$post(args, options),
  )
}

export async function getV2ParentRuntimes(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].runtimes.$get(args, options))
}

export async function getV2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:getIamPolicy'].$get(args, options))
}

export async function postV2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
}
