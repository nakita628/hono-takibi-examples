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

export async function postV1betaNameCancel(
  args: InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:cancel'].$post(args, options))
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

export async function getV1betaParentWorkstationClusters(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstationClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstationClusters.$get(args, options))
}

export async function postV1betaParentWorkstationClusters(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstationClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstationClusters.$post(args, options))
}

export async function getV1betaParentWorkstationConfigs(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstationConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstationConfigs.$get(args, options))
}

export async function postV1betaParentWorkstationConfigs(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstationConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstationConfigs.$post(args, options))
}

export async function getV1betaParentWorkstationConfigsListUsable(
  args: InferRequestType<
    (typeof client.v1beta)[':parent']['workstationConfigs:listUsable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent']['workstationConfigs:listUsable'].$get(args, options),
  )
}

export async function getV1betaParentWorkstations(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstations.$get(args, options))
}

export async function postV1betaParentWorkstations(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].workstations.$post(args, options))
}

export async function getV1betaParentWorkstationsListUsable(
  args: InferRequestType<(typeof client.v1beta)[':parent']['workstations:listUsable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent']['workstations:listUsable'].$get(args, options),
  )
}

export async function getV1betaResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1betaResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1betaResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':resource:testIamPermissions'].$post(args, options))
}

export async function postV1betaWorkstationGenerateAccessToken(
  args: InferRequestType<(typeof client.v1beta)[':workstation:generateAccessToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':workstation:generateAccessToken'].$post(args, options))
}
