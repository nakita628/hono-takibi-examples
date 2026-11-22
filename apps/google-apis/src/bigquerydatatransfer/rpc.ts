import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function postV1NameCheckValidCreds(
  args: InferRequestType<(typeof client.v1)[':name:checkValidCreds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:checkValidCreds'].$post(args, options))
}

export async function postV1NameEnrollDataSources(
  args: InferRequestType<(typeof client.v1)[':name:enrollDataSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:enrollDataSources'].$post(args, options))
}

export async function getV1ParentDataSources(
  args: InferRequestType<(typeof client.v1)[':parent']['dataSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataSources.$get(args, options))
}

export async function getV1ParentRuns(
  args: InferRequestType<(typeof client.v1)[':parent']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].runs.$get(args, options))
}

export async function getV1ParentTransferConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['transferConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].transferConfigs.$get(args, options))
}

export async function postV1ParentTransferConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['transferConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].transferConfigs.$post(args, options))
}

export async function getV1ParentTransferLogs(
  args: InferRequestType<(typeof client.v1)[':parent']['transferLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].transferLogs.$get(args, options))
}

export async function postV1ParentScheduleRuns(
  args: InferRequestType<(typeof client.v1)[':parent:scheduleRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:scheduleRuns'].$post(args, options))
}

export async function postV1ParentStartManualRuns(
  args: InferRequestType<(typeof client.v1)[':parent:startManualRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:startManualRuns'].$post(args, options))
}
