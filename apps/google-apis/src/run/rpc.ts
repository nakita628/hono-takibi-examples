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

export async function getV2NameOperations(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].operations.$get(args, options))
}

export async function postV2NameCancel(
  args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:cancel'].$post(args, options))
}

export async function postV2NameRun(
  args: InferRequestType<(typeof client.v2)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:run'].$post(args, options))
}

export async function postV2NameWait(
  args: InferRequestType<(typeof client.v2)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:wait'].$post(args, options))
}

export async function getV2ParentExecutions(
  args: InferRequestType<(typeof client.v2)[':parent']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].executions.$get(args, options))
}

export async function getV2ParentJobs(
  args: InferRequestType<(typeof client.v2)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].jobs.$get(args, options))
}

export async function postV2ParentJobs(
  args: InferRequestType<(typeof client.v2)[':parent']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].jobs.$post(args, options))
}

export async function getV2ParentRevisions(
  args: InferRequestType<(typeof client.v2)[':parent']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].revisions.$get(args, options))
}

export async function getV2ParentServices(
  args: InferRequestType<(typeof client.v2)[':parent']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].services.$get(args, options))
}

export async function postV2ParentServices(
  args: InferRequestType<(typeof client.v2)[':parent']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].services.$post(args, options))
}

export async function getV2ParentTasks(
  args: InferRequestType<(typeof client.v2)[':parent']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].tasks.$get(args, options))
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
