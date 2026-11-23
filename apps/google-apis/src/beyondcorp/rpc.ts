import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AppConnectorReportStatus(
  args: InferRequestType<(typeof client.v1)[':appConnector:reportStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':appConnector:reportStatus'].$post(args, options))
}

export async function getV1AppConnectorResolveInstanceConfig(
  args: InferRequestType<(typeof client.v1)[':appConnector:resolveInstanceConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':appConnector:resolveInstanceConfig'].$get(args, options))
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

export async function getV1ParentAppConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['appConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appConnections.$get(args, options))
}

export async function postV1ParentAppConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['appConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appConnections.$post(args, options))
}

export async function getV1ParentAppConnectionsResolve(
  args: InferRequestType<(typeof client.v1)[':parent']['appConnections:resolve']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['appConnections:resolve'].$get(args, options))
}

export async function getV1ParentAppConnectors(
  args: InferRequestType<(typeof client.v1)[':parent']['appConnectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appConnectors.$get(args, options))
}

export async function postV1ParentAppConnectors(
  args: InferRequestType<(typeof client.v1)[':parent']['appConnectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appConnectors.$post(args, options))
}

export async function getV1ParentAppGateways(
  args: InferRequestType<(typeof client.v1)[':parent']['appGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appGateways.$get(args, options))
}

export async function postV1ParentAppGateways(
  args: InferRequestType<(typeof client.v1)[':parent']['appGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appGateways.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
