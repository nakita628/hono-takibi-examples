import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Enterprises(
  args: InferRequestType<typeof client.v1.enterprises.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.enterprises.$get(args, options))
}

export async function postV1Enterprises(
  args: InferRequestType<typeof client.v1.enterprises.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.enterprises.$post(args, options))
}

export async function postV1SignupUrls(
  args: InferRequestType<typeof client.v1.signupUrls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signupUrls.$post(args, options))
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

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameIssueCommand(
  args: InferRequestType<(typeof client.v1)[':name:issueCommand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:issueCommand'].$post(args, options))
}

export async function getV1ParentDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].devices.$get(args, options))
}

export async function getV1ParentEnrollmentTokens(
  args: InferRequestType<(typeof client.v1)[':parent']['enrollmentTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].enrollmentTokens.$get(args, options))
}

export async function postV1ParentEnrollmentTokens(
  args: InferRequestType<(typeof client.v1)[':parent']['enrollmentTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].enrollmentTokens.$post(args, options))
}

export async function getV1ParentPolicies(
  args: InferRequestType<(typeof client.v1)[':parent']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].policies.$get(args, options))
}

export async function getV1ParentWebApps(
  args: InferRequestType<(typeof client.v1)[':parent']['webApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].webApps.$get(args, options))
}

export async function postV1ParentWebApps(
  args: InferRequestType<(typeof client.v1)[':parent']['webApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].webApps.$post(args, options))
}

export async function postV1ParentWebTokens(
  args: InferRequestType<(typeof client.v1)[':parent']['webTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].webTokens.$post(args, options))
}
