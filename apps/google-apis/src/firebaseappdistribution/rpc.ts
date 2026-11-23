import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AppReleasesUpload(
  args: InferRequestType<(typeof client.v1)[':app']['releases:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app']['releases:upload'].$post(args, options))
}

export async function postV1GroupBatchJoin(
  args: InferRequestType<(typeof client.v1)[':group:batchJoin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':group:batchJoin'].$post(args, options))
}

export async function postV1GroupBatchLeave(
  args: InferRequestType<(typeof client.v1)[':group:batchLeave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':group:batchLeave'].$post(args, options))
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

export async function postV1NameDistribute(
  args: InferRequestType<(typeof client.v1)[':name:distribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:distribute'].$post(args, options))
}

export async function postV1NameWait(
  args: InferRequestType<(typeof client.v1)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:wait'].$post(args, options))
}

export async function getV1ParentFeedbackReports(
  args: InferRequestType<(typeof client.v1)[':parent']['feedbackReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].feedbackReports.$get(args, options))
}

export async function getV1ParentGroups(
  args: InferRequestType<(typeof client.v1)[':parent']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].groups.$get(args, options))
}

export async function postV1ParentGroups(
  args: InferRequestType<(typeof client.v1)[':parent']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].groups.$post(args, options))
}

export async function getV1ParentReleases(
  args: InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].releases.$get(args, options))
}

export async function postV1ParentReleasesBatchDelete(
  args: InferRequestType<(typeof client.v1)[':parent']['releases:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['releases:batchDelete'].$post(args, options))
}

export async function getV1ParentTesters(
  args: InferRequestType<(typeof client.v1)[':parent']['testers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].testers.$get(args, options))
}

export async function postV1ProjectTestersBatchAdd(
  args: InferRequestType<(typeof client.v1)[':project']['testers:batchAdd']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':project']['testers:batchAdd'].$post(args, options))
}

export async function postV1ProjectTestersBatchRemove(
  args: InferRequestType<(typeof client.v1)[':project']['testers:batchRemove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':project']['testers:batchRemove'].$post(args, options))
}
